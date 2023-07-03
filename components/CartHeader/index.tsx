'use client';

import { useRouter } from 'next/navigation';
import { Badge, Button, Icon, Text, View } from 'reshaped';
import BackwardIcon from '../Icons/Backward';
import CartIcon from '../Icons/Cart';

export default function CartHeader() {
  const router = useRouter();

  return (
    <View
      width='100%'
      position='sticky'
      insetTop={13.3}
      zIndex={55}
      backgroundColor='page-faded'
      direction='row'
      paddingBlock={8}
      paddingInline={6}
      align='center'
      gap={4}
      className='border-b border-[--rs-color-border-neutral-faded]'
    >
      <Button
        icon={<Icon svg={BackwardIcon} size={4} />}
        onClick={() => router.back()}
      />

      <View direction='row' align='center' gap={4}>
        <Icon svg={CartIcon} size={6} />
        <View direction='row' align='center' gap={3}>
          <Text variant='featured-2' weight='medium'>
            {' '}
            Cart
          </Text>
          <Badge color='critical'>8</Badge>
        </View>
      </View>
    </View>
  );
}
