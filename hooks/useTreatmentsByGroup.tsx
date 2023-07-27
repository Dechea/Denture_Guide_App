import { useMemo } from 'react';
import { useProductStore } from '../zustand/product';
import { TABGROUP_TYPE, PRODUCT_TYPE } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { TreatmentVisualization } from '../zustand/teethDiagram/interface';
import { useQuery } from 'fqlx-client';
import { Query } from '../fqlx-generated/typedefs';

const mapProductRequirements: {
  [key: string]: {
    [key: string]: {
      requiredProductTypes: string[];
      tooltipText: string;
    };
  };
} = {
  [PRODUCT_TYPE.ABUTMENT]: {
    [TABGROUP_TYPE.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      tooltipText: 'please select implants first',
    },
  },
  [PRODUCT_TYPE.HEALING_ABUTMENT]: {
    [TABGROUP_TYPE.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      tooltipText: 'please select implants first',
    },
  },
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: {
    [TABGROUP_TYPE.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT, PRODUCT_TYPE.ABUTMENT],
      tooltipText: 'please select implants and abutment first',
    },
  },
  [PRODUCT_TYPE.IMPRESSION]: {
    [TABGROUP_TYPE.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT, PRODUCT_TYPE.ABUTMENT],
      tooltipText: 'please select implants and abutment first',
    },
  },
};

const implicitFilters: {
  [key: string]: { name: string; productType: string };
} = {
  indication: { name: 'indication', productType: '' },
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
};

const mapImplicitFilters: {
  [key: string]: { name: string; productType: string }[];
} = {
  [PRODUCT_TYPE.ABUTMENT]: [
    implicitFilters.indication,
    implicitFilters.implantLine,
    implicitFilters.diameterPlatform,
  ],
  [PRODUCT_TYPE.HEALING_ABUTMENT]: [
    implicitFilters.indication,
    implicitFilters.implantLine,
    implicitFilters.diameterPlatform,
    implicitFilters.platformSwitch,
  ],
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: [
    implicitFilters.indication,
    implicitFilters.implantLine,
    implicitFilters.abutmentLine,
    implicitFilters.diameterPlatform,
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

  const patientFile = useMemo(
    () =>
      query.PatientFile.byId(activePatientFileId)
        .project({ teeth: true })
        .exec(),
    [activePatientFileId, query.PatientFile]
  );

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
        (localTooth) => Number(localTooth.name) == tooth.toothNumber
      );
      const fqlxToothProducts = [
        ...(fqlxTooth?.crown.treatmentDoc.selectedProducts ?? []),
        ...(fqlxTooth?.root.treatmentDoc.selectedProducts ?? []),
      ];

      const filterValues: { [key: string]: string } = {};

      const isProductSelected = fqlxToothProducts.some((product) =>
        Object.keys(product.selectedProduct ?? {}).includes(activeProductTab)
      );

      filterParams?.forEach((filter) => {
        if (filter.name === 'indication') {
          filterValues[filter.name] = tooth.indication;
        } else {
          const previousTabProduct = fqlxToothProducts.find(
            ({ selectedProduct }) =>
              Object.keys(selectedProduct ?? {}).includes(filter.productType)
          );
          filterValues[filter.name] =
            // @ts-ignore
            previousTabProduct?.selectedProduct?.[filter.productType]?.[
              filter.name
            ];
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
        acc[treatment.tabgroup] = acc[treatment.tabgroup] || [];
        acc[treatment.tabgroup].push(treatment);
        return acc;
      },
      {} as { [key: string]: TreatmentVisualization[] }
    );

    const lockedGroups = Object.entries(groupwiseTeethWithTreatments).reduce(
      (toothGroupsByTreatmentAndLockStatusAccumulator, [tabgroup, teeth]) => {
        if (!acceptedTreatmentGroups.includes(tabgroup as TABGROUP_TYPE)) {
          return toothGroupsByTreatmentAndLockStatusAccumulator;
        }

        const requiredProductTypes =
          mappingToApply?.[tabgroup as keyof typeof mappingToApply]
            ?.requiredProductTypes;

        const lockedTeethGroup: TreatmentVisualization[] = [];

        teeth.forEach((tooth) => {
          const fqlxTooth = patientFile.teeth?.find(
            (localTooth) => Number(localTooth.name) == tooth.toothNumber
          );
          const fqlxToothProducts = [
            ...(fqlxTooth?.crown.treatmentDoc.selectedProducts ?? []),
            ...(fqlxTooth?.root.treatmentDoc.selectedProducts ?? []),
          ];
          let isToothUnlocked = true;

          requiredProductTypes?.forEach((productType) => {
            isToothUnlocked =
              isToothUnlocked &&
              fqlxToothProducts.some((product) =>
                Object.keys(product.selectedProduct ?? {}).includes(productType)
              );
          });

          if (isToothUnlocked) {
            unLockedTeethGroup.push(tooth);
          } else {
            lockedTeethGroup.push(tooth);
          }
        });

        lockedTeethGroup.length > 0 &&
          toothGroupsByTreatmentAndLockStatusAccumulator.push({
            tabgroup: tabgroup,
            teeth: lockedTeethGroup,
            open: false,
            tooltipText:
              mappingToApply?.[tabgroup as keyof typeof mappingToApply]
                ?.tooltipText,
            areProductsSelected: false,
          });

        return toothGroupsByTreatmentAndLockStatusAccumulator;
      },
      [] as {
        tabgroup: string;
        teeth: TreatmentVisualization[];
        open: boolean;
        tooltipText: string;
        areProductsSelected: boolean;
      }[]
    );

    const implicitGroupsObject = getImplicitGroupsObject();

    const implicitGroups = Object.entries(implicitGroupsObject).map(
      ([key, value]) => {
        return {
          tabgroup: key,
          teeth: value.teeth,
          open: true,
          tooltipText: key,
          areProductsSelected: value.areProductsSelected,
        };
      }
    );

    return [...lockedGroups, ...implicitGroups];
  };

  return {
    getToothGroups,
    patientFile,
  };
}
