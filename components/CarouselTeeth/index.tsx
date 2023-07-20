'use client';

import { useState } from 'react';
import { Actionable, Carousel, Tabs, Tooltip, View } from 'reshaped';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { CarouselTooth } from '../CarouselTooth';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';

interface CarouselTeethProps {
  patientFileId: string;
}

export default function CarouselTeeth({ patientFileId }: CarouselTeethProps) {
  const [activeGroup, setActiveGroup] = useState('0');
  const { groupwiseTeethWithTreatments } = useTreatmentsByGroup();

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
          value={activeGroup}
          onChange={({ value }) =>
            Object.keys(groupwiseTeethWithTreatments).length - 1 ===
            Number(value)
              ? ''
              : setActiveGroup(value)
          }
        >
          <Tabs.List className={`[&_[role=tablist]]:!gap-[8px]`}>
            {Object.entries(groupwiseTeethWithTreatments).map(
              ([group, treatmentToothData], index) => {
                return (
                  <Tabs.Item value={`${index}`} key={group}>
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
                            treatmentToothData={treatmentToothData}
                            active={
                              activeGroup === index.toString() ? true : false
                            }
                            patientFileId={patientFileId}
                          />
                        </Actionable>
                      )}
                    </Tooltip>
                  </Tabs.Item>
                );
              }
            )}
          </Tabs.List>
        </Tabs>
      </Carousel>
    </View>
  );
}
