'use client';
import { View, Text, Button } from 'reshaped';
import { useRouter } from 'next/navigation';
import CheckoutForm from '../../components/Checkout';
import Header from '../../components/Header';
import BackwardIcon from '../../components/Icons/Backward';

export default function Checkout() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/cart');
  };

  return (
    <View>
      <Header />

      <View
        backgroundColor='neutral-faded'
        direction='row'
        paddingTop={11}
        paddingBottom={11}
        paddingStart={11}
        align='center'
        gap={4}
      >
        <View>
          <Button
            icon={<BackwardIcon />}
            variant='ghost'
            size='small'
            onClick={handleNavigation}
          ></Button>
        </View>
        <View direction='row' gap={3}>
          <Text variant='featured-1' weight='bold'>Cart</Text>
          <Text variant='featured-1' weight='bold' color='disabled'>
            /
          </Text>
          <Text variant='featured-1' weight='bold' color='disabled'>
            Checkout
          </Text>
        </View>
      </View>

      <CheckoutForm />
    </View>
  );
}
