import { useQuery } from 'fqlx-client';
import { useProductStore } from '../zustand/product';
import { PRODUCT_TYPE, TREATMENT_GROUP } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { Query } from '../fqlx-generated/typedefs';
import { useMemo } from 'react';

interface TabRequirementsProps {
  [key: string]: {
    requiredProductTypes: string[];
    nextStep: string[];
  }[];
}

interface InitialTabsUnlockProps {
  [key: string]: string[];
}

const tabRequirements: TabRequirementsProps = {
  [TREATMENT_GROUP.IMPLANT_GROUP]: [
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

const initialTabsUnlock: InitialTabsUnlockProps = {
  [TREATMENT_GROUP.IMPLANT_GROUP]: [PRODUCT_TYPE.IMPLANT],
  [TREATMENT_GROUP.ABUTMENT_GROUP]: [PRODUCT_TYPE.ABUTMENT],
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

  const getTabsStatus = () => {
    const tabsStatus: { [key: string]: boolean } = {
      implant: false,
      abutment: false,
      healingAbutment: false,
      temporaryAbutment: false,
      impression: false,
      tools: true,
    };

    patientFile.teeth?.forEach((tooth) => {
      const treatment = treatments[tooth.name];
      const initialTabs = initialTabsUnlock[treatment?.treatmentgroup];
      initialTabs?.forEach((tab) => {
        tabsStatus[tab] = true;
      });

      const products = [
        ...(tooth?.crown.treatmentDoc.selectedProducts ?? []),
        ...(tooth?.root.treatmentDoc.selectedProducts ?? []),
      ];

      const conditionsToUnlockTabs = tabRequirements[treatment?.treatmentgroup];

      conditionsToUnlockTabs?.forEach(({ requiredProductTypes, nextStep }) => {
        const areRequirementsSatisfied = requiredProductTypes.every(
          (requiredProductType) =>
            products.some(
              (product) =>
                product.selectedProduct?.[
                  requiredProductType as keyof typeof product.selectedProduct
                ]
            )
        );
        areRequirementsSatisfied &&
          nextStep.forEach((step) => {
            tabsStatus[step] = true;
          });
      });
    });
    return tabsStatus;
  };

  return { getTabsStatus, patientFile };
}
