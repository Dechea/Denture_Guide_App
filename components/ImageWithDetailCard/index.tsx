'use client';

import { Text, View } from 'reshaped';
import { cartListData } from '../../__mocks__/cart';
import CartListItem from '../CartListItem';
import Counter from '../Counter';
import Delete from '../DeleteButton';

export default function ImageWithDetailCard() {
  return (
    <View gap={18}>
      {cartListData.map((cart) => (
        <View key={cart.id} gap={8}>
          <View direction='row' gap={2} align='center'>
            <Text variant='featured-3' weight='medium'>
              {cart.toothNumber}
            </Text>
            <Text variant='featured-3' weight='medium'>
              {cart.title}
            </Text>
          </View>

          <View align='center' width='100%' divided gap={6}>
            {cart.options.map((cartOption) => (
              <View
                key={cartOption.id}
                width={'100%'}
                direction='row'
                align='center'
                className='justify-between'
                gap={4}
              >
                <View.Item grow>
                  <CartListItem cartList={cartOption} />
                </View.Item>

                <View direction='row' align='center' gap={4}>
                  {cartOption.showButton && <Counter />}
                  {cartOption.showDelete && (
                    <Delete onClick={() => console.log('click')} />
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
