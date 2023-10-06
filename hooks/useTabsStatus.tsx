import { useLocalStorage, useQuery } from 'fauna-typed';
import { useProductStore } from '../zustand/product';
import { PRODUCT_TYPE, TREATMENT_GROUP } from '../zustand/product/interface';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { PatientFile, Query } from '../fqlx-generated/typedefs';
import { useMemo, useState } from 'react';
import { DISCOVERYMODE } from '../__mocks__/flow';

interface TabRequirementsProps {
  [key: string]: {
    requiredProductTypes: string[];
    nextStep: string[];
  }[];
}

interface InitialTabsUnlockProps {
  [key: string]: string[];
}

interface TabsStatusProps {
  [key: string]: boolean;
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

const defaultActiveTabs: TabsStatusProps = {
  implant: false,
  abutment: false,
  healingAbutment: false,
  temporaryAbutment: false,
  impression: false,
  tools: true,
};

export function useTabsStatus() {
  const { treatments } = useTeethDiagramStore();
  const { activePatientFileId } = useProductStore();
  const [tabsStatus, setTabsStatus] = useState(defaultActiveTabs);
  const query = useQuery<Query>();
  const { value: discoveryModePatientFile } = useLocalStorage(
    `${DISCOVERYMODE}`,
    'PatientFile'
  );

  const patientFile = useMemo(() => {
    if (activePatientFileId === `${DISCOVERYMODE}`) {
      const patientFileString = discoveryModePatientFile;

      if (patientFileString) {
        return patientFileString as PatientFile;
      } else {
        return { teeth: [] };
      }
    } else {
      return activePatientFileId
        ? query.PatientFile.byId(activePatientFileId)
            .project({ teeth: true })
            .exec()
        : { teeth: [] };
    }
  }, [activePatientFileId, query, discoveryModePatientFile]);

  const getTabsStatus = () => {
    const localTabsStatus: TabsStatusProps = { ...defaultActiveTabs };

    patientFile.teeth?.forEach((tooth) => {
      const treatment = treatments[tooth.name];
      const initialTabs = initialTabsUnlock[treatment?.treatmentgroup];
      initialTabs?.forEach((tab) => {
        localTabsStatus[tab] = true;
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
            localTabsStatus[step] = true;
          });
      });
    });

    setTabsStatus(localTabsStatus);
  };

  return { tabsStatus, getTabsStatus, patientFile };
}
