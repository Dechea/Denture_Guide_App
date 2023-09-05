'use client';

import Link from 'next/link';
import { Button, Card, Divider, Icon, Text, View } from 'reshaped';
import CostEstimationIcon from '../Icons/CostEstimation';

interface CartCostEstimationProps {
  patientFileId: string;
  totalCostOfProducts: number;
}

export const CartCostEstimation = ({
  patientFileId,
  totalCostOfProducts,
}: CartCostEstimationProps) => {
  return (
    <Card padding={0} className='!rounded-none'>
      <View gap={10} padding={4} paddingBottom={{ s: 8, l: 4 }}>
        <View gap={4}>
          <View
            direction='row'
            width='100%'
            align='center'
            className='!justify-between'
          >
            <Link
              href={`/${patientFileId}/cost-estimation`}
              className='no-underline'
            >
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
        <Button color='primary' className='!rounded-medium'>
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
