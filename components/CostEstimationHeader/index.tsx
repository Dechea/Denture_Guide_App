'use client';

import { useRouter } from 'next/navigation';
import { Button, Icon, Text, View } from 'reshaped';
import BackwardIcon from '../Icons/Backward';
import CostEst from '../Icons/CostEst';

export default function CostEstimationHeader() {
  const router = useRouter();

  return (
    <View
      width='100%'
      position='sticky'
      insetTop={0}
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
        <Icon svg={CostEst} size={6} />

        <Text variant='featured-2' weight='medium'>
          Cost Estimation
        </Text>
      </View>
    </View>
  );
}
