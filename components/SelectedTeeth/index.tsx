'use client';

import React from 'react';
import { View, Text, Icon } from 'reshaped';
import { Tooth, ToothNumber } from '../TeethDiagram/teeth/areas/tooth';
import Root from '../TeethDiagram/teeth/areas/root';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';
import TickIcon from '../Icons/Tick';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';

const selectedTeethData = [
  { toothNumber: 11, isSelected: true },
  { toothNumber: 12, isSelected: false },
];

interface CartToothProps {
  toothNumber: number;
  isSelected: boolean;
}

export const CartTooth = ({ tooth }: { tooth: CartToothProps }) => {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData =
    treatments[tooth.toothNumber as keyof typeof treatments] || {};

  const selectedTooth = {
    activeTooth: '[&_svg>*]:!pointer-events-none [&_svg]:opacity-30 ',
    inactiveTooth: '[&_svg>*]:!pointer-events-none ',
  };

  return (
    <View width='4.31%' height='100%' aspectRatio={53 / 89}>
      <Tooth
        variant={toothData?.toothVariant}
        tooth={tooth.toothNumber}
        className={
          tooth.isSelected
            ? selectedTooth.activeTooth
            : selectedTooth.inactiveTooth
        }
      >
        <Root tooth={tooth.toothNumber} variant={toothData.rootVariant} />
        <Crown
          tooth={tooth.toothNumber}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
        {tooth.isSelected && (
          <View
            position='absolute'
            width='100%'
            height='100%'
            direction='row'
            insetTop={3}
            align='center'
            justify='center'
            className='
            [&_svg]:!opacity-100
            [&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]
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
      insetTop={25.3}
      zIndex={50}
      backgroundColor='neutral-faded'
      direction='row'
      justify='center'
      align='end'
      borderColor='neutral-faded'
      wrap={false}
      padding={3}
      height='136px'
    >
      {selectedTeethData.map((tooth) => (
        <CartTooth tooth={tooth} key={tooth.toothNumber} />
      ))}
    </View>
  );
}
