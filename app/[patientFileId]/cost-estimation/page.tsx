'use client';

import { useEffect, useState } from 'react';
import { Divider, Text, View, Image } from 'reshaped';
import CostEstimationHeader from '../../../components/CostEstimationHeader';
import CostEstimationList from '../../../components/CostEstimationList';
import TotalCostEstimationCard from '../../../components/TotalCostEstimationCard';
import { Product, Query } from '../../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../../hooks/useProductCalculations';
import ComposedTeeth from '../../../components/TeethDiagram/composedTeeth';
import { useQuery } from 'fqlx-client';

export interface UniqueProduct {
  [key: string]: { count: number; details: Product };
}

interface CostEstimationProps {
  params: { patientFileId: string };
}

export default function CostEstimation({ params }: CostEstimationProps) {
  const [uniqueProducts, setUniqueProducts] = useState<UniqueProduct>({});
  const query = useQuery<Query>();
  const { selectedProducts, totalCostOfProductsInCart } =
    useProductCalculations(params.patientFileId);

  const PatientFile = query.PatientFile.byId(params.patientFileId)
    .project({ patient: true })
    .exec();

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');

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
    <View className='overflow-y-scroll max-h-[calc(100vh-53px)] print:block print:overflow-visible'>
      <CostEstimationHeader />

      <View gap={10}>
        <View className='hidden print:block '>
          {/*  */}
          <View gap={18}>
            <View direction='row'>
              <Image src='/decheaLogo.svg' alt='Dechea' width={5} height={5} />

              <Text
                className='print:ps-[27px]'
                variant='body-1'
                weight='medium'
                color='neutral-faded'
              >
                Cost Estimation
              </Text>
            </View>
            <View gap={3} className='print:px-x12'>
              <Text variant='body-3' weight='regular' color='neutral-faded'>
                Total / Inc. 7% VAT
              </Text>
              <View direction='row' align='center'>
                <View.Item columns={9}>
                  <Text variant='title-5' className='print:pt-x4'>
                    {totalCostOfProductsInCart} €
                  </Text>
                </View.Item>

                <View.Item columns={3}>
                  <View className='flex justify-between'>
                    <Text
                      variant='body-3'
                      weight='regular'
                      color='neutral-faded'
                    >
                      Date:
                    </Text>
                    <Text variant='body-3' weight='regular'>
                      {formattedDate}
                    </Text>
                  </View>
                  <View className='flex justify-between'>
                    <Text
                      variant='body-3'
                      weight='regular'
                      color='neutral-faded'
                    >
                      Patient:
                    </Text>
                    <Text variant='body-3' weight='regular'>
                      {PatientFile?.patient?.name}
                    </Text>
                  </View>
                </View.Item>
              </View>
            </View>
          </View>

          <View gap={10} className='print:px-x12 print:pt-x16'>
            <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
            <ComposedTeeth />
            <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
          </View>
        </View>

        <View direction='column' width='100%' align='center'>
          <View
            direction='row'
            width='100%'
            paddingBlock={8}
            paddingInline={6}
            gap={34}
            className='print:!p-0'
            maxWidth='1280px'
            justify='center'
          >
            <View.Item
              columns={8}
              className='print:block print:p-x12 print:!w-full'
            >
              <Text
                className='hidden print:block print:pb-[48px]'
                variant='featured-3'
                weight='medium'
              >
                Details
              </Text>
              <CostEstimationList products={uniqueProducts} />
            </View.Item>
            <View.Item columns={4} className='sticky !top-[133px] print:hidden'>
              <View maxWidth='306px' width='100%'>
                <TotalCostEstimationCard
                  totalPrice={totalCostOfProductsInCart}
                />
              </View>
            </View.Item>
          </View>
        </View>
      </View>
    </View>
  );
}
