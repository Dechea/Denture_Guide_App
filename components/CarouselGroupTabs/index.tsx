'use client';

import cx from 'classnames';
import { View } from 'reshaped';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
import { CarouselTooth } from '../CarouselTooth';
interface CarouselGroupTabsProps {
  active: boolean;
  treatmentToothData: TreatmentVisualization[];
}

export const CarouselGroupTabs = ({
  active,
  treatmentToothData,
}: CarouselGroupTabsProps) => {
  return (
    <View
      direction='row'
      borderRadius='small'
      paddingInline={2}
      gap={1}
      className={cx(
        {
          'opacity-50': !active,
          'bg-[--rs-color-background-neutral-faded] !border-[--rs-color-border-neutral-faded]':
            active,
        },
        'hover:border-[--rs-color-border-neutral-faded] border-[1px] border-[rgba(0.0,0.0,0.0,0.0)]'
      )}
    >
      {treatmentToothData?.map((tooth) => {
        return <CarouselTooth key={tooth.toothNumber} tooth={tooth} />;
      })}
    </View>
  );
};
