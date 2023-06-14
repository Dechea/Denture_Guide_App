'use client';

import { useRouter } from 'next/navigation';
import { Button, Card, Divider, Text, View } from 'reshaped';
import CheckoutOrder from '../CheckoutOrderSummary';
import CheckoutPayment from '../CheckoutPayment';
import CheckoutShippingDetails from '../CheckoutShippingDetails';
import InvoiceIcon from '../Icons/Invoice';

const CheckoutForm = () => {
  const router = useRouter();

  const handleNavigation = (path: __next_route_internal_types__.RouteImpl<string> ) => {
    router.push(path);
  };

  return (
    <View
      paddingTop={12}
      direction='row'
      paddingStart={21}
      paddingEnd={15}
      gap={45}
    >
      <View.Item columns={8}>
        <View gap={10} paddingBottom={10}>
          <CheckoutShippingDetails />
          <Divider />
          <CheckoutPayment />
          <Divider />
          <CheckoutOrder />
        </View>
      </View.Item>

      <View.Item columns={4}>
        <View gap={6}>
          <Card padding={0}>
            <View padding={6} gap={9}>
              <View direction={'row'} width={'100%'}>
                <View.Item grow>
                  <Text color={'neutral-faded'} variant='body-2' weight='medium'>
                    Doctor pays
                  </Text>
                </View.Item>

                <Text color={'primary'} variant='body-2' weight='medium'>
                  220.00 €
                </Text>
              </View>
              <View width={'100%'} align={'stretch'}>
                <Button color={'primary'} onClick={() => handleNavigation('/')}>
                  Almost Done
                </Button>
              </View>
            </View>
          </Card>
          <View direction={'row'} justify={'center'} align={'center'} gap={2}>
            <Button
              icon={<InvoiceIcon />}
              variant='ghost'
              onClick={() => handleNavigation('/costestimation')}
            >
              <Text variant='body-3' weight="medium">Cost Estimation</Text>
            </Button>
          </View>
        </View>
      </View.Item>
      {/* <CheckoutEditCard /> */}
    </View>
  );
};

export default CheckoutForm;
