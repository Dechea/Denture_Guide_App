import { Icon, Skeleton, Text, View } from 'reshaped';
import BarCodeIcon from '../Icons/Barcode';

interface ProductNotFoundProps {
  barcode: string;
}

export default function ProductNotFound({ barcode }: ProductNotFoundProps) {
  return (
    <View align='center' paddingTop={24} gap={6}>
      <View
        width={43}
        height={12}
        direction='row'
        gap={3}
        align='center'
        justify='center'
        className='!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)] !rounded-[8px]'
      >
        <Icon svg={BarCodeIcon()} color='disabled' size={8} />
        <Skeleton width={26} borderRadius='large' className='!min-h-[9px]' />
      </View>

      <View align='center' gap={2}>
        <Text variant='featured-2' weight='medium' color='neutral'>
          Nothing was found for code
        </Text>
        <Text variant='featured-2' weight='medium' color='neutral'>
          {barcode && `“${barcode}”`}
        </Text>
        <Text variant='body-2' weight='regular' color='neutral-faded'>
          Try another code
        </Text>
      </View>
    </View>
  );
}
