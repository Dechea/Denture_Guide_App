import { Divider, View } from 'reshaped';
import { ContainerProps } from './interfaces/props';

export default function TeethDiagramContainer({
  children,
  customStyles,
}: ContainerProps) {
  return (
    <View
      width='100%'
      maxWidth='1632px'
      aspectRatio={1088 / 262}
      className={`teeth-diagram ${customStyles}`}
    >
      <View height='100%' position='absolute' align='center'>
        <Divider vertical />
      </View>
      <View width='100%' position='absolute' justify='center'>
        <Divider />
      </View>
      {children}
    </View>
  );
}
