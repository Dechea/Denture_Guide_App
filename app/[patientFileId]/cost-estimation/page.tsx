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

interface CostEstimationProps {
  params: { patientFileId: string };
}

export default function CostEstimation({ params }: CostEstimationProps) {
  const [uniqueProducts, setUniqueProducts] = useState<UniqueProduct>({});
  const { selectedProducts, totalCostOfProductsInCart } =
    useProductCalculations(params.patientFileId);

  useEffect(() => {
    const uniqueProductsData: UniqueProduct = {};

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
    <View className="overflow-y-scroll max-h-[calc(100vh-53px)] print:block print:overflow-visible">
      <CostEstimationHeader />

      <View className="hidden print:block print:pb-x24 print:px-x12">
        <Text variant="title-3">Cost Estimation</Text>
        <Text variant="featured-3" weight="bold" className="print:pt-x4">
          Total: {totalCostOfProductsInCart} €
        </Text>
      </View>
      <View direction="column" width="100%" align="center">
        <View
          direction="row"
          width="100%"
          paddingBlock={8}
          paddingInline={6}
          gap={34}
          className="print:!p-0"
          maxWidth="1280px"
          justify="center"
        >
          <View.Item
            columns={8}
            className="print:block print:p-x12 print:!w-full"
          >
            <CostEstimationList products={uniqueProducts} />
          </View.Item>
          <View.Item columns={4} className="sticky !top-[133px] print:hidden">
            <View maxWidth="306px" width="100%">
              <TotalCostEstimationCard totalPrice={totalCostOfProductsInCart} />
            </View>
          </View.Item>
        </View>
      </View>
    </View>
  );
}
