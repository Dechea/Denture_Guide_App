'use client';

import React from 'react';
import { View, Text, Icon } from 'reshaped';
import { Tooth, ToothNumber } from '../TeethDiagram/teeth/areas/tooth';
import Root from '../TeethDiagram/teeth/areas/root';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';
import TickIcon from '../Icons/Tick';

// const selectedTeethData = ['11', '12'];
const selectedTeethData = [
  { toothNumber: 11, isSelected: true },
  { toothNumber: 12, isSelected: false },
];

export const CartTooth = ({ tooth }: any) => {
  const selectedTooth = {
    activeTooth:
      '[&_svg>*]:!opacity-30 [&_svg>*]:stroke-[--rs-color-metallic-border] [&_svg>*]:fill-[--rs-color-metallic-background] [&_svg>*]:hover:stroke-[--rs-color-metallic-border] [&_svg>*]:hover:fill-[--rs-color-metallic-background] last-of-type:hover:!pointer-event-none',
    inactiveTooth:
      '[&_svg>*]:hover:!opacity-100 [&_svg>*]:!stroke-[--rs-color-metallic-border] [&_svg>*]:!fill-[--rs-color-metallic-background] [&_svg>*]:hover:!stroke-[--rs-color-metallic-border] [&_svg>*]:hover:!fill-[--rs-color-metallic-background]',
  };

  console.log('tooth ', tooth);
  return (
    <View width='4.31%' height='100%' aspectRatio={53 / 89}>
      <Tooth
        tooth={tooth}
        className={
          tooth.isSelected
            ? selectedTooth.activeTooth
            : selectedTooth.inactiveTooth
        }
      >
        <Root tooth={tooth.toothNumber} />
        <Crown tooth={tooth.toothNumber} />
        {/* selected teeth tick */}

        {tooth.isSelected && (
          <View
            position='absolute'
            width='100%'
            height='100%'
            direction='row'
            insetTop={3}
            align='center'
            justify='center'
            //  !pointer-events-none [&_svg>*]:!pointer-events-none
            // [&_svg>*]:hover:
            // className='[&_svg>*]:!hover:opacity-100 [&_svg>*]:!opacity-100 [&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]'
            // className='
            // [&_svg>*]:hover:!opacity-100 [&_svg>*]:!opacity-100
            // [&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]
            // [&_svg>*]:hover:!stroke-[--rs-color-background-page] [&_svg>*]:hover:!fill-[--rs-color-background-primary]'
            className='[&_svg>*]:hover:!opacity-100 [&_svg>*]:!opacity-100 
            [&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]
            [&_svg>*]:hover:!stroke-[--rs-color-background-page] [&_svg>*]:hover:!fill-[--rs-color-background-primary]
            '
          >
            <Icon svg={TickIcon} size={6} />
          </View>
        )}
      </Tooth>

      <ToothNumber tooth={tooth.toothNumber} jawType={JawType.UPPER} />
    </View>
  );
};

export default function SelectTeeth() {
  return (
    <View
      width='100%'
      position='sticky'
      insetTop={25.35}
      zIndex={50}
      backgroundColor='neutral-faded'
      direction='row'
      justify='center'
      align='end'
      // gap={5}
      wrap={false}
      padding={8}
      height='166px'
    >
      {selectedTeethData.map((tooth) => (
        <CartTooth tooth={tooth} key={tooth.toothNumber} />
      ))}
    </View>
  );
}
