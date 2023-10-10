import { useMemo, useState } from 'react';
import { useProductStore } from '../zustand/product';
import { TREATMENT_GROUP, PRODUCT_TYPE } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { TreatmentVisualization } from '../zustand/teethDiagram/interface';
import { useLocalStorage, useQuery } from 'fauna-typed';
import { PatientFile, Query } from '../fqlx-generated/typedefs';
import { DISCOVERYMODE } from '../__mocks__/flow';

interface MapProductRequirementsProps {
  [key: string]: {
    [key: string]: {
      requiredProductTypes: string[];
      tooltipText: string;
    };
  };
}

interface ImplicitFiltersProps {
  [key: string]: { name: string; productType: string };
}

interface MapImplicitFiltersProps {
  [key: string]: { name: string; productType: string }[];
}
interface Group {
  treatmentgroup: string;
  teeth: TreatmentVisualization[];
  open: boolean;
  tooltipText: string;
  areProductsSelected: boolean;
}

const mapProductRequirements: MapProductRequirementsProps = {
  [PRODUCT_TYPE.ABUTMENT]: {
    [TREATMENT_GROUP.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      tooltipText: 'please select implants first',
    },
  },
  [PRODUCT_TYPE.HEALING_ABUTMENT]: {
    [TREATMENT_GROUP.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      tooltipText: 'please select implants first',
    },
  },
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: {
    [TREATMENT_GROUP.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT, PRODUCT_TYPE.ABUTMENT],
      tooltipText: 'please select implants and abutment first',
    },
  },
  [PRODUCT_TYPE.IMPRESSION]: {
    [TREATMENT_GROUP.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT, PRODUCT_TYPE.ABUTMENT],
      tooltipText: 'please select implants and abutment first',
    },
  },
};

const implicitFilters: ImplicitFiltersProps = {
  indication: { name: 'indication', productType: '' },
  indications: { name: 'indications', productType: '' },
  implantLine: { name: 'implantLine', productType: PRODUCT_TYPE.IMPLANT },
  diameterPlatform: {
    name: 'diameterPlatform',
    productType: PRODUCT_TYPE.IMPLANT,
  },
  abutmentLine: { name: 'abutmentLine', productType: PRODUCT_TYPE.ABUTMENT },
  platformSwitch: {
    name: 'platformSwitch',
    productType: PRODUCT_TYPE.ABUTMENT,
  },
  heightsGingiva: {
    name: 'heightsGingiva',
    productType: PRODUCT_TYPE.ABUTMENT,
  },
};

const mapImplicitFilters: MapImplicitFiltersProps = {
  [PRODUCT_TYPE.ABUTMENT]: [
    implicitFilters.indications,
    implicitFilters.implantLine,
    implicitFilters.diameterPlatform,
  ],
  [PRODUCT_TYPE.HEALING_ABUTMENT]: [
    implicitFilters.implantLine,
    implicitFilters.diameterPlatform,
    implicitFilters.platformSwitch,
  ],
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: [
    implicitFilters.indication,
    implicitFilters.implantLine,
    implicitFilters.abutmentLine,
    implicitFilters.diameterPlatform,
    implicitFilters.platformSwitch,
  ],
  [PRODUCT_TYPE.IMPRESSION]: [
    implicitFilters.implantLine,
    implicitFilters.abutmentLine,
    implicitFilters.diameterPlatform,
    implicitFilters.platformSwitch,
  ],
};

export function useTreatmentsByGroup() {
  const {
    availableTeethByProductType,
    acceptedTreatmentGroups,
    activeProductTab,
    activePatientFileId,
  } = useProductStore();
  const { treatments } = useTeethDiagramStore((state) => state);
  const query = useQuery<Query>();
  const [toothGroups, setToothGroups] = useState<Group[]>([]);
  const { value: discoveryModePatientFile } = useLocalStorage(
    `${DISCOVERYMODE}`,
    'PatientFile'
  );

  const patientFile = useMemo(() => {
    if (activePatientFileId === `${DISCOVERYMODE}`) {
      return discoveryModePatientFile as PatientFile;
    } else {
      return activePatientFileId
        ? query.PatientFile.byId(activePatientFileId)
            .project({ teeth: true })
            .exec()
        : { teeth: [] };
    }
  }, [activePatientFileId, query, discoveryModePatientFile]);

  const mappingToApply = mapProductRequirements[activeProductTab];
  const unLockedTeethGroup: TreatmentVisualization[] = [];
  const filterParams = mapImplicitFilters[activeProductTab];

  const teethWithTreatments = useMemo(() => {
    return availableTeethByProductType.map((toothNumber) => {
      return treatments[toothNumber as keyof typeof treatments];
    });
  }, [availableTeethByProductType]);

  const getImplicitGroupsObject = () => {
    const groups: {
      [key: string]: {
        areProductsSelected: boolean;
        teeth: TreatmentVisualization[];
      };
    } = {};

    unLockedTeethGroup.forEach((tooth) => {
      const fqlxTooth = patientFile.teeth?.find(
        (localTooth: { name: any }) =>
          Number(localTooth.name) === tooth.toothNumber
      );
      const fqlxToothProducts = [
        ...(fqlxTooth?.crown.treatmentDoc.selectedProducts ?? []),
        ...(fqlxTooth?.root.treatmentDoc.selectedProducts ?? []),
      ];

      const filterValues: { [key: string]: string[] } = {};

      const isProductSelected = fqlxToothProducts.some(
        (product) =>
          product.selectedProduct?.[
            activeProductTab as keyof typeof product.selectedProduct
          ]
      );

      filterParams?.forEach((filter) => {
        if (['indications', 'indication'].includes(filter.name)) {
          filterValues[filter.name] = [`"${tooth.indication}"`];
        } else {
          const previousTabProduct = fqlxToothProducts.find(
            ({ selectedProduct }) =>
              selectedProduct?.[
                filter.productType as keyof typeof selectedProduct
              ]
          );
          if (previousTabProduct) {
            const filterValue =
              // @ts-ignore
              previousTabProduct?.selectedProduct?.[filter.productType]?.[
                filter.name
              ];
            const filterValueType = typeof filterValue;

            if (filterValueType === 'string' && filterValue) {
              filterValues[filter.name] = [`"${filterValue}"`];
            } else if (
              filterValueType === 'number' ||
              filterValueType === 'boolean'
            ) {
              filterValues[filter.name] = [filterValue];
            } else {
              filterValues[filter.name] = filterValue;
            }
          }
        }
      });

      groups[JSON.stringify(filterValues)] = groups[
        JSON.stringify(filterValues)
      ] || { areProductsSelected: true, teeth: [] };
      groups[JSON.stringify(filterValues)].areProductsSelected =
        groups[JSON.stringify(filterValues)].areProductsSelected &&
        isProductSelected;
      groups[JSON.stringify(filterValues)].teeth.push(tooth);
    });

    return groups;
  };

  const getToothGroups = () => {
    const groupwiseTeethWithTreatments = teethWithTreatments.reduce(
      (acc, treatment) => {
        if (treatment) {
          acc[treatment.treatmentgroup] = acc[treatment.treatmentgroup] || [];
          acc[treatment.treatmentgroup].push(treatment);
        }
        return acc;
      },
      {} as { [key: string]: TreatmentVisualization[] }
    );

    const lockedGroups = Object.entries(groupwiseTeethWithTreatments).reduce(
      (
        toothGroupsByTreatmentAndLockStatusAccumulator,
        [treatmentgroup, teeth]
      ) => {
        if (
          !acceptedTreatmentGroups.includes(treatmentgroup as TREATMENT_GROUP)
        ) {
          return toothGroupsByTreatmentAndLockStatusAccumulator;
        }

        const requiredProductTypes =
          mappingToApply?.[treatmentgroup as keyof typeof mappingToApply]
            ?.requiredProductTypes;

        const lockedTeethGroup: TreatmentVisualization[] = [];

        teeth.forEach((tooth) => {
          const fqlxTooth = patientFile.teeth?.find(
            (localTooth: { name: any }) =>
              Number(localTooth.name) === tooth.toothNumber
          );
          const fqlxToothProducts = [
            ...(fqlxTooth?.crown.treatmentDoc.selectedProducts ?? []),
            ...(fqlxTooth?.root.treatmentDoc.selectedProducts ?? []),
          ];
          let isToothUnlocked = true;

          requiredProductTypes?.forEach((productType) => {
            isToothUnlocked =
              isToothUnlocked &&
              fqlxToothProducts.some(
                (product) =>
                  product.selectedProduct?.[
                    productType as keyof typeof product.selectedProduct
                  ]
              );
          });

          if (isToothUnlocked) {
            unLockedTeethGroup.push(tooth);
          } else {
            lockedTeethGroup.push(tooth);
          }
        });

        lockedTeethGroup.length &&
          toothGroupsByTreatmentAndLockStatusAccumulator.push({
            treatmentgroup: treatmentgroup,
            teeth: lockedTeethGroup,
            open: false,
            tooltipText:
              mappingToApply?.[treatmentgroup as keyof typeof mappingToApply]
                ?.tooltipText,
            areProductsSelected: false,
          });

        return toothGroupsByTreatmentAndLockStatusAccumulator;
      },
      [] as Group[]
    );

    const implicitGroupsObject = getImplicitGroupsObject();

    const implicitGroups = Object.entries(implicitGroupsObject).map(
      ([key, value]) => {
        return {
          treatmentgroup: key,
          teeth: value.teeth,
          open: true,
          tooltipText: Object.values(JSON.parse(key))
            .join(', ')
            .replaceAll('"', ''),
          areProductsSelected: value.areProductsSelected,
        };
      }
    );

    setToothGroups([...lockedGroups, ...implicitGroups]);
  };

  return {
    toothGroups,
    getToothGroups,
    patientFile,
  };
}
