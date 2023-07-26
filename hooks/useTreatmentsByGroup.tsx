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

const mapImplicitFilters: { [key: string]: string[] } = {
  [PRODUCT_TYPE.ABUTMENT]: ['indication', 'implantLine', 'diameterPlatform'],
  [PRODUCT_TYPE.HEALING_ABUTMENT]: [
    'indication',
    'implantLine',
    'diameterPlatform',
    'platformSwitch',
  ],
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: [
    'indication',
    'implantLine',
    'abutmentLine',
    'diameterPlatform',
  ],
  [PRODUCT_TYPE.IMPRESSION]: [
    'implantLine',
    'abutmentLine',
    'diameterPlatform',
    'platformSwitch',
  ],
};

const mapPreviousTab: { [key: string]: string } = {
  [PRODUCT_TYPE.ABUTMENT]: PRODUCT_TYPE.IMPLANT,
  [PRODUCT_TYPE.HEALING_ABUTMENT]: PRODUCT_TYPE.ABUTMENT,
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: PRODUCT_TYPE.HEALING_ABUTMENT,
  [PRODUCT_TYPE.IMPRESSION]: PRODUCT_TYPE.TEMPORARY_ABUTMENT,
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
  const previousProductTab = mapPreviousTab[activeProductTab];
  const filterParams = mapImplicitFilters[activeProductTab];
  const groups: { [key: string]: TreatmentVisualization[] } = {};

  const teethWithTreatments = availableTeethByProductType.map((toothNumber) => {
    return treatments[toothNumber as keyof typeof treatments];
  });

  const groupwiseTeethWithTreatments = teethWithTreatments.reduce(
    (acc, treatment) => {
      acc[treatment.tabgroup] = acc[treatment.tabgroup] || [];
      acc[treatment.tabgroup].push(treatment);
      return acc;
    },
    {} as { [key: string]: TreatmentVisualization[] }
  );

  const toothGroupsByTreatmentAndLockStatusBefore = Object.entries(
    groupwiseTeethWithTreatments
  ).reduce(
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
          group: 'locked',
          tabgroup: tabgroup,
          teeth: lockedTeethGroup,
          open: false,
          tooltipText:
            mappingToApply?.[tabgroup as keyof typeof mappingToApply]
              ?.tooltipText,
        });

      return toothGroupsByTreatmentAndLockStatusAccumulator;
    },
    [] as {
      group: string;
      tabgroup?: string;
      teeth: TreatmentVisualization[];
      open: boolean;
      tooltipText: string;
    }[]
  );

  unLockedTeethGroup.forEach((tooth) => {
    const fqlxTooth = patientFile.teeth?.find(
      (localTooth) => Number(localTooth.name) == tooth.toothNumber
    );
    const fqlxToothProducts = [
      ...(fqlxTooth?.crown.treatmentDoc.selectedProducts ?? []),
      ...(fqlxTooth?.root.treatmentDoc.selectedProducts ?? []),
    ];
    const previousTabProduct = fqlxToothProducts.find(({ selectedProduct }) =>
      Object.keys(selectedProduct ?? {}).includes(previousProductTab)
    );

    const filterValues: { [key: string]: string } = {};

    filterParams?.forEach((filter) => {
      if (filter === 'indication') {
        filterValues[filter] = tooth.indication;
      } else {
        filterValues[filter] =
          // @ts-ignore
          previousTabProduct?.selectedProduct?.[previousProductTab]?.[filter];
      }
    });

    if (Object.keys(filterValues).length === 0) {
      toothGroupsByTreatmentAndLockStatusBefore.push({
        group: `${tooth.toothNumber}`,
        teeth: [tooth],
        open: true,
        tooltipText: `${tooth.toothNumber}`,
      });
    } else {
      groups[JSON.stringify(filterValues)] =
        groups[JSON.stringify(filterValues)] || [];
      groups[JSON.stringify(filterValues)].push(tooth);
    }
  });

  Object.entries(groups).forEach(([key, value]) => {
    toothGroupsByTreatmentAndLockStatusBefore.push({
      group: key,
      teeth: value,
      open: true,
      tooltipText: key,
    });
  });

  return {
    groupwiseTeethWithTreatments,
    toothGroupsByTreatmentAndLockStatus:
      toothGroupsByTreatmentAndLockStatusBefore,
  };
}
