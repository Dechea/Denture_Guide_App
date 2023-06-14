import React from 'react';
import { View } from 'reshaped';
import { ToothContainerProps } from '../../interfaces/props';

export default function ToothContainer({
  children,
  customStyles,
}: ToothContainerProps) {
  return (
    <View
      height='100%'
      width='6.25%'
      direction='column'
      aspectRatio={68 / 82}
      className={customStyles}
    >
      {children}
    </View>
  );
}
