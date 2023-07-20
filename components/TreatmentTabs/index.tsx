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
import { TreatmentProps } from '../../zustand/teethDiagram/interface';
import { PRODUCT_TYPE } from '../../zustand/product/interface';

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
  const [activeTabs, setActiveTabs] = useState(defaultActiveTabs);
  const [activePopupFor, setActivePopupFor] = useState<PRODUCT_TYPE | null>();

  const router = useRouter();
  const path: string = usePathname();
  const { treatments, recentAddedTreatment, setRecentAddedTreatment } =
    useTeethDiagramStore((state) => state);

  const onChangeTab = ({ value }: { value: string }) => {
    const splitedRoute = value.split('/');
    const clickedTab = splitedRoute[
      splitedRoute.length - 1
    ] as keyof typeof defaultActiveTabs;

    if (activeTabs[clickedTab] === undefined || activeTabs[clickedTab]) {
      router.push(value as __next_route_internal_types__.RouteImpl<string>);
    }
  };

  const getTabsToActivate = (treatment: TreatmentProps['visualization']) => {
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
        localActiveTabs.implant = true;
        localActiveTabs.healing = true;
        localActiveTabs.temporary = true;
        localActiveTabs.impression = true;
      }
      if (abutment) {
        localActiveTabs.abutment = true;
      }
    });

    if (recentAddedTreatment) {
      const { implant, abutment } = getTabsToActivate(recentAddedTreatment);

      if (implant && !activeTabs.implant) {
        setActivePopupFor(PRODUCT_TYPE.IMPLANT);
      }
      if (abutment && !activeTabs.abutment) {
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
                activeTab={activeTabs.implant}
                image={'/TreatmentTabsImplantsPopover.svg'}
                activePopup={activePopupFor === PRODUCT_TYPE.IMPLANT}
                onClosePopover={handleClosePopover}
                title='Implants'
                description='You can select implants for each tooth in ‘Implants’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/abutment`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.abutment}
                image={'/TreatmentTabsAbutmentsPopover.svg'}
                activePopup={activePopupFor === PRODUCT_TYPE.ABUTMENT}
                onClosePopover={handleClosePopover}
                title='Abutments'
                description='You can select abutments for each tooth in ‘Abutments’ tab'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/healing`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.healing}
                title='Healing Abutment'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/temporary`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.healing}
                title='Temporary Abutments'
              />
            </Tabs.Item>

            <Tabs.Item value={`/${patientFileId}/treatments/impression`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.impression}
                title='Impression'
              />
            </Tabs.Item>
            <Tabs.Item value={`/${patientFileId}/treatments/tools`}>
              <TreatmentTabsPopover
                activeTab={activeTabs.tools}
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
