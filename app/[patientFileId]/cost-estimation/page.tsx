'use client';

import { useQuery } from 'fqlx-client';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'reshaped';
import CostEstimationHeader from '../../../components/CostEstimationHeader';
import CostEstimationList from '../../../components/CostEstimationList';
import TotalCostEstimationCard from '../../../components/TotalCostEstimationCard';
import {
  Product,
  Query,
  SelectedProduct,
} from '../../../fqlx-generated/typedefs';

export interface UniqueProduct {
  [key: string]: { count: number; details: Product };
}

export default function CostEstimation({
  params,
}: {
  params: { patientFileId: string };
}) {
  const query = useQuery<Query>();
  const [uniqueProducts, setUniqueProducts] = useState<UniqueProduct>({});

  const patientFile = useMemo(
    () =>
      query.PatientFile.firstWhere(
        `(patientFile) => patientFile.id == "${params.patientFileId}"`
      )
        .project({ id: true, teeth: true })
        .exec(),
    [params.patientFileId]
  );

  const totalPrice = useMemo(() => {
    return Object.values(uniqueProducts).reduce((acc, item) => {
      const { count, details } = item;
      const price = details.localizations[1]?.price?.amount as number;

      if (!isNaN(price)) {
        return acc + price * count;
      }

      return acc;
    }, 0);
  }, [uniqueProducts]);

  useEffect(() => {
    const selectedProducts: SelectedProduct[] = patientFile.teeth.flatMap(
      (tooth) => [
        ...(tooth.root.treatmentDoc?.selectedProducts ?? []),
        ...(tooth.crown.treatmentDoc?.selectedProducts ?? []),
      ]
    );

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
  }, []);

  return (
    <View className='overflow-y-scroll max-h-[calc(100vh-53px)]'>
      <CostEstimationHeader />

      <View
        direction='row'
        width='100%'
        paddingBlock={8}
        paddingInline={6}
        gap={35.5}
      >
        <View.Item columns={8}>
          <CostEstimationList products={uniqueProducts} />
        </View.Item>
        <View.Item columns={4} className='sticky !top-[133px]'>
          <TotalCostEstimationCard totalPrice={totalPrice} />
        </View.Item>
      </View>
    </View>
  );
}
