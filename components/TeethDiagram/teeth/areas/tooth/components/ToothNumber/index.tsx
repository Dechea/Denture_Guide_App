import { View, Text } from 'reshaped';
import { JawType, ToothNumberProps } from '../../interfaces/props';

export default function ToothNumber({
  customStyles,
  tooth,
  jawType,
}: ToothNumberProps) {
  const isUpperJaw = jawType === JawType.UPPER;
  return (
    <View
      className={`number ${customStyles} ${
        isUpperJaw ? 'pt-[17.65%]' : 'pb-[17.65%]'
      }`}
      width='100%'
      height='23.364485981%'
      align='center'
    >
      <Text variant='caption-1' weight='medium' align='center' color='neutral-faded'>
        {tooth}
      </Text>
    </View>
  );
}
