'use client';

import React from 'react';
import { View } from 'reshaped';
import { Tooth, ToothNumber } from '../TeethDiagram/teeth/areas/tooth';
import Root from '../TeethDiagram/teeth/areas/root';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';

const selectedTeethData = ['11', '12'];

export const CartTooth = ({ tooth }: any) => {
  return (
    <View width='4.31%' height='100%' aspectRatio={53 / 89}>
      <Tooth tooth={tooth}>
        <Root tooth={tooth} />
        <Crown tooth={tooth} />
      </Tooth>
      <ToothNumber tooth={tooth} jawType={JawType.UPPER} />
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
      {selectedTeethData.map((tooth: number | string) => (
        <CartTooth tooth={tooth} key={tooth} />
      ))}
    </View>
  );
}
