import { useQuery } from 'fqlx-client';
import { useProductStore } from '../zustand/product';
import { PRODUCT_TYPE, TABGROUP_TYPE } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { Query } from '../fqlx-generated/typedefs';
import { useMemo } from 'react';

const mapTabsRequirements: {
  [key: string]: {
    requiredProductTypes: string[];
    nextStep: string[];
  }[];
} = {
  [TABGROUP_TYPE.IMPLANT_GROUP]: [
    {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT],
      nextStep: [PRODUCT_TYPE.ABUTMENT, PRODUCT_TYPE.HEALING_ABUTMENT],
    },
    {
      requiredProductTypes: [PRODUCT_TYPE.IMPLANT, PRODUCT_TYPE.ABUTMENT],
      nextStep: [PRODUCT_TYPE.TEMPORARY_ABUTMENT, PRODUCT_TYPE.IMPRESSION],
    },
  ],
};

const initialTabsUnlock: {
  [key: string]: string[];
} = {
  [TABGROUP_TYPE.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT],
  [TABGROUP_TYPE.ABUTMENT_GROUP]: [PRODUCT_TYPE.ABUTMENT],
};

export function useTabsStatus() {
  const { treatments } = useTeethDiagramStore();
  const { activePatientFileId } = useProductStore();
  const query = useQuery<Query>();

  const patientFile = useMemo(
    () =>
      query.PatientFile.byId(activePatientFileId)
        .project({ teeth: true })
        .exec(),
    [activePatientFileId, query.PatientFile]
  );

  const tabsStatus: { [key: string]: boolean } = {
    implant: false,
    abutment: false,
    healing: false,
    temporary: false,
    impression: false,
    tools: true,
  };

  patientFile.teeth?.forEach((tooth) => {
    const treatment = treatments[tooth.name];
    const initialTabs = initialTabsUnlock[treatment?.tabgroup];
    initialTabs?.forEach((tab) => {
      tabsStatus[tab] = true;
    });

    const products = [
      ...(tooth?.crown.treatmentDoc.selectedProducts ?? []),
      ...(tooth?.root.treatmentDoc.selectedProducts ?? []),
    ];

    const conditions = mapTabsRequirements[treatment?.tabgroup];

    conditions?.forEach(({ requiredProductTypes, nextStep }) => {
      const satisfyRequirements = requiredProductTypes.every((required) =>
        products.some((product) =>
          Object.keys(product.selectedProduct ?? {}).includes(required)
        )
      );
      satisfyRequirements &&
        nextStep.forEach((step) => {
          tabsStatus[step] = true;
        });
    });
  });

  return { tabsStatus };
}
