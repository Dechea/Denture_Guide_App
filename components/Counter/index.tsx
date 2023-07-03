'use client';

import { Button, Icon, Text, View } from 'reshaped';
import MinusIcon from '../Icons/Minus';
import PlusIcon from '../Icons/Plus';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View direction='row' paddingInline={3} gap={3} align='center'>
      <Button
        icon={<Icon svg={MinusIcon} size={3} className='self-center' />}
        variant='outline'
        size='small'
        onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
      />

      <Text
        variant='body-3'
        weight='regular'
        color='neutral-faded'
        className='min-w-[20px]'
        align='center'
      >
        {count}
      </Text>

      <Button
        size='small'
        icon={<Icon svg={PlusIcon} size={3} className='self-center' />}
        variant='outline'
        onClick={() => setCount(count + 1)}
      />
    </View>
  );
}
