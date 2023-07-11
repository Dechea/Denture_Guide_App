'use client';

import { useEffect, useState } from 'react';
import { Text, View } from 'reshaped';
import CostEstimationHeader from '../../../components/CostEstimationHeader';
import CostEstimationList from '../../../components/CostEstimationList';
import TotalCostEstimationCard from '../../../components/TotalCostEstimationCard';
import { Product } from '../../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../../hooks/useProductCalculations';

export interface UniqueProduct {
  [key: string]: { count: number; details: Product };
}

export default function CostEstimation({
  params,
}: {
  params: { patientFileId: string };
}) {
  const [uniqueProducts, setUniqueProducts] = useState<UniqueProduct>({});
  const { selectedProducts, totalCostOfProductsInCart } =
    useProductCalculations(params.patientFileId);

  useEffect(() => {
    const uniqueProductsData: UniqueProduct = {
      ...uniqueProducts,
    };

    selectedProducts.forEach((product) => {
      const productId = product?.selectedProduct?.id as string;

      if (!(productId in uniqueProductsData)) {
        uniqueProductsData[productId] = {
          count: product?.quantity as number,
          details: product?.selectedProduct as Product,
        };
      } else {
        uniqueProductsData[productId] = {
          ...uniqueProductsData[productId],
          count: uniqueProductsData[productId].count + (product?.quantity ?? 0),
        };
      }
    });

    setUniqueProducts(uniqueProductsData);
  }, [selectedProducts]);

  return (
    <View className='overflow-y-scroll max-h-[calc(100vh-53px)] print:block print:overflow-visible'>
      <CostEstimationHeader />

      <View className='hidden print:block print:pb-x24 print:px-x12'>
        <Text variant='title-3'>Cost Estimation</Text>
        <Text variant='featured-3' weight='bold' className='print:pt-x4'>
          Total: {totalCostOfProductsInCart} €
        </Text>
      </View>

      <View
        direction='row'
        width='100%'
        paddingBlock={8}
        paddingInline={6}
        gap={35.5}
        className='print:!p-0'
      >
        <View.Item
          columns={8}
          className='print:block print:p-10 print:pt-x12 print:px-x12 print:!w-full'
        >
          <CostEstimationList products={uniqueProducts} />
        </View.Item>
        <View.Item columns={4} className='sticky !top-[133px] print:hidden'>
          <TotalCostEstimationCard totalPrice={totalCostOfProductsInCart} />
        </View.Item>
      </View>
    </View>
  );
}
