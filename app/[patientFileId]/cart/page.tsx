'use client';

import { useMemo } from 'react';
import { View } from 'reshaped';
import { useQuery } from 'fauna-typed';
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
import { useUserStore } from '../../../zustand/user';

interface CartProps {
  params: { patientFileId: string };
}

export default function Cart({ params }: CartProps) {
  const query = useQuery<Query>();

  const { totalProductsInCart, totalCostOfProductsInCart } =
    useProductCalculations(params.patientFileId);

  const { addOrUpdateProductInFqlx } = useProductCrudOps({
    patientFileId: params.patientFileId,
  });

  const { organizationId } = useUserStore();
  console.log(organizationId);

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
    <View className='overflow-y-scroll !max-h-[calc(100svh-53px)]'>
      <CartHeader totalProductsCount={totalProductsInCart} />
      <View direction='column' width='100%' align='center'>
        <View
          direction={{ s: 'column', l: 'row' }}
          width='100%'
          height='calc(100svh-120px)'
          paddingTop={8}
          gap={{ l: 34 }}
          className='print:!p-0'
          maxWidth='1280px'
          justify='center'
          paddingInline={{ l: 10, xl: 35 }}
        >
          <View.Item grow columns={{ s: 12, l: 7 }}>
            <CartItemsList
              teeth={patientFile.teeth}
              onProductCountChange={handleProductCountChange}
              onDeleteProduct={handleDeleteProduct}
            />
          </View.Item>
          <View.Item columns={{ s: 12, l: 5 }} className='sticky bottom-0'>
            <View width='100%'>
              <CartCostEstimation
                patientFileId={params.patientFileId}
                totalCostOfProducts={totalCostOfProductsInCart}
              />
            </View>
          </View.Item>
        </View>
      </View>
    </View>
  );
}
