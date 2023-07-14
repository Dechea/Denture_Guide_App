'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Tabs, Text, View } from 'reshaped';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import {
  ADULT,
  IMPLANT,
  PROSTHESIS_ANCHOR,
} from '../TeethDiagram/teeth/constants/treatmentVariants';
import TreatmentTabsPopover from '../TreatmentTabsPopover';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
import { PRODUCT_TYPE } from '../../zustand/product/interface';

const defaultActiveTabs = {
  implants: false,
  abutments: false,
  healing: false,
  temporary: false,
  impression: false,
  tools: true,
};

const TreatmentTabs = ({
  children,
  patientFileId,
}: {
  children: React.ReactNode;
  patientFileId: string;
}) => {
  const [activeTabs, setActiveTabs] = useState(defaultActiveTabs);
  const [activePopupFor, setActivePopupFor] = useState<PRODUCT_TYPE | null>();

  const router = useRouter();
  const path: string = usePathname();
  const { treatments, recentAddedTreatment, setRecentAddedTreatment } =
    useTeethDiagramStore((state) => state);

  const onChangeTab = ({ value }: { value: string }) => {
    router.push(value as __next_route_internal_types__.RouteImpl<string>);
  };

  const getTabsToActivate = (treatment: TreatmentVisualization) => {
    const implant = treatment.rootVariant === IMPLANT;
    const abutment =
      treatment.crownVariant === PROSTHESIS_ANCHOR &&
      treatment.rootVariant === ADULT;
    return { implant, abutment };
  };

  const handleClosePopover = () => {
    setActivePopupFor(null);
    setRecentAddedTreatment({});
  };

  useEffect(() => {
    const localActiveTabs = { ...defaultActiveTabs };

    Object.values(treatments).forEach((treatment) => {
      const { implant, abutment } = getTabsToActivate(treatment);

      if (implant) {
        localActiveTabs.implants = true;
      }
      if (abutment) {
        localActiveTabs.abutments = true;
        localActiveTabs.healing = true;
        localActiveTabs.temporary = true;
        localActiveTabs.impression = true;
      }
    });

    if (recentAddedTreatment) {
      const { implant, abutment } = getTabsToActivate(recentAddedTreatment);

      if (implant && !activeTabs.implants) {
        setActivePopupFor(PRODUCT_TYPE.IMPLANT);
      }
      if (abutment && !activeTabs.abutments) {
        setActivePopupFor(PRODUCT_TYPE.ABUTMENT);
      }
    }

    setActiveTabs(localActiveTabs);
  }, [treatments]);

  return (
    <View
      paddingBlock={0}
      paddingInline={2}
      className='overflow-y-scroll max-h-[calc(100vh-60px)]'
      attributes={{ id: 'scrollableProductList' }}
    >
      <Tabs onChange={onChangeTab} itemWidth='equal' value={path}>
        <View
          position='sticky'
          insetTop={0}
          backgroundColor='white'
          zIndex={50}
          height={11}
        >
          <Tabs.List>
            <Tabs.Item value={`/${patientFileId}/treatments`}>
              <View width={'100%'} align='start'>
                <Text>Treatments</Text>
              </View>
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/implant`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.implants}
                image={'/TreatmentTabsImplantsPopover.svg'}
                activePopup={activePopupFor === PRODUCT_TYPE.IMPLANT}
                onClosePopover={handleClosePopover}
                tabText='Implants'
                description='You can select implants for each tooth in ‘Implants’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/abutment`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.abutments}
                image={'/TreatmentTabsAbutmentsPopover.svg'}
                activePopup={activePopupFor === PRODUCT_TYPE.ABUTMENT}
                onClosePopover={handleClosePopover}
                tabText='Abutments'
                description='You can select abutments for each tooth in ‘Abutments’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/healing`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.healing}
                tabText='Healing Abutment'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/temporary`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.healing}
                tabText='Temporary Abutments'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/impression`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.impression}
                tabText='Impression'
              />
            </Tabs.Item>
            <Tabs.Item value={`/${patientFileId}/treatments/tools`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.tools}
                tabText='Tools'
              />
            </Tabs.Item>
          </Tabs.List>
        </View>
        <View.Item>{children}</View.Item>
      </Tabs>
    </View>
  );
};

export default TreatmentTabs;
