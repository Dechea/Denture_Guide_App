'use client';

import { useMemo, useState } from 'react';
import {
  Badge,
  Tabs,
  View,
  Text,
  TextField,
  Checkbox,
  Button,
  Divider,
  Hidden,
} from 'reshaped';
import { useQuery } from 'fqlx-client';
import { CartCostEstimation } from '../../../components/CartCostEstimation';
import CartHeader from '../../../components/CartHeader';
import CartItemsList from '../../../components/CartItemsList';
import {
  Product,
  Query,
  SelectedProduct,
  Tooth,
} from '../../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../../hooks/useProductCalculations';
import { useProductCrudOps } from '../../../hooks/useProductCrudOps';
import { AREA_TYPE } from '../../../zustand/product/interface';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ShippingTabs = [
  { id: '1', title: 'Selected Products' },
  { id: '2', title: 'Shipping Details' },
  { id: '3', title: 'Order' },
];

interface CartProps {
  params: { patientFileId: string };
}

export default function Cart({ params }: CartProps) {
  const query = useQuery<Query>();
  const [activeTab, setActiveTab] = useState('1');

  const { totalProductsInCart, totalCostOfProductsInCart } =
    useProductCalculations(params.patientFileId);

  const { addOrUpdateProductInFqlx } = useProductCrudOps({
    patientFileId: params.patientFileId,
  });

  const patientFile = useMemo(
    () =>
      query.PatientFile.firstWhere(
        `(product) => product.id == "${params.patientFileId}"`
      )
        .project({ patient: true, teeth: true })
        .exec(),
    [params.patientFileId, query]
  );

  const handleProductCountChange = async (
    updatedQuantity: number,
    toothNumber: number,
    productId: string
  ) => {
    const getMappedTeeth = (teeth: Tooth[]) => {
      teeth.forEach((tooth: Tooth) => {
        const localToothNumber = Number(tooth.name);

        Object.values(AREA_TYPE).forEach((area) => {
          const selectedProducts = [
            ...(tooth?.[area]?.treatmentDoc?.selectedProducts ?? []),
          ];
          const isToothMatched = localToothNumber === toothNumber;

          // @ts-expect-error
          tooth[area].treatmentDoc.selectedProducts = selectedProducts.map(
            ({ selectedProduct, quantity, ...args }) => {
              const isProductMatched = selectedProduct?.id === productId;

              return {
                ...args,
                selectedProduct: `Product.byId("${
                  selectedProduct?.id as string
                }")`,
                quantity:
                  isToothMatched && isProductMatched
                    ? updatedQuantity
                    : quantity,
              };
            }
          );
        });
      });
    };

    addOrUpdateProductInFqlx(getMappedTeeth);
  };

  const handleDeleteProduct = async (
    toothNumber: number,
    productId: string
  ) => {
    const getMappedTeeth = (teeth: Tooth[]) => {
      teeth.forEach((tooth: Tooth) => {
        const localToothNumber = Number(tooth.name);

        Object.values(AREA_TYPE).forEach((area) => {
          const selectedProducts = [
            ...(tooth[area].treatmentDoc.selectedProducts ?? []),
          ];
          const filteredSelectedProducts: SelectedProduct[] = [];
          const isToothMatched = localToothNumber === toothNumber;

          selectedProducts.forEach(({ quantity, selectedProduct, ...args }) => {
            if (!(selectedProduct?.id === productId && isToothMatched)) {
              filteredSelectedProducts.push({
                ...args,
                selectedProduct:
                  `Product.byId("${selectedProduct?.id}")` as unknown as Product,
                quantity: quantity,
              });
            }
          });

          tooth[area].treatmentDoc.selectedProducts = filteredSelectedProducts;
        });
      });
    };

    addOrUpdateProductInFqlx(getMappedTeeth);
  };

  return (
    <View className='overflow-y-scroll max-h-[calc(100vh-53px)]'>
      <CartHeader totalProductsCount={totalProductsInCart} />
      <View
        direction='column'
        width='100%'
        align='center'
        paddingInline={{ l: 35 }}
      >
        <Tabs
          variant='pills-elevated'
          value={activeTab}
          onChange={({ value }) => setActiveTab(value)}
        >
          <View paddingBlock={{ l: 6 }} width={'96%'}>
            <Tabs.List
              className={
                '[&_[role=presentation]]:max-[1024px]:!grow [&_[role=presentation]]:max-[1024px]:!basis-0 [&_[role=tablist]]:max-[1024px]:!w-full'
              }
            >
              {ShippingTabs.map((tab) => (
                <Tabs.Item key={tab.title} value={tab.id}>
                  <View
                    direction={{ s: 'column', l: 'row' }}
                    align={'center'}
                    justify={'center'}
                    gap={2}
                    wrap={false}
                  >
                    <Badge color={activeTab === tab.id ? 'primary' : undefined}>
                      {tab.id}
                    </Badge>
                    {tab.title}
                  </View>
                </Tabs.Item>
              ))}
            </Tabs.List>
          </View>

          <View height='100%' paddingTop={11}>
            <Tabs.Panel value='1'>
              <View
                direction={{ s: 'column', l: 'row' }}
                width='100%'
                gap={{ l: 34 }}
                className='print:!p-0'
                maxWidth='1280px'
                justify='center'
              >
                <View.Item grow columns={{ s: 12, l: 7 }}>
                  <CartItemsList
                    teeth={patientFile.teeth}
                    onProductCountChange={handleProductCountChange}
                    onDeleteProduct={handleDeleteProduct}
                  />
                </View.Item>
                <View.Item
                  columns={{ s: 12, l: 5 }}
                  className='sticky bottom-0'
                >
                  <View width='100%'>
                    <CartCostEstimation
                      patientFileId={params.patientFileId}
                      totalCostOfProducts={totalCostOfProductsInCart}
                    />
                  </View>
                </View.Item>
              </View>
            </Tabs.Panel>

            <Tabs.Panel value='2'>
              <Formik
                initialValues={{
                  name: '',
                  street: '',
                  streetno: '',
                  postal: '',
                  city: '',
                  state: '',
                  country: '',
                  isBillingSame: true,
                  billingName: '',
                  billingStreet: '',
                  billingStreetno: '',
                  billingPostal: '',
                  billingCity: '',
                  billingState: '',
                  billingCountry: '',
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required(),
                  street: Yup.string().required(),
                  postal: Yup.string().required(),
                  city: Yup.string().required(),
                  state: Yup.string().required(),
                  country: Yup.string().required(),
                  billingName: Yup.string(),
                  billingStreet: Yup.string().required(),
                  billingPostal: Yup.string().required(),
                  billingCity: Yup.string().required(),
                  billingState: Yup.string().required(),
                  billingCountry: Yup.string().required(),
                })}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <View
                      direction={{ s: 'column', l: 'row' }}
                      gap={{ xl: 26 }}
                    >
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
                              <Text
                                variant={'body-3'}
                                weight={'medium'}
                                className='pb-x1'
                              >
                                Full Name
                              </Text>
                              <TextField
                                name='name'
                                variant={'outline'}
                                placeholder={'John Doe Jr. III'}
                                className={'!rounded-medium'}
                                value={values.name}
                                onChange={({ event }) => handleChange(event)}
                              />
                              {errors.name && touched.name && (
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
                                name='street'
                                variant={'outline'}
                                placeholder={'Mozart 3 strasse'}
                                className={'!rounded-medium'}
                                value={values.street}
                                onChange={({ event }) => handleChange(event)}
                              />
                              {errors.street && touched.street && (
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
                                {
                                  'Building number, apartment, suite etc. (optional)'
                                }
                              </Text>
                              <TextField
                                name='streetno'
                                variant={'outline'}
                                placeholder={'1A...'}
                                className={'!rounded-medium'}
                                value={values.streetno}
                                onChange={({ event }) => handleChange(event)}
                              />
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
                                name='postal'
                                variant={'outline'}
                                placeholder={'XXX XXX'}
                                className={'!rounded-medium'}
                                value={values.postal}
                                onChange={({ event }) => handleChange(event)}
                              />
                              {errors.postal && touched.postal && (
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
                                name='city'
                                variant={'outline'}
                                placeholder={'Berlin'}
                                className={'!rounded-medium'}
                                value={values.city}
                                onChange={({ event }) => handleChange(event)}
                              />
                              {errors.city && touched.city && (
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
                                name='state'
                                variant={'outline'}
                                placeholder={'Bavaria'}
                                className={'!rounded-medium'}
                                value={values.state}
                                onChange={({ event }) => handleChange(event)}
                              />
                              {errors.state && touched.state && (
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
                                name='country'
                                variant={'outline'}
                                placeholder={'Germany'}
                                className={'!rounded-medium'}
                                value={values.country}
                                onChange={({ event }) => handleChange(event)}
                              />
                              {errors.country && touched.country && (
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
                                onChange={({ event }) => handleChange(event)}
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
                                    name='billingName'
                                    variant={'outline'}
                                    placeholder={'John Doe Jr. III'}
                                    className={'!rounded-medium'}
                                    value={values.billingName}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
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
                                    name='billingStreet'
                                    variant={'outline'}
                                    placeholder={'Mozart 3 strasse'}
                                    className={'!rounded-medium'}
                                    value={values.billingStreet}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
                                </View.Item>
                                <View.Item columns={12}>
                                  <Text
                                    variant={'body-3'}
                                    weight={'medium'}
                                    className='pb-x1'
                                  >
                                    {
                                      'Building number, apartment, suite etc. (optional)'
                                    }
                                  </Text>
                                  <TextField
                                    name='billingStreetno'
                                    variant={'outline'}
                                    placeholder={'1A...'}
                                    className={'!rounded-medium'}
                                    value={values.billingStreetno}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
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
                                    name='billingPostal'
                                    variant={'outline'}
                                    placeholder={'XXX XXX'}
                                    className={'!rounded-medium'}
                                    value={values.billingPostal}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
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
                                    name='billingCity'
                                    variant={'outline'}
                                    placeholder={'Berlin'}
                                    className={'!rounded-medium'}
                                    value={values.billingCity}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
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
                                    name='billingState'
                                    variant={'outline'}
                                    placeholder={'Bavaria'}
                                    className={'!rounded-medium'}
                                    value={values.billingState}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
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
                                    name='billingCountry'
                                    variant={'outline'}
                                    placeholder={'Germany'}
                                    className={'!rounded-medium'}
                                    value={values.billingCountry}
                                    onChange={({ event }) =>
                                      handleChange(event)
                                    }
                                  />
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
                              <View
                                direction='row'
                                className='!justify-between'
                              >
                                <Text variant={'body-3'} weight={'bold'}>
                                  Total Cost estimation
                                </Text>
                                <Text variant={'body-3'} weight={'bold'}>
                                  400 €
                                </Text>
                              </View>
                              <Text
                                color={'neutral-faded'}
                                variant={'caption-1'}
                              >
                                7% Tax Included
                              </Text>
                            </View>
                          </View>
                          <Button
                            type='submit'
                            color='primary'
                            className='!rounded-medium'
                            disabled={isSubmitting || !isValid}
                          >
                            <View padding={1}>Review Order</View>
                          </Button>
                        </View>
                      </View.Item>
                    </View>
                  </form>
                )}
              </Formik>
            </Tabs.Panel>

            <Tabs.Panel value='3'>Order</Tabs.Panel>
          </View>
        </Tabs>
      </View>
    </View>
  );
}
