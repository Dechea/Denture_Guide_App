'use client';

import { Button, Text, View, Card } from 'reshaped';
import Header from '../../components/Header';
import BackwardIcon from '../../components/Icons/Backward';
import CartItemsList from '../../components/CartList';
import { useRouter } from 'next/navigation';
import ArrowRightIcon from '../../components/Icons/ArrowRight';
import InvoiceIcon from '../../components/Icons/Invoice';

const Cart = () => {
  const router = useRouter();

  return (
    <View>
      {/* TODO: Use PatientFileId from params */}
      <Header patientFileId='367517616975118544' />

      <View
        backgroundColor='neutral-faded'
        direction='row'
        padding={11}
        align='center'
        gap={4}
      >
        <Button
          icon={<BackwardIcon />}
          variant='ghost'
          size='small'
          onClick={() => router.back()}
        />

        <Text variant='featured-1' weight='bold'> Cart</Text>
      </View>

      <View
        direction='row'
        width='100%'
        paddingTop={12}
        paddingBottom={12}
        paddingStart={8}
        paddingEnd={15}
        gap={16}
      >
        <View.Item columns={8}>
          <CartItemsList />
        </View.Item>

        <View.Item columns={4}>
          <View gap={6}>
            <Card padding={6}>
              <View gap={3}>
                <View direction='row' width='100%' paddingBottom={10}>
                  <View.Item grow>
                    <Text color='neutral-faded' variant='body-2' weight='medium'>
                      Doctor pays
                    </Text>
                  </View.Item>

                  <Text color='primary' variant='body-2' weight='medium'>
                    220.00 €
                  </Text>
                </View>

                <Button
                  onClick={() => router.push('/checkout')}
                  color='primary'
                  endIcon={<ArrowRightIcon />}
                >
                  Proceed to Checkout
                </Button>
              </View>
            </Card>

            <View align='center'>
              <Button
                icon={<InvoiceIcon />}
                variant='ghost'
                onClick={() => router.push('/costestimation')}
              >
                <Text variant='body-3' weight='medium'>Cost Estimation</Text>
              </Button>
            </View>
          </View>
        </View.Item>
      </View>
    </View>
  );
};

export default Cart;
