import { View } from 'reshaped';
import { ContainerProps } from '../interfaces/props';

export default function Jaw({ children, customStyles }: ContainerProps) {
  return (
    <View
      height='50%'
      width='100%'
      aspectRatio={1088 / 131}
      direction='row'
      className={customStyles}
    >
      {children}
    </View>
  );
}
