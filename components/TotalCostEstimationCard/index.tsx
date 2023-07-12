'use client';

import { Button, Card, Text, View } from 'reshaped';
import PrintIcon from '../../components/Icons/Print';

interface TotalCostEstimationCardProps {
  totalPrice: number;
}

export default function TotalCostEstimationCard({
  totalPrice,
}: TotalCostEstimationCardProps) {
  return (
    <Card padding={0}>
      <View gap={10} padding={3} paddingTop={4}>
        <View
          direction='row'
          width='100%'
          align='center'
          className='!justify-between'
        >
          <Text variant='body-3' weight='bold'>
            Total Cost Estimation
          </Text>

          <Text variant='body-3' weight='bold'>
            {totalPrice} €
          </Text>
        </View>

        <Button
          variant='solid'
          size='large'
          icon={<PrintIcon />}
          className='!rounded-lg'
          onClick={() => window.print()}
        >
          <Text variant='body-2' weight='medium'>
            Print
          </Text>
        </Button>
      </View>
    </Card>
  );
}
