'use client';

import { useUser } from '@clerk/nextjs';
import {
  revalidateActiveQueries,
  useLocalStorage,
  useQuery,
} from 'fauna-typed';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Badge, Tabs, Text, View } from 'reshaped';
import ShippingForm from '../../../../components/AddressForm';
import {
  AddressType,
  initialFormData,
} from '../../../../components/AddressForm/constants';
import { addressFormValidationSchema } from '../../../../components/AddressForm/validationSchema';
import CartHeader from '../../../../components/CartHeader';
import CartOrder from '../../../../components/CartOrder';
import CartProducts from '../../../../components/CartProducts';
import {
  Address,
  PatientFile,
  Product,
  Query,
  SelectedProduct,
  Tooth,
} from '../../../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../../../hooks/useProductCalculations';
import { useProductCrudOps } from '../../../../hooks/useProductCrudOps';
import { AREA_TYPE } from '../../../../zustand/product/interface';
import { useUserStore } from '../../../../zustand/user';
import { CARTTABROUTES, DISCOVERYMODE, FLOW } from '../../../../__mocks__/flow';

const CartTabs = [
  {
    id: '1',
    title: 'Selected Products',
    route: CARTTABROUTES.selectedproducts,
  },
  { id: '2', title: 'Shipping Details', route: CARTTABROUTES.shippingdetails },
  { id: '3', title: 'Order', route: CARTTABROUTES.orders },
];

interface CartProps {
  params: { patientFileId: string; cart?: string[] };
}

export default function Cart({ params }: CartProps) {
  const isDiscoveryModeEnabled = params.patientFileId === `${DISCOVERYMODE}`;
  const query = useQuery<Query>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    isDiscoveryModeEnabled
      ? CARTTABROUTES.selectedproducts
      : params.cart?.[0] ?? CARTTABROUTES.selectedproducts
  );
  const {
    addressFormData,
    setAddressFormData,
    savedShippingIndex,
    savedBillingIndex,
  } = useUserStore();
  const { user } = useUser();

  const { totalProductsInCart } = useProductCalculations(params.patientFileId);
  const { addOrUpdateProductInFqlx } = useProductCrudOps({
    patientFileId: params.patientFileId,
  });
  const { value: discoveryModePatientFile } = useLocalStorage(
    `${DISCOVERYMODE}`,
    'PatientFile'
  );
  const formik = useFormik({
    validationSchema: addressFormValidationSchema,
    initialValues: addressFormData ?? initialFormData,
    onSubmit: (values) =>
      submitFormData(
        values.shipping,
        values.billing,
        values.isBillingSameAsShippingAddress
      ),
  });

  localStorage.setItem('lastTab', FLOW.cart.id);

  const { isValid, handleSubmit } = formik;

  const patientFile = useMemo(() => {
    if (isDiscoveryModeEnabled) {
      return discoveryModePatientFile as PatientFile;
    }
    return query.PatientFile.firstWhere(
      `(file) => file.id == "${params.patientFileId}"`
    )
      .project({ patient: true, teeth: true })
      .exec();
  }, [params.patientFileId, query, discoveryModePatientFile]);

  const userOrganization = query.User.firstWhere(
    `user => user.clerkId == "${user?.id}"`
  )
    .project({ activeOrganization: true })
    .exec()?.activeOrganization;

  const orgAddresses = query.Organization.byId(`${userOrganization?.id}`)
    .project({ addresses: true })
    .exec()?.addresses;

  const handleProductCountChange = async (
    updatedQuantity: number,
    toothNumber: number,
    productId: string
  ) => {
    const getMappedTeeth = async (teeth: Tooth[]) => {
      const mappedTeeth: Tooth[] = [];

      for (const tooth of teeth) {
        const localToothNumber = Number(tooth.name);

        Object.values(AREA_TYPE).forEach((area) => {
          const selectedProducts = [
            ...(tooth?.[area]?.treatmentDoc?.selectedProducts ?? []),
          ];
          const isToothMatched = localToothNumber === toothNumber;

          // @ts-expect-error
          tooth[area].treatmentDoc.selectedProducts = selectedProducts.map(
            ({ selectedProduct, quantity }) => {
              const isProductMatched = selectedProduct?.id === productId;

              return {
                selectedProduct: isDiscoveryModeEnabled
                  ? selectedProduct
                  : `Product.byId("${selectedProduct?.id as string}")`,
                quantity:
                  isToothMatched && isProductMatched
                    ? updatedQuantity
                    : quantity,
              };
            }
          );
        });
        mappedTeeth.push(tooth);
      }

      return mappedTeeth;
    };

    addOrUpdateProductInFqlx(getMappedTeeth);
  };

  const handleDeleteProduct = async (
    toothNumber: number,
    productId: string
  ) => {
    const getMappedTeeth = async (teeth: Tooth[]) => {
      const mappedTeeth: Tooth[] = [];

      for (const tooth of teeth) {
        const localToothNumber = Number(tooth.name);

        Object.values(AREA_TYPE).forEach((area) => {
          const selectedProducts = [
            ...(tooth[area].treatmentDoc?.selectedProducts ?? []),
          ];
          const filteredSelectedProducts: SelectedProduct[] = [];
          const isToothMatched = localToothNumber === toothNumber;

          selectedProducts.forEach(({ quantity, selectedProduct }) => {
            if (!(selectedProduct?.id === productId && isToothMatched)) {
              filteredSelectedProducts.push({
                selectedProduct: isDiscoveryModeEnabled
                  ? selectedProduct
                  : (`Product.byId("${selectedProduct?.id}")` as unknown as Product),
                quantity: quantity,
              });
            }
          });

          // @ts-ignore
          tooth[area].treatmentDoc.selectedProducts = filteredSelectedProducts;
        });
        mappedTeeth.push(tooth);
      }

      return mappedTeeth;
    };

    addOrUpdateProductInFqlx(getMappedTeeth);
  };

  const handleTabClick = async (tabId: string) => {
    if (isDiscoveryModeEnabled) {
      return;
    }

    if (tabId === CARTTABROUTES.orders) {
      if (isValid) {
        handleSubmit();
      }
      return;
    }

    setActiveTab(tabId);

    router.push(`/${params.patientFileId}/cart/${tabId}`);
  };

  const submitFormData = async (
    shipping: Address,
    billing: Address,
    isBillingSameAsShippingAddress: boolean
  ) => {
    const localAddresses = [...(orgAddresses ?? [])];

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

    await query.Organization.byId(userOrganization?.id ?? '')
      .update(`{addresses: ${JSON.stringify(localAddresses)}}`)
      .exec();

    await revalidateActiveQueries('Organization');

    setActiveTab(CARTTABROUTES.orders);

    router.push(`/${params.patientFileId}/cart/orders`);
  };

  useEffect(() => {
    if (!isValid && activeTab === CARTTABROUTES.orders) {
      router.push(`/${params.patientFileId}/cart/shippingdetails`);
    }

    // if (!isDiscoveryModeEnabled && !userOrganization) {
    //   redirect('/users/sync');
    // }
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
              {CartTabs.map((tab) => (
                <Tabs.Item key={tab.title} value={tab.route}>
                  <View
                    direction={{ s: 'column', xl: 'row' }}
                    align={'center'}
                    justify={'center'}
                    gap={2}
                    className='!flex-nowrap'
                  >
                    <Badge
                      color={activeTab === tab.route ? 'primary' : undefined}
                      size='small'
                    >
                      <View align='center'>{tab.id}</View>
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
            <Tabs.Panel value={CARTTABROUTES.selectedproducts}>
              <CartProducts
                teeth={patientFile.teeth}
                onProductCountChange={handleProductCountChange}
                onDeleteProduct={handleDeleteProduct}
                setActiveTab={handleTabClick}
                params={params}
              />
            </Tabs.Panel>

            <Tabs.Panel value={CARTTABROUTES.shippingdetails}>
              <ShippingForm
                params={params}
                formik={formik}
                organizationId={userOrganization?.id ?? ''}
              />
            </Tabs.Panel>

            <Tabs.Panel value={CARTTABROUTES.orders}>
              <CartOrder params={params} setActiveTab={handleTabClick} />
            </Tabs.Panel>
          </View>
        </Tabs>
      </View>
    </View>
  );
}
