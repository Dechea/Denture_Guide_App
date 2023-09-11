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
import * as Yup from 'yup';
import { useUserStore } from '../../zustand/user';
import { useQuery } from 'fqlx-client';
import { Query } from '../../fqlx-generated/typedefs';

interface Address {
  name: string;
  street: string;
  streetNo: string;
  zip: string;
  city: string;
  state: string;
  country: string;
}

const initialFormData = {
  shipping: {
    name: '',
    street: '',
    streetNo: '',
    zip: '',
    city: '',
    state: '',
    country: '',
  },
  isBillingSame: true,
  billing: {
    name: '',
    street: '',
    streetNo: '',
    zip: '',
    city: '',
    state: '',
    country: '',
  },
};

const addressValidationSchema = Yup.object().shape({
  shipping: Yup.object().shape({
    name: Yup.string().required(),
    street: Yup.string().required(),
    zip: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    country: Yup.string().required(),
  }),
  billing: Yup.object().shape({
    name: Yup.string(),
    street: Yup.string().required(),
    zip: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    country: Yup.string().required(),
  }),
});

const AddressForm = ({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) => {
  const { organizationId } = useUserStore();
  const query = useQuery<Query>();
  const { values, handleChange, handleSubmit, errors, touched, setValues } =
    useFormik({
      validationSchema: addressValidationSchema,
      initialValues: initialFormData,
      onSubmit: (values) => submitFormData(values),
    });

  const setInitialAddressData = async () => {
    let shippingAddress = {} as Address,
      billingAdress = {} as Address,
      billingSameAsShipping = true;

    const savedAddresses = await query.Organization.byId(organizationId)
      .project({ addresses: true })
      .exec().addresses;

    for (const savedAddress of savedAddresses) {
      const { type, ...address } = savedAddress;
      if (type === 'SHIPPING') {
        shippingAddress = address;
      } else if (type === 'BILLING') {
        billingAdress = address;
      }
    }

    for (const key in shippingAddress) {
      if (
        shippingAddress[key as keyof typeof shippingAddress] !==
        billingAdress[key as keyof typeof billingAdress]
      ) {
        billingSameAsShipping = false;
      }
    }

    setValues({
      isBillingSame: billingSameAsShipping,
      shipping: shippingAddress,
      billing: billingAdress,
    });
  };

  useEffect(() => {
    if (organizationId) {
      setInitialAddressData();
    }
  }, []);

  const submitFormData = async ({ shipping, billing }) => {
    shipping['type'] = 'SHIPPING';
    billing['type'] = 'BILLING';

    if (organizationId) {
      await query.Organization.byId(organizationId)
        .update(`{addresses: ${JSON.stringify([shipping, billing])}}`)
        .exec();

      setActiveTab('3');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <View direction={{ s: 'column', l: 'row' }} gap={{ xl: 26 }}>
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
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          name: value,
                        },
                        billing: {
                          ...values.billing,
                          name: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.name && touched.shipping?.name && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
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
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          street: value,
                        },
                        billing: {
                          ...values.billing,
                          street: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.street && touched.shipping?.street && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
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
                  onChange={({ value, event }) => {
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          streetNo: value,
                        },
                        billing: {
                          ...values.billing,
                          streetNo: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.streetNo && touched.shipping?.streetNo && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
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
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          zip: value,
                        },
                        billing: {
                          ...values.billing,
                          zip: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.zip && touched.shipping?.zip && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
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
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          city: value,
                        },
                        billing: {
                          ...values.billing,
                          city: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.city && touched.shipping?.city && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
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
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          state: value,
                        },
                        billing: {
                          ...values.billing,
                          state: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.state && touched.shipping?.state && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
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
                    if (values.isBillingSame) {
                      setValues({
                        ...values,
                        shipping: {
                          ...values.shipping,
                          country: value,
                        },
                        billing: {
                          ...values.billing,
                          country: value,
                        },
                      });
                    } else {
                      handleChange(event);
                    }
                  }}
                />
                {errors.shipping?.country && touched.shipping?.country && (
                  <Text variant={'body-3'} color={'critical'}>
                    This field is required
                  </Text>
                )}
              </View.Item>
              <View.Item columns={12}>
                <Checkbox
                  name='isBillingSame'
                  value={`${values.isBillingSame}`}
                  defaultChecked={true}
                  onChange={({ checked, event }) => {
                    if (checked) {
                      setValues({
                        ...values,
                        isBillingSame: true,
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
            <Hidden hide={values.isBillingSame}>
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
                      <Text variant={'body-3'} color={'critical'}>
                        This field is required
                      </Text>
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
                      <Text variant={'body-3'} color={'critical'}>
                        This field is required
                      </Text>
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
                        <Text variant={'body-3'} color={'critical'}>
                          This field is required
                        </Text>
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
                      <Text variant={'body-3'} color={'critical'}>
                        This field is required
                      </Text>
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
                      <Text variant={'body-3'} color={'critical'}>
                        This field is required
                      </Text>
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
                      <Text variant={'body-3'} color={'critical'}>
                        This field is required
                      </Text>
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
                      <Text variant={'body-3'} color={'critical'}>
                        This field is required
                      </Text>
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
            borderRadius={{ s: 'none', l: 'large' }}
            borderColor={'neutral-faded'}
            width={{ s: '100%', l: 78 }}
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
              <View padding={1}>Review Order</View>
            </Button>
          </View>
        </View.Item>
      </View>
    </form>
  );
};

export default AddressForm;
