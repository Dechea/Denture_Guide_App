'use client';

import { useState } from 'react';
import { Accordion, Button, Icon, Text, View } from 'reshaped';
import ShippingIcon from '../Icons/Shipping';
import TextFieldComponent from '../TextField';

const CheckoutShippingDetails = ({ onClick }: any) => {
  const [active, setActive] = useState(false);
  const [shippingData, setshippingData] = useState({});

  const clickHandler = (e: any) => {
    setshippingData({
      ...shippingData,
      [e.name]: e.value,
    });
  };

  const buttonClickHandler = () => {
    setActive(!active);
  };
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
                svg={<ShippingIcon />}
                size={6}
                color={active ? 'primary' : 'neutral-faded'}
              />
              <Text variant='featured-2' weight='medium' color={active ? 'primary' : 'neutral'}>
                Shipping Details
              </Text>
            </View>
          )}
        </Accordion.Trigger>
        <Accordion.Content>
          <View gap={10}>
            <View gap={6}>
              <View gap={1}>
                <Text variant='body-3' weight="medium">Address</Text>
                <TextFieldComponent
                  name='address'
                  placeholder='Placeholder'
                  maxWidth={110}
                  onClick={clickHandler}
                />
              </View>
              <View gap={1}>
                <Text variant='body-3' weight="medium">Building number</Text>
                <TextFieldComponent
                  name='buildingNumber'
                  placeholder='XX'
                  maxWidth={50}
                  onClick={clickHandler}
                />
              </View>
              <View gap={1}>
                <Text variant='body-3' weight="medium">City</Text>
                <TextFieldComponent
                  name='city'
                  placeholder='Placeholder'
                  maxWidth={110}
                  onClick={clickHandler}
                />
              </View>
              <View gap={1}>
                <Text variant='body-3' weight="medium">ZIP Code</Text>
                <TextFieldComponent
                  name='zipCode'
                  placeholder='XXX-XX'
                  inputAttributes='password'
                  maxWidth={50}
                  onClick={clickHandler}
                />
              </View>
            </View>
            <View maxWidth={110}>
              <Button color='primary' fullWidth onClick={buttonClickHandler}>
                Save
              </Button>
            </View>
          </View>
        </Accordion.Content>
      </View>
    </Accordion>
  );
};

export default CheckoutShippingDetails;
