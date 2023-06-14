'use client';

import { useState } from 'react';
import { Accordion, Icon, Text, View } from 'reshaped';
import { CheckoutCardList } from '../CheckoutCardList';
import ListIcon from '../Icons/List';
import { Tooth11Composed } from '../TeethDiagram/teeth/composed-tooth';

const CheckoutOrderSummary = () => {
  const [active, setActive] = useState(false);

  return (
    <Accordion
      active={active}
      onToggle={() => {
        setActive(!active);
      }}
    >
      <View gap={10}>
        <Accordion.Trigger>
          {(attributes) => (
            <View
              direction={'row'}
              align={'center'}
              gap={4}
              attributes={attributes}
            >
              <Icon
                svg={<ListIcon />}
                size={6}
                color={active ? 'primary' : 'neutral-faded'}
              />
              <Text
                variant='featured-2'
                weight='medium'
                color={active ? 'primary' : 'neutral'}
              >
                Order Summary
              </Text>
            </View>
          )}
        </Accordion.Trigger>
        <Accordion.Content>
          <View gap={6}>
            <View direction='row' gap={6} align='center' height='89px'>
              <Tooth11Composed customStyles='!w-[4.29%] !aspect-[53/89]' />
              <View>
                <Text variant='body-2' weight='bold'>
                  Implant Crown
                </Text>
                <Text variant='body-1' color='neutral-faded'>
                  Camlog, 0.4mm, 3.8mm, Cemented, Platform switching
                </Text>
              </View>
            </View>
            <View>
              <CheckoutCardList />
            </View>
          </View>
        </Accordion.Content>
      </View>
    </Accordion>
  );
};

export default CheckoutOrderSummary;
