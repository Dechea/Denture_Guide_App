'use client';

import { View } from 'reshaped';
import cx from 'classnames';
import { ToothContainerProps } from '../../interfaces/props';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';
import { toothStyles } from '../../styles';

export default function ToothContainer({
  children,
  customStyles,
  tooth,
}: ToothContainerProps) {
  const { activeToothParts, onClick } = useTeethDiagramStore((state) => state);
  const currentToothId = toothId[tooth as keyof typeof toothId];
  const active = activeToothParts.includes(currentToothId);

  return (
    <View
      height='100%'
      width='6.25%'
      direction='column'
      aspectRatio={68 / 82}
      attributes={{
        onClick: (event) => onClick(event, currentToothId),
      }}
      className={cx(
        'tooth-container cursor-pointer',
        {
          [toothStyles.hover]: !active,
          [toothStyles.active]: active,
        },
        customStyles
      )}
    >
      {children}
    </View>
  );
}
