import React from 'react';
import { Anchor } from '../Anchor';
import { View } from 'reshaped';
import { AnchorProps } from '../../interfaces/props';

const AnchorLeftUpper = ({ customStyles, tooth }: AnchorProps) => {
  return (
    <View
      position='absolute'
      className='top-[18.75%]'
      insetStart={0}
      width='38.352941%'
    >
      <Anchor customStyles={customStyles} tooth={tooth} />
    </View>
  );
};

export default AnchorLeftUpper;
