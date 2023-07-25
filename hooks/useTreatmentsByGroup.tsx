import { useMemo } from 'react';
import { useProductStore } from '../zustand/product';
import { TABGROUP_TYPE, PRODUCT_TYPE } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { TreatmentVisualization } from '../zustand/teethDiagram/interface';
import { useQuery } from 'fqlx-client';
import { Query } from '../fqlx-generated/typedefs';

const mapping: {
  [key: string]: {
    [key: string]: {
      requiredProductTypes: string[];
      tooltipText: string;
      nextStep?: string[];
    };
  };
} = {
  [PRODUCT_TYPE.IMPLANT]: {},
  [PRODUCT_TYPE.ABUTMENT]: {
    [TABGROUP_TYPE.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      tooltipText: 'please select implants first',
      nextStep: [PRODUCT_TYPE.TEMPORARY_ABUTMENT, PRODUCT_TYPE.IMPRESSION],
    },
  },
  [PRODUCT_TYPE.HEALING_ABUTMENT]: {
    [TABGROUP_TYPE.IMPLANT_GROUP]: {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      tooltipText: 'please select implants first',
      nextStep: [PRODUCT_TYPE.TEMPORARY_ABUTMENT, PRODUCT_TYPE.IMPRESSION],
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
  [PRODUCT_TYPE.TOOLS]: {},
};

export function useTreatmentsByGroup({
  productType = '',
  patientFileId = '',
}: {
  productType?: string;
  patientFileId?: string;
}) {
  const { availableTeethByProductType, acceptedTreatmentGroups } =
    useProductStore();
  const { treatments } = useTeethDiagramStore((state) => state);
  const query = useQuery<Query>();

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

  const patientFile = useMemo(
    () => query.PatientFile.byId(patientFileId).project({ teeth: true }).exec(),
    [patientFileId, query.PatientFile]
  );

  const mappingToApply = mapping[productType];
  const unLockedTeethGroup: TreatmentVisualization[] = [];

  const toothGroupsByTreatmentAndLockStatus = Object.entries(
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
          nextStep:
            mappingToApply?.[tabgroup as keyof typeof mappingToApply]?.nextStep,
        });

      return toothGroupsByTreatmentAndLockStatusAccumulator;
    },
    [] as {
      group: string;
      tabgroup?: string;
      teeth: TreatmentVisualization[];
      open: boolean;
      tooltipText: string;
      nextStep?: string[];
    }[]
  );

  unLockedTeethGroup.length > 0 &&
    toothGroupsByTreatmentAndLockStatus.push({
      group: 'unlocked',
      teeth: unLockedTeethGroup,
      open: true,
      tooltipText: 'unlocked',
    });

  return { groupwiseTeethWithTreatments, toothGroupsByTreatmentAndLockStatus };
}
