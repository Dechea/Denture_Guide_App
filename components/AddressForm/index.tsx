'use client';

import { useFormik } from 'formik';
import { useEffect } from 'react';
import {
  View,
  TextField,
  Checkbox,
  Hidden,
  Divider,
  Button,
  Text,
} from 'reshaped';
import { useUserStore } from '../../zustand/user';
import { useQuery } from 'fqlx-client';
import { Query } from '../../fqlx-generated/typedefs';
import FormHelperText from '../FormHelperText';
import { addressFormValidationSchema } from './validationSchema';
import { Address, AddressType, initialFormData } from './constants';

const AddressForm = ({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) => {
  const { organizationId, addressFormData, setAddressFormData } =
    useUserStore();
  const query = useQuery<Query>();
  const { values, handleChange, handleSubmit, errors, touched, setValues } =
    useFormik({
      validationSchema: addressFormValidationSchema,
      initialValues: initialFormData,
      onSubmit: (values) => submitFormData(values.shipping, values.billing),
    });

  const organizationAddresses = query.Organization.byId(organizationId)
    .project({ addresses: true })
    .exec().addresses;

  const setInitialAddressData = async () => {
    let shippingAddress = {},
      billingAddress = {};

    organizationAddresses?.forEach((savedAddress) => {
      const { type, ...address } = savedAddress;
      if (type === AddressType.SHIPPING) {
        shippingAddress = address;
      } else if (type === AddressType.BILLING) {
        billingAddress = address;
      }
    });

    const isBillingSameAsShippingAddress = Object.keys(shippingAddress).every(
      (key) =>
        shippingAddress[key as keyof typeof shippingAddress] ===
        billingAddress[key as keyof typeof billingAddress]
    );

    setValues({
      isBillingSameAsShippingAddress: isBillingSameAsShippingAddress,
      shipping: shippingAddress as Address,
      billing: billingAddress as Address,
    });
  };

  useEffect(() => {
    if (addressFormData !== null) {
      setValues(addressFormData);
    } else if (organizationId) {
      setInitialAddressData();
    }
  }, [organizationId]);

  useEffect(() => {
    setAddressFormData(values);
  }, [values]);

  const handleShippingChange = (key: string, value: any, event: any) => {
    if (values.isBillingSameAsShippingAddress) {
      setValues({
        ...values,
        shipping: { ...values.shipping, [key]: value },
        billing: { ...values.billing, [key]: value },
      });
    } else {
      handleChange(event);
    }
  };

  const submitFormData = async (shipping: any, billing: any) => {
    shipping['type'] = AddressType.SHIPPING;
    billing['type'] = AddressType.BILLING;

    if (organizationId) {
      await query.Organization.byId(organizationId)
        .update(`{addresses: ${JSON.stringify([shipping, billing])}}`)
        .exec();
    }

    setActiveTab('3');
  };

  return (
    <form onSubmit={handleSubmit}>
      <View direction={{ s: 'column', xl: 'row' }} gap={{ xl: 26 }}>
        <View.Item grow>
          <View
            className='overflow-y-auto'
            paddingBottom={11}
            paddingInline={6}
          >
            <View paddingBottom={8}>
              <Text variant={'featured-3'} weight={'medium'}>
                Shipping Address
              </Text>
            </View>
            <View gap={6} direction='row'>
              <View.Item columns={12}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  Full Name
                </Text>
                <TextField
                  name='shipping.name'
                  variant={'outline'}
                  placeholder={'John Doe Jr. III'}
                  className={'!rounded-medium'}
                  value={values.shipping.name}
                  onChange={({ value, event }) => {
                    handleShippingChange('name', value, event);
                  }}
                />
                {errors.shipping?.name && touched.shipping?.name && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={12}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  Street Address
                </Text>
                <TextField
                  name='shipping.street'
                  variant={'outline'}
                  placeholder={'Mozart 3 strasse'}
                  className={'!rounded-medium'}
                  value={values.shipping.street}
                  onChange={({ value, event }) => {
                    handleShippingChange('street', value, event);
                  }}
                />
                {errors.shipping?.street && touched.shipping?.street && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={12}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  {'Building number, apartment, suite etc. (optional)'}
                </Text>
                <TextField
                  name='shipping.streetNo'
                  variant={'outline'}
                  placeholder={'1A...'}
                  className={'!rounded-medium'}
                  value={values.shipping.streetNo}
                  onChange={({ value, event }) =>
                    handleShippingChange('streetNo', value, event)
                  }
                />
                {errors.shipping?.streetNo && touched.shipping?.streetNo && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={{ s: 12, l: 6 }}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  Postal Code
                </Text>
                <TextField
                  name='shipping.zip'
                  variant={'outline'}
                  placeholder={'XXX XXX'}
                  className={'!rounded-medium'}
                  value={values.shipping.zip}
                  onChange={({ value, event }) => {
                    handleShippingChange('zip', value, event);
                  }}
                />
                {errors.shipping?.zip && touched.shipping?.zip && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={{ s: 12, l: 6 }}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  City
                </Text>
                <TextField
                  name='shipping.city'
                  variant={'outline'}
                  placeholder={'Berlin'}
                  className={'!rounded-medium'}
                  value={values.shipping.city}
                  onChange={({ value, event }) => {
                    handleShippingChange('city', value, event);
                  }}
                />
                {errors.shipping?.city && touched.shipping?.city && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={{ s: 12, l: 6 }}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  State
                </Text>
                <TextField
                  name='shipping.state'
                  variant={'outline'}
                  placeholder={'Bavaria'}
                  className={'!rounded-medium'}
                  value={values.shipping.state}
                  onChange={({ value, event }) => {
                    handleShippingChange('state', value, event);
                  }}
                />
                {errors.shipping?.state && touched.shipping?.state && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={{ s: 12, l: 6 }}>
                <Text variant={'body-3'} weight={'medium'} className='pb-x1'>
                  Country
                </Text>
                <TextField
                  name='shipping.country'
                  variant={'outline'}
                  className={'!rounded-medium'}
                  value={values.shipping.country}
                  onChange={({ value, event }) => {
                    handleShippingChange('country', value, event);
                  }}
                />
                {errors.shipping?.country && touched.shipping?.country && (
                  <FormHelperText
                    message={'This field is required'}
                    variant={'error'}
                  />
                )}
              </View.Item>
              <View.Item columns={12}>
                <Checkbox
                  name='isBillingSameAsShippingAddress'
                  value={`${values.isBillingSameAsShippingAddress}`}
                  checked={values.isBillingSameAsShippingAddress}
                  onChange={({ checked, event }) => {
                    if (checked) {
                      setValues({
                        ...values,
                        isBillingSameAsShippingAddress: true,
                        billing: {
                          name: values.shipping.name,
                          street: values.shipping.street,
                          streetNo: values.shipping.streetNo,
                          zip: values.shipping.zip,
                          city: values.shipping.city,
                          state: values.shipping.state,
                          country: values.shipping.country,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                >
                  My billing address is same as shipping address
                </Checkbox>
              </View.Item>
            </View>
            <Hidden hide={values.isBillingSameAsShippingAddress}>
              <View.Item grow>
                <View paddingTop={20} paddingBottom={8}>
                  <Text variant={'featured-3'} weight={'medium'}>
                    Billing Address
                  </Text>
                </View>
                <View direction='row' gap={6}>
                  <View.Item columns={12}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      Full Name
                    </Text>
                    <TextField
                      name='billing.name'
                      variant={'outline'}
                      placeholder={'John Doe Jr. III'}
                      className={'!rounded-medium'}
                      value={values.billing.name}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.billing?.name && touched.billing?.name && (
                      <FormHelperText
                        message={'This field is required'}
                        variant={'error'}
                      />
                    )}
                  </View.Item>
                  <View.Item columns={12}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      Street Address
                    </Text>
                    <TextField
                      name='billing.street'
                      variant={'outline'}
                      placeholder={'Mozart 3 strasse'}
                      className={'!rounded-medium'}
                      value={values.billing.street}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.billing?.street && touched.billing?.street && (
                      <FormHelperText
                        message={'This field is required'}
                        variant={'error'}
                      />
                    )}
                  </View.Item>
                  <View.Item columns={12}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      {'Building number, apartment, suite etc. (optional)'}
                    </Text>
                    <TextField
                      name='billing.streetNo'
                      variant={'outline'}
                      placeholder={'1A...'}
                      className={'!rounded-medium'}
                      value={values.billing.streetNo}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.shipping?.streetNo &&
                      touched.shipping?.streetNo && (
                        <FormHelperText
                          message={'This field is required'}
                          variant={'error'}
                        />
                      )}
                  </View.Item>
                  <View.Item columns={{ s: 12, l: 6 }}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      Postal Code
                    </Text>
                    <TextField
                      name='billing.zip'
                      variant={'outline'}
                      placeholder={'XXX XXX'}
                      className={'!rounded-medium'}
                      value={values.billing.zip}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.billing?.zip && touched.billing?.zip && (
                      <FormHelperText
                        message={'This field is required'}
                        variant={'error'}
                      />
                    )}
                  </View.Item>
                  <View.Item columns={{ s: 12, l: 6 }}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      City
                    </Text>
                    <TextField
                      name='billing.city'
                      variant={'outline'}
                      placeholder={'Berlin'}
                      className={'!rounded-medium'}
                      value={values.billing.city}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.billing?.city && touched.billing?.city && (
                      <FormHelperText
                        message={'This field is required'}
                        variant={'error'}
                      />
                    )}
                  </View.Item>
                  <View.Item columns={{ s: 12, l: 6 }}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      State
                    </Text>
                    <TextField
                      name='billing.state'
                      variant={'outline'}
                      placeholder={'Bavaria'}
                      className={'!rounded-medium'}
                      value={values.billing.state}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.billing?.state && touched.billing?.state && (
                      <FormHelperText
                        message={'This field is required'}
                        variant={'error'}
                      />
                    )}
                  </View.Item>
                  <View.Item columns={{ s: 12, l: 6 }}>
                    <Text
                      variant={'body-3'}
                      weight={'medium'}
                      className='pb-x1'
                    >
                      Country
                    </Text>
                    <TextField
                      name='billing.country'
                      variant={'outline'}
                      placeholder={'Germany'}
                      className={'!rounded-medium'}
                      value={values.billing.country}
                      onChange={({ event }) => handleChange(event)}
                    />
                    {errors.billing?.country && touched.billing?.country && (
                      <FormHelperText
                        message={'This field is required'}
                        variant={'error'}
                      />
                    )}
                  </View.Item>
                </View>
              </View.Item>
            </Hidden>
          </View>
        </View.Item>
        <View.Item className={'sticky bottom-0'}>
          <View
            backgroundColor={'page'}
            padding={4}
            gap={6}
            borderRadius={{ s: 'none', xl: 'large' }}
            borderColor={'neutral-faded'}
            width={{ s: '100%', xl: 78 }}
          >
            <View gap={4}>
              <View direction='row' className='!justify-between'>
                <Text variant={'body-3'}>SubTotal</Text>
                <Text variant={'body-3'}>370 €</Text>
              </View>
              <Divider />
              <View gap={1}>
                <View direction='row' className='!justify-between'>
                  <Text variant={'body-3'} weight={'bold'}>
                    Total Cost estimation
                  </Text>
                  <Text variant={'body-3'} weight={'bold'}>
                    400 €
                  </Text>
                </View>
                <Text color={'neutral-faded'} variant={'caption-1'}>
                  7% Tax Included
                </Text>
              </View>
            </View>
            <Button type='submit' color='primary' className='!rounded-medium'>
              <View padding={1}>
                <Text variant={'body-2'} weight={'medium'}>
                  Review Order
                </Text>
              </View>
            </Button>
          </View>
        </View.Item>
      </View>
    </form>
  );
};

export default AddressForm;
