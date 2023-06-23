'use client';

import { useRouter, usePathname } from 'next/navigation';
import { View, Tabs, Text, Tooltip } from 'reshaped';

const toolTipMapping: { [key: number]: string } = {
  0: 'Select Treatments First',
  1: 'Select Implant First',
  2: 'Select Abutments First',
  3: 'Select Healings First',
  4: 'Select Temporary First',
  5: 'Select Impression First',
  6: 'Select Crowns First',
};

const TabItemWithTooltip = ({
  active,
  tooltipText,
  tabText,
}: {
  active: boolean;
  tooltipText: string;
  tabText: string;
}) => {
  return (
    <Tooltip text={tooltipText}>
      {(attributes) => (
        <Text
          color={active ? 'neutral' : 'disabled'}
          attributes={!active && tabText !== 'Crowns' ? attributes : {}}
        >
          {tabText}
        </Text>
      )}
    </Tooltip>
  );
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
  const routesMapping: { [key: string]: number } = {
    [`/${patientFileId}/treatments`]: 0,
    [`/${patientFileId}/treatments/implant`]: 1,
    [`/${patientFileId}/treatments/abutment`]: 2,
    [`/${patientFileId}/treatments/healing`]: 3,
    [`/${patientFileId}/treatments/temporary`]: 4,
    [`/${patientFileId}/treatments/impression`]: 5,
    [`/${patientFileId}/treatments/crowns`]: 6,
  };
  const activeTabIndex = routesMapping[path] || 0;

  const onChangeTab = ({ value }: { value: string }) => {
    const clickedTabIndex = routesMapping[value];
    // TODO: Remove to make corwn tab functionable`
    if (clickedTabIndex === 6) return;

    if (activeTabIndex >= 2 || clickedTabIndex === 1) {
      router.push(value as __next_route_internal_types__.RouteImpl<string>);
      return;
    }
    if (activeTabIndex < 2 && activeTabIndex > clickedTabIndex) {
      router.push(value as __next_route_internal_types__.RouteImpl<string>);
    }
  };

  return (
    <View paddingBlock={0} paddingInline={2}>
      <Tabs onChange={onChangeTab} itemWidth='equal' value={path}>
        <View
          position='sticky'
          insetTop={11.25}
          backgroundColor='white'
          zIndex={50}
        >
          <Tabs.List>
            <Tabs.Item value={`/${patientFileId}/treatments`}>
              <View width={'100%'} align='start'>
                <Text>Treatments</Text>
              </View>
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/implant`}>
              <TabItemWithTooltip
                tabText='Implants'
                active
                // active={activeTabIndex >= 1}
                tooltipText={toolTipMapping[activeTabIndex]}
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/abutment`}>
              <TabItemWithTooltip
                tabText='Abutments'
                active={activeTabIndex >= 2}
                tooltipText={toolTipMapping[activeTabIndex]}
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/healing`}>
              <TabItemWithTooltip
                tabText='Healings'
                active={activeTabIndex >= 2}
                tooltipText={toolTipMapping[activeTabIndex]}
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/temporary`}>
              <TabItemWithTooltip
                tabText='Temporary'
                active={activeTabIndex >= 2}
                tooltipText={toolTipMapping[activeTabIndex]}
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/impression`}>
              <TabItemWithTooltip
                tabText='Impression'
                active={activeTabIndex >= 2}
                tooltipText={toolTipMapping[activeTabIndex]}
              />
            </Tabs.Item>
            <Tabs.Item value={`/${patientFileId}/treatments/crowns`}>
              <TabItemWithTooltip
                tabText='Crowns'
                active={false}
                tooltipText={''}
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
