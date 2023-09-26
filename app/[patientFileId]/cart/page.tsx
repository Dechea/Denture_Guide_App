'use client';

import { useUser } from '@clerk/nextjs';
import { useQuery } from 'fauna-typed';
import { useFormik } from 'formik';
import { redirect } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Badge, Tabs, Text, View } from 'reshaped';
import ShippingForm from '../../../components/AddressForm';
import {
  AddressType,
  initialFormData,
} from '../../../components/AddressForm/constants';
import { addressFormValidationSchema } from '../../../components/AddressForm/validationSchema';
import CartHeader from '../../../components/CartHeader';
import CartOrder from '../../../components/CartOrder';
import CartProducts from '../../../components/CartProducts';
import {
  Address,
  Product,
  Query,
  SelectedProduct,
  Tooth,
} from '../../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../../hooks/useProductCalculations';
import { useProductCrudOps } from '../../../hooks/useProductCrudOps';
import { AREA_TYPE } from '../../../zustand/product/interface';
import { useUserStore } from '../../../zustand/user';

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
  const {
    setAddressFormData,
    savedShippingIndex,
    savedBillingIndex,
    setSavedShippingIndex,
    setSavedBillingIndex,
  } = useUserStore();
  const { user } = useUser();

  const { totalProductsInCart } = useProductCalculations(params.patientFileId);
  const { addOrUpdateProductInFqlx } = useProductCrudOps({
    patientFileId: params.patientFileId,
  });

  const formik = useFormik({
    validationSchema: addressFormValidationSchema,
    initialValues: initialFormData,
    onSubmit: (values) =>
      submitFormData(
        values.shipping,
        values.billing,
        values.isBillingSameAsShippingAddress
      ),
  });

  const { isValid, handleSubmit } = formik;

  const patientFile = useMemo(
    () =>
      query.PatientFile.firstWhere(
        `(product) => product.id == "${params.patientFileId}"`
      )
        .project({ patient: true, teeth: true })
        .exec(),
    [params.patientFileId, query]
  );

  const organization = query.User.firstWhere(
    `user => user.clerkId == "${user?.id}"`
  )
    .project({ activeOrganization: true })
    .exec()?.activeOrganization;

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

  const handleTabClick = async (tabId: string) => {
    if (tabId === '3') {
      if (!isValid) {
        return;
      } else {
        handleSubmit();
      }
    }
    setActiveTab(tabId);
  };

  const submitFormData = async (
    shipping: Address,
    billing: Address,
    isBillingSameAsShippingAddress: boolean
  ) => {
    const localAddresses = [...(organization?.addresses ?? [])];

    if (isBillingSameAsShippingAddress) {
      billing = {
        ...shipping,
        default: !savedBillingIndex,
        type: AddressType.BILLING,
      };
    }

    if (!savedShippingIndex) {
      localAddresses.push(shipping);
    }
    if (!savedBillingIndex || isBillingSameAsShippingAddress) {
      localAddresses.push(billing);
    }

    setAddressFormData({ isBillingSameAsShippingAddress, shipping, billing });

    await query.Organization.byId(organization?.id ?? '')
      .update(`{addresses: ${JSON.stringify(localAddresses)}}`)
      .exec();

    setActiveTab('3');
  };

  useEffect(() => {
    setAddressFormData(null);
    setSavedShippingIndex(0);
    setSavedBillingIndex(0);

    if (!organization) {
      redirect('/users/sync');
    }
  }, []);

  return (
    <View
      height={'100%'}
      className='print:!overflow-visible sm:!max-h-[calc(100svh-53px)] xl:!max-h-[calc(100svh-53px)]'
    >
      <CartHeader totalProductsCount={totalProductsInCart} />
      <View
        height={'100%'}
        direction='column'
        align='center'
        paddingInline={{ xl: 35 }}
        className={
          '!max-h-[calc(100svh-70px)] sm:!max-h-[calc(100svh-123px)] lg:!max-h-[calc(100svh-125px)] xl:!max-h-[calc(100svh-140px)]'
        }
      >
        <Tabs
          variant='pills-elevated'
          value={activeTab}
          onChange={({ value }) => handleTabClick(value)}
        >
          <View
            paddingBlock={{ xl: 6 }}
            width={'100%'}
            maxWidth={'1280px'}
            className='print:hidden'
            paddingInline={{ xl: 6, l: 6, m: 0, s: 0 }}
          >
            <Tabs.List
              className={
                '!pr-0 [&_[role=tablist]]:max-lg:!w-full [&_[role=tablist]]:min-[1024px]:!min-w-[726px] [&_[role=tablist]>*]:!w-[33%]'
              }
            >
              {ShippingTabs.map((tab) => (
                <Tabs.Item key={tab.title} value={tab.id}>
                  <View
                    direction={{ s: 'column', xl: 'row' }}
                    align={'center'}
                    justify={'center'}
                    gap={2}
                    className='!flex-nowrap'
                  >
                    <Badge
                      color={activeTab === tab.id ? 'primary' : undefined}
                      size='small'
                    >
                      {tab.id}
                    </Badge>

                    <View paddingInline={4}>
                      <Text variant='body-3'>{tab.title}</Text>
                    </View>
                  </View>
                </Tabs.Item>
              ))}
            </Tabs.List>
          </View>

          <View
            width='100%'
            paddingTop={4}
            height='100%'
            maxWidth='1280px'
            align='center'
            className='[&_[role=tabpanel]]:w-full [&_[role=tabpanel]]:h-full !overflow-y-scroll scrollbar-0 print:!overflow-visible'
          >
            <Tabs.Panel value='1'>
              <CartProducts
                teeth={patientFile.teeth}
                onProductCountChange={handleProductCountChange}
                onDeleteProduct={handleDeleteProduct}
                setActiveTab={handleTabClick}
                params={params}
              />
            </Tabs.Panel>

            <Tabs.Panel value='2'>
              <ShippingForm
                params={params}
                formik={formik}
                organizationId={organization?.id ?? ''}
              />
            </Tabs.Panel>

            <Tabs.Panel value='3'>
              <CartOrder params={params} setActiveTab={handleTabClick} />
            </Tabs.Panel>
          </View>
        </Tabs>
      </View>
    </View>
  );
}
