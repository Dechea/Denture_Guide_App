'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Tabs, Text, View } from 'reshaped';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import TreatmentTabsPopover from '../TreatmentTabsPopover';
import { PRODUCT_TYPE } from '../../zustand/product/interface';
import { useTabsStatus } from '../../hooks/useTabsStatus';

const defaultActiveTabs = {
  implant: false,
  abutment: false,
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
  const [activePopupFor, setActivePopupFor] = useState<PRODUCT_TYPE | null>();
  const { tabsStatus } = useTabsStatus();

  const router = useRouter();
  const path: string = usePathname();
  const { setRecentAddedTreatment } = useTeethDiagramStore((state) => state);

  const onChangeTab = ({ value }: { value: string }) => {
    const splitedRoute = value.split('/');
    const clickedTab = splitedRoute[
      splitedRoute.length - 1
    ] as keyof typeof defaultActiveTabs;

    if (tabsStatus[clickedTab] === undefined || tabsStatus[clickedTab]) {
      router.push(value as __next_route_internal_types__.RouteImpl<string>);
    }
  };

  const handleClosePopover = () => {
    setActivePopupFor(null);
    setRecentAddedTreatment({});
  };

  console.log(tabsStatus);

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
                activeTab={tabsStatus.implant}
                image={'/TreatmentTabsImplantsPopover.svg'}
                activePopup={activePopupFor === PRODUCT_TYPE.IMPLANT}
                onClosePopover={handleClosePopover}
                title='Implants'
                description='You can select implants for each tooth in ‘Implants’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/abutment`}>
              <TreatmentTabsPopover
                activeTab={tabsStatus.abutment}
                image={'/TreatmentTabsAbutmentsPopover.svg'}
                activePopup={activePopupFor === PRODUCT_TYPE.ABUTMENT}
                onClosePopover={handleClosePopover}
                title='Abutments'
                description='You can select abutments for each tooth in ‘Abutments’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/healing`}>
              <TreatmentTabsPopover
                activeTab={tabsStatus.healing}
                title='Healing Abutment'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/temporary`}>
              <TreatmentTabsPopover
                activeTab={tabsStatus.temporary}
                title='Temporary Abutments'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/impression`}>
              <TreatmentTabsPopover
                activeTab={tabsStatus.impression}
                title='Impression'
              />
            </Tabs.Item>
            <Tabs.Item value={`/${patientFileId}/treatments/tools`}>
              <TreatmentTabsPopover
                activeTab={tabsStatus.tools}
                title='Tools'
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
