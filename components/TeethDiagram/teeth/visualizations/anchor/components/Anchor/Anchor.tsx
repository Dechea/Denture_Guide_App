import React from 'react';
import { View } from 'reshaped';
import { toothId } from '../../../../constants/toothArea';
import { AnchorProps } from '../../interfaces/props';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

const Anchor = ({ customStyles, tooth }: AnchorProps) => {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='100%' className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 26 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[tooth as keyof typeof toothId]}
      >
        <path d='M0 0H26V10H0V0Z' onClick={onClick} />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M26 1H0V0H26V1ZM26 9H0V10H26V9Z'
          onClick={onClick}
        />
      </svg>
    </View>
  );
};

export default Anchor;
