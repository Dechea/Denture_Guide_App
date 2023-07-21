'use client';

import { useEffect } from 'react';
import { Actionable, Carousel, Tabs, Tooltip, View } from 'reshaped';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { CarouselTooth } from '../CarouselTooth';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
import { useProductStore } from '../../zustand/product';
import { GROUP_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';

interface CarouselTeethProps {
  patientFileId: string;
}

export default function CarouselTeeth({ patientFileId }: CarouselTeethProps) {
  const {
    acceptedTreatmentGroups,
    activeTreatmentGroup,
    setActiveTreatmentGroup,
  } = useProductStore();
  const { groupwiseTeethWithTreatments } = useTreatmentsByGroup({
    productType: PRODUCT_TYPE.ABUTMENT,
    patientFileId: patientFileId,
  });

  useEffect(() => {
    setActiveTreatmentGroup(acceptedTreatmentGroups[0]);
  }, []);

  const handleTooltip = (
    treatmentTeethGroupData: { [key: string]: TreatmentVisualization[] },
    index: number | boolean,
    group: string
  ): string => {
    const length = Object.keys(treatmentTeethGroupData).length;
    return (length > 1 && length - 1) === index
      ? 'please select Implant first'
      : group;
  };

  return (
    <View
      width='100%'
      position='sticky'
      insetTop={11}
      zIndex={50}
      backgroundColor='page-faded'
      direction='row'
      justify='center'
      align='end'
      borderColor='neutral-faded'
      wrap={false}
      paddingBlock={4}
      height='146px'
    >
      <Carousel
        gap={2}
        className='flex justify-center items-center w-[calc(100%-20px)] h-full'
      >
        <Tabs
          value={activeTreatmentGroup}
          onChange={({ value }) => setActiveTreatmentGroup(value as GROUP_TYPE)}
        >
          <Tabs.List className={`[&_[role=tablist]]:!gap-[8px]`}>
            {acceptedTreatmentGroups.map((group, index) => {
              return (
                <Tabs.Item value={group} key={group}>
                  <Tooltip
                    position='top'
                    text={handleTooltip(
                      groupwiseTeethWithTreatments,
                      index,
                      group
                    )}
                  >
                    {(attributes) => (
                      <Actionable attributes={attributes}>
                        <CarouselTooth
                          treatmentToothData={
                            groupwiseTeethWithTreatments[group]
                          }
                          active={activeTreatmentGroup === group ? true : false}
                          patientFileId={patientFileId}
                        />
                      </Actionable>
                    )}
                  </Tooltip>
                </Tabs.Item>
              );
            })}
          </Tabs.List>
        </Tabs>
      </Carousel>
    </View>
  );
}
