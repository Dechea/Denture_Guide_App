import { useMemo } from 'react';
import { useProductStore } from '../zustand/product';
import { GROUP_TYPE, PRODUCT_TYPE } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { TreatmentVisualization } from '../zustand/teethDiagram/interface';
import { useQuery } from 'fqlx-client';
import { Query } from '../fqlx-generated/typedefs';

const mapping = {
  [PRODUCT_TYPE.IMPLANT]: {
    [GROUP_TYPE.IMPLANT_GROUP]: [],
  },
  [PRODUCT_TYPE.ABUTMENT]: {
    [GROUP_TYPE.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT, PRODUCT_TYPE.ABUTMENT],
    [GROUP_TYPE.ABUTMENT_GROUP]: [PRODUCT_TYPE.ABUTMENT],
  },
  [PRODUCT_TYPE.HEALING_ABUTMENT]: {
    [GROUP_TYPE.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT],
  },
  [PRODUCT_TYPE.TEMPORARY_ABUTMENT]: {
    [GROUP_TYPE.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT],
  },
  [PRODUCT_TYPE.IMPRESSION]: {
    [GROUP_TYPE.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT],
  },
  [PRODUCT_TYPE.TOOLS]: {
    [GROUP_TYPE.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT],
  },
};

export function useTreatmentsByGroup({
  productType,
  patientFileId,
}: {
  productType?: PRODUCT_TYPE;
  patientFileId?: string;
}) {
  const { availableTeethByProductType } = useProductStore();
  const { treatments } = useTeethDiagramStore((state) => state);
  const query = useQuery<Query>();

  const teethWithTreatments = availableTeethByProductType.map((toothNumber) => {
    return treatments[toothNumber as keyof typeof treatments];
  });

  const groupwiseTeethWithTreatments = teethWithTreatments.reduce(
    (acc, treatment) => {
      acc[treatment.group] = acc[treatment.group] || [];
      acc[treatment.group].push(treatment);
      return acc;
    },
    {} as { [key: string]: TreatmentVisualization[] }
  );

  if (patientFileId != undefined && productType != undefined) {
    const patientFile = useMemo(
      () =>
        query.PatientFile.byId(patientFileId).project({ teeth: true }).exec(),
      [patientFileId, query.PatientFile]
    );

    const mappingToApply = mapping[productType];

    const lockedGroupwiseTeeth = Object.entries(
      groupwiseTeethWithTreatments
    ).reduce((acc, [group, teeth]) => {
      const requiredProductTypes =
        mappingToApply[group as keyof typeof mappingToApply];

      let groupSatisfiesRequirement = true;

      teeth.forEach((tooth, index) => {
        const fqlxTooth = patientFile.teeth.find(
          (localTooth) => Number(localTooth.name) == tooth.toothNumber
        );
        let toothSatisfiesRequirement = true;
        requiredProductTypes?.forEach((productType, index) => {
          const fqlxToothProducts = [
            ...(fqlxTooth?.crown.treatmentDoc.selectedProducts || []),
            ...(fqlxTooth?.root.treatmentDoc.selectedProducts || []),
          ];

          toothSatisfiesRequirement =
            toothSatisfiesRequirement &&
            fqlxToothProducts.some((product) =>
              Object.keys(product.selectedProduct || {}).includes(productType)
            );
        });
        groupSatisfiesRequirement =
          groupSatisfiesRequirement && toothSatisfiesRequirement;
      });

      acc[group] = { teeth: teeth, open: groupSatisfiesRequirement };

      return acc;
    }, {} as { [key: string]: { teeth: TreatmentVisualization[]; open: boolean } });
  }

  return { groupwiseTeethWithTreatments };
}
