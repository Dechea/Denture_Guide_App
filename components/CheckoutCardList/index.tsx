'use client';

import { useState } from 'react';
import { View, Image, Text, Badge, Icon, Button } from 'reshaped';
import { abutmentProductList } from '../../__mocks__/abutment';
import BinIcon from '../Icons/Bin';

const CheckoutRightSide = () => {
  const [counter, setCounter] = useState(1);
  return (
    <View
      paddingTop={6}
      paddingEnd={4}
      paddingBottom={4}
      paddingStart={8}
      height='100%'
      direction='column'
    >
      <View.Item grow>
        <View direction='row' justify='end'>
          <Badge color='positive' variant='faded'>
            Order
          </Badge>
        </View>
      </View.Item>
      <View direction='row' justify='end' gap={4}>
        <View direction='row' align='center'>
          <Button
            size='small'
            color='white'
            onClick={() => {
              counter > 0 && setCounter(counter - 1);
            }}
          >
            -
          </Button>
          <Text>{counter}</Text>
          <Button
            size='small'
            color='white'
            onClick={() => setCounter(counter + 1)}
          >
            +
          </Button>
          {/* onClick={setCounter(counter + 1)} */}
        </View>

        <Button
          size='small'
          color='white'
          variant='outline'
          icon={<Icon svg={<BinIcon />} size={4} />}
        />
      </View>
    </View>
  );
};

const CheckoutCard = ({ item }: any) => {
  return (
    <View direction={'row'} width='100%' height={'100%'} align={'stretch'}>
      <View.Item>
        <View padding={7}>
          <Image
            src={item.image}
            alt={item.image}
            height='122px'
            width='142px'
          />
        </View>
      </View.Item>
      <View.Item grow>
        <View
          direction={'column'}
          width={'100%'}
          height={'100%'}
          padding={6}
          gap={4}
        >
          <View gap={1}>
            <Text variant='title-3'>{item.heading}</Text>
            <View paddingStart={6}>
              <ul>
                {item.description.map((listData: string, index: number) => (
                  <li key={index}>
                    <Text color='neutral-faded' variant='body-1'>
                      {listData}
                    </Text>
                  </li>
                ))}
              </ul>
            </View>
          </View>
          <View direction={'column'} justify={'end'} height={'100%'}>
            <Text color='neutral-faded' variant='body-2'>
              {item.price} €
            </Text>
          </View>
        </View>
      </View.Item>

      <View.Item columns={4}>
        <CheckoutRightSide />
      </View.Item>
    </View>
  );
};

export const CheckoutCardList = () => {
  return (
    <View borderColor='neutral-faded' borderRadius='medium' divided>
      {abutmentProductList.map((item) => (
        <CheckoutCard key={item.id} item={item} />
      ))}
    </View>
  );
};
