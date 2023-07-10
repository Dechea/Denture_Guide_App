'use client';

import { Button, Text, View, Card, Icon, Divider } from 'reshaped';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CostEstimationIcon from '../Icons/CostEstimation';

interface CartCostEstimationProps {
  patientFileId: string;
  totalCostOfProducts: number;
}

export const CartCostEstimation = ({
  patientFileId,
  totalCostOfProducts,
}: CartCostEstimationProps) => {
  const router = useRouter();

  return (
    <Card padding={0}>
      <View gap={10} padding={3} paddingTop={4}>
        <View gap={4}>
          <View
            direction='row'
            width='100%'
            align='center'
            className='!justify-between'
          >
            <Link href={`/costestimation`} className='no-underline'>
              <View direction='row' align='center' gap={1}>
                <Icon svg={CostEstimationIcon} size={4} color='neutral' />

                <View className='!border-b border-[--rs-color-on-background-neutral]'>
                  <Text variant='body-3' weight='medium' color='neutral'>
                    Cost Estimation
                  </Text>
                </View>
              </View>
            </Link>
            <Text variant='body-3' weight='medium'>
              {totalCostOfProducts} €
            </Text>
          </View>
          <Divider />
          <View
            direction='row'
            width='100%'
            align='center'
            className='!justify-between'
          >
            <View direction='row' align='center' gap={1}>
              <Text variant='body-3' weight='bold'>
                Total
              </Text>
            </View>
            <Text variant='body-3' weight='bold'>
              {totalCostOfProducts} €
            </Text>
          </View>
        </View>
        <Button
          onClick={() => router.push('/checkout')}
          color='primary'
          className='!rounded-lg'
        >
          <View paddingBlock={1}>
            <Text variant='body-2' weight='medium'>
              Place Order
            </Text>
          </View>
        </Button>
      </View>
    </Card>
  );
};
