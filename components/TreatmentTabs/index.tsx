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
  const router = useRouter();
  const path: string = usePathname();
  const { treatments, lastTreatment, setLastTreatment } = useTeethDiagramStore(
    (state) => state
  );

  const onChangeTab = ({ value }: { value: string }) => {
    router.push(value as __next_route_internal_types__.RouteImpl<string>);
  };

  const [activeTabs, setActiveTabs] = useState(defaultActiveTabs);
  const [activePopup, setActivePopup] = useState('');

  const getTabsToActivate = (treatment: TreatmentVisualization) => {
    const implant = treatment.rootVariant === IMPLANT;
    const abutment =
      treatment.crownVariant === PROSTHESIS_ANCHOR &&
      treatment.rootVariant === ADULT;
    return { implant, abutment };
  };

  const resetPopoverAndTreatment = () => {
    setActivePopup('');
    setLastTreatment({});
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

    if (lastTreatment) {
      const { implant, abutment } = getTabsToActivate(lastTreatment);

      if (implant && !activeTabs.implants) {
        setActivePopup(PRODUCT_TYPE.IMPLANT);
      }
      if (abutment && !activeTabs.abutments) {
        setActivePopup(PRODUCT_TYPE.ABUTMENT);
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
                activePopup={activePopup === PRODUCT_TYPE.IMPLANT}
                resetPopup={resetPopoverAndTreatment}
                tabText='Implants'
                description='You can select implants for each tooth in ‘Implants’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/abutment`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.abutments}
                activePopup={activePopup === PRODUCT_TYPE.ABUTMENT}
                resetPopup={resetPopoverAndTreatment}
                tabText='Abutments'
                description='You can select abutments for each tooth in ‘Abutments’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/healing`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.healing}
                activePopup={false}
                resetPopup={resetPopoverAndTreatment}
                tabText='Healing Abutment'
                description='You can select healing abutments for each tooth in ‘Healing Abutments’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/temporary`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.healing}
                activePopup={false}
                resetPopup={resetPopoverAndTreatment}
                tabText='Temporary Abutments'
                description='You can select temporary abutments for each tooth in ‘Temporary Abutments’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/impression`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.impression}
                activePopup={false}
                resetPopup={resetPopoverAndTreatment}
                tabText='Impression'
                description='You can select impression for each tooth in ‘Impression’ tab'
              />
            </Tabs.Item>
            <Tabs.Item value={`/${patientFileId}/treatments/tools`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.tools}
                activePopup={false}
                resetPopup={resetPopoverAndTreatment}
                tabText='Tools'
                description='You can select tools in ‘Tools’ tab'
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
