'use client';

import { Button, Icon, Text, View } from 'reshaped';
import MinusIcon from '../Icons/Minus';
import PlusIcon from '../Icons/Plus';
import { useState } from 'react';

interface CounterProps {
  initialCount: number;
  onCountChange(count: number): void;
}

export default function Counter({ initialCount, onCountChange }: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  const handleCountChange = (incrementOrDecrementCount: number) => {
    const localCount =
      count + incrementOrDecrementCount > 1
        ? count + incrementOrDecrementCount
        : 1;

    if (count || localCount) {
      onCountChange(localCount);
      setCount(localCount);
    }
  };

  return (
    <View direction='row' paddingInline={3} gap={3} align='center'>
      <Button
        icon={<Icon svg={MinusIcon} size={3} className='self-center' />}
        variant='outline'
        size='small'
        onClick={() => handleCountChange(-1)}
        disabled={count === 1}
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
        onClick={() => handleCountChange(+1)}
      />
    </View>
  );
}
