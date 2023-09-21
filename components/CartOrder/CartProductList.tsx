'use client';

import { useEffect, useState } from 'react';
import { Divider, Icon, Text, View } from 'reshaped';
import { Product } from '../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../hooks/useProductCalculations';
import BarCodeIcon from '../Icons/Barcode';

export interface UniqueProduct {
  [key: string]: { count: number; details: Product };
}

interface CartProductListProps {
  params: { patientFileId: string };
}

export default function CartProductList({ params }: CartProductListProps) {
  const [uniqueProducts, setUniqueProducts] = useState<UniqueProduct>({});
  const { selectedProducts } = useProductCalculations(params.patientFileId);

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

  const uniqueProductList = Object.entries(uniqueProducts);

  return (
    <View gap={8} className='print:w-[100svh]'>
      <Text variant='body-2' weight='medium' className='print:hidden'>
        Products
      </Text>
      <View gap={4}>
        <View direction='row' align='stretch'>
          <View.Item columns={{ s: 8, xl: 3 }} className='print:!w-1/4'>
            <View justify='start' maxWidth='77px' height='100%'>
              <Text variant='caption-2' weight='regular' color='neutral-faded'>
                Product
              </Text>
            </View>
          </View.Item>
          <View.Item columns={{ s: 4, xl: 9 }} className='print:!w-3/4'>
            <View direction='row'>
              <View.Item columns={{ s: 6, xl: 3 }} className='print:!w-1/5'>
                <View textAlign='center'>
                  <Text
                    variant='caption-2'
                    weight='regular'
                    color='neutral-faded'
                  >
                    Price per unit
                  </Text>
                </View>
              </View.Item>

              <View.Item columns={{ s: 6, xl: 2 }} className='print:!w-1/5'>
                <View textAlign='center'>
                  <Text
                    variant='caption-2'
                    weight='regular'
                    color='neutral-faded'
                  >
                    Quantity
                  </Text>
                </View>
              </View.Item>

              <View.Item
                columns={2}
                className='hidden xl:block print:block print:!w-1/5'
              >
                <View textAlign='center'>
                  <Text
                    variant='caption-2'
                    weight='regular'
                    color='neutral-faded'
                  >
                    Price without tax
                  </Text>
                </View>
              </View.Item>

              <View.Item
                columns={3}
                className='hidden xl:block print:block  print:!w-1/5'
              >
                <View textAlign='center'>
                  <Text
                    variant='caption-2'
                    weight='regular'
                    color='neutral-faded'
                  >
                    Taxes
                  </Text>
                </View>
              </View.Item>

              <View.Item
                columns={2}
                className='hidden xl:block print:block print:!w-1/5'
              >
                <View textAlign='center'>
                  <Text
                    variant='caption-2'
                    weight='regular'
                    color='neutral-faded'
                  >
                    Price with tax
                  </Text>
                </View>
              </View.Item>
            </View>
          </View.Item>
        </View>
        <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
        {uniqueProductList.map(([productId, productInfo], index) => {
          const productName = productInfo.details.localizations?.find(
            (item: { locale: string }) => item.locale === 'EN'
          )?.name;

          const price = productInfo.details?.localizations?.[1]?.price
            ?.amount as number;

          const productPrice = isNaN(price) ? 0 : price;

          const tax = productInfo.details?.localizations?.[1]?.price?.tax ?? 0;

          const priceWithoutTax =
            (100 / (100 + tax)) * (productPrice * productInfo.count);

          const priceWithTax = productPrice * productInfo.count;

          const manufacturerProductId =
            productInfo.details.manufacturerProductId;

          return (
            <>
              <View direction='column' key={productId} gap={4}>
                <View direction='row' gap={4} className='print:!gap-0'>
                  <View.Item columns={{ s: 8, xl: 3 }} className='print:!w-1/4'>
                    <Text variant='caption-1' weight='regular'>
                      {productName}
                    </Text>
                  </View.Item>
                  <View.Item
                    columns={{ s: 4, xl: 9 }}
                    className='print:!w-3/4 print:!gap-0'
                  >
                    <View
                      direction='row'
                      className='!justify-between print:!gap-0'
                      gap={4}
                    >
                      <View.Item
                        columns={{ s: 6, xl: 3 }}
                        className='print:!w-1/5'
                      >
                        <View textAlign='center'>
                          <Text
                            variant='caption-1'
                            weight='regular'
                            color='neutral-faded'
                          >
                            {`${productPrice} €`}
                          </Text>
                        </View>
                      </View.Item>

                      <View.Item
                        columns={{ s: 6, xl: 2 }}
                        className='print:!w-1/5'
                      >
                        <View textAlign='center'>
                          <Text
                            variant='caption-1'
                            weight='regular'
                            color='neutral-faded'
                          >
                            {productInfo.count}
                          </Text>
                        </View>
                      </View.Item>

                      <View.Item
                        columns={2}
                        className='hidden xl:block print:block print:!w-1/5'
                      >
                        <View textAlign='center'>
                          <Text
                            variant='caption-1'
                            weight='regular'
                            color='neutral-faded'
                          >
                            {`${priceWithoutTax.toFixed(2)} €`}
                          </Text>
                        </View>
                      </View.Item>

                      <View.Item
                        columns={3}
                        className='hidden xl:block print:block print:!w-1/5'
                      >
                        <View textAlign='center'>
                          <Text
                            variant='caption-1'
                            weight='regular'
                            color='neutral-faded'
                          >
                            {`${tax} %`}
                          </Text>
                        </View>
                      </View.Item>

                      <View.Item
                        columns={2}
                        className='hidden xl:block print:block print:!w-1/5'
                      >
                        <View textAlign='center'>
                          <Text variant='caption-1' weight='regular'>
                            {`${priceWithTax} €`}
                          </Text>
                        </View>
                      </View.Item>
                    </View>
                  </View.Item>
                </View>
                <View direction='row' align='center' gap={1}>
                  <Icon svg={BarCodeIcon} color='neutral-faded' size={5} />
                  <Text
                    variant='caption-1'
                    weight='regular'
                    color='neutral-faded'
                  >
                    {manufacturerProductId}
                  </Text>
                </View>
              </View>
              {index < uniqueProductList.length - 1 && (
                <View className='print:!mt-x1 print:!mb-x1'>
                  <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
                </View>
              )}
            </>
          );
        })}
      </View>
    </View>
  );
}
