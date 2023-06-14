'use client';

import { useState } from 'react';
import { Accordion, Button, Icon, Text, View } from 'reshaped';
import CreditCardIcon from '../Icons/CreditCard';
import TextFieldComponent from '../TextField';

const CheckoutPayment = () => {
  const [active, setActive] = useState(false);
  const [paymentDetails, setpaymentDetails] = useState({});

  const clickHandler = (e: any) => {
    setpaymentDetails({
      ...paymentDetails,
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
          {(attributes, { active }) => (
            <View
              direction={'row'}
              align={'center'}
              gap={4}
              attributes={attributes}
            >
              <Icon
                svg={<CreditCardIcon />}
                size={6}
                color={active ? 'primary' : 'neutral-faded'}
              />
              <Text variant='featured-2' weight='medium' color={active ? 'primary' : 'neutral'}>
                Payment Details
              </Text>
            </View>
          )}
        </Accordion.Trigger>
        <Accordion.Content>
          <View gap={10}>
            <View gap={6}>
              <View gap={1}>
                <Text variant='body-3' weight="medium">Card Number</Text>
                <TextFieldComponent
                  name='cardNumber'
                  placeholder='4321-4342-444-1919'
                  inputAttributes='number'
                  maxWidth={110}
                  onClick={clickHandler}
                />
              </View>
              <View gap={1}>
                <Text variant='body-3' weight="medium">Exp. date</Text>
                <TextFieldComponent
                  name='expDate'
                  placeholder='02/29'
                  maxWidth={50}
                  onClick={clickHandler}
                  //   inputAttributes={{ type: 'date' }}
                />
              </View>
              <View gap={1}>
                <Text variant='body-3' weight="medium">Cardholder name</Text>
                <TextFieldComponent
                  name='cardHolderName'
                  placeholder='John Johnson'
                  maxWidth={110}
                  onClick={clickHandler}
                />
              </View>
              <View gap={1}>
                <Text variant='body-3' weight="medium">Security code</Text>
                <TextFieldComponent
                  name='securityCode'
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

export default CheckoutPayment;
