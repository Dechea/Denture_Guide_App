'use client';

import { useMemo, useState } from 'react';
import { Badge, Tabs, View } from 'reshaped';
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
import CartOrder from '../../../components/CartOrder';
import AddressForm from '../../../components/AddressForm';

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
  const [unlockedTabs, setUnlockedTabs] = useState<string[]>(['1']);

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

  const handleTabClick = (tabId: string) => {
    if (unlockedTabs.includes(tabId)) {
      setActiveTab(tabId);
    }
  };

  const activateTab = (tabId: string) => {
    console.log(unlockedTabs, tabId);
    if (!unlockedTabs.includes(tabId)) {
      console.log('pushed');
      setUnlockedTabs([...unlockedTabs, tabId]);
    }
    setActiveTab(tabId);
  };

  return (
    <View
      height={'100%'}
      className='overflow-y-scroll !max-h-[calc(100svh-53px)] print:block print:overflow-visible'
    >
      <CartHeader totalProductsCount={totalProductsInCart} />
      <View
        height={'100%'}
        direction='column'
        align='center'
        paddingInline={{ xl: 35 }}
        className={'!max-h-[calc(100svh-153px)]'}
      >
        <Tabs
          variant='pills-elevated'
          value={activeTab}
          onChange={({ value }) => handleTabClick(value)}
        >
          <View paddingBlock={{ xl: 6 }} width={'96%'} maxWidth={'1280px'}>
            <Tabs.List
              className={
                '[&_[role=presentation]]:max-[1024px]:!grow [&_[role=presentation]]:max-[1024px]:!basis-0 [&_[role=tablist]]:max-[1024px]:!w-full print:!hidden'
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

          <View
            width='100%'
            maxWidth='1280px'
            align='center'
            paddingTop={11}
            className='[&_[role=tabpanel]]:w-full [&_[role=tabpanel]]:h-full'
          >
            <Tabs.Panel value='1'>
              <View
                direction={{ s: 'column', xl: 'row' }}
                gap={{ xl: 26 }}
                className='print:!p-0'
                height='100%'
                grow
              >
                <View.Item grow>
                  <CartItemsList
                    teeth={patientFile.teeth}
                    onProductCountChange={handleProductCountChange}
                    onDeleteProduct={handleDeleteProduct}
                  />
                </View.Item>
                <View.Item className='sticky bottom-0'>
                  <CartCostEstimation
                    patientFileId={params.patientFileId}
                    totalCostOfProducts={totalCostOfProductsInCart}
                    setActiveTab={activateTab}
                  />
                </View.Item>
              </View>
            </Tabs.Panel>

            <Tabs.Panel value='2'>
              <AddressForm setActiveTab={activateTab} />
            </Tabs.Panel>

            <Tabs.Panel value='3'>
              <CartOrder params={params} setActiveTab={activateTab} />
            </Tabs.Panel>
          </View>
        </Tabs>
      </View>
    </View>
  );
}
