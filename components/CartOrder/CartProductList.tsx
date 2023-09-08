import { useEffect, useState } from 'react';
import { Divider, Hidden, Icon, Text, View } from 'reshaped';
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
      }
    });

    setUniqueProducts(uniqueProductsData);
  }, [selectedProducts]);

  return (
    <View gap={8}>
      <Text variant='body-2' weight='medium'>
        Products list
      </Text>
      <View gap={4}>
        <View direction='row'>
          <View.Item columns={{ s: 8, xl: 3 }}>
            <View
              paddingBlock={2}
              align={'start'}
              justify={'center'}
              textAlign='center'
              maxWidth={'77px'}
            >
              <Text variant='caption-2' weight='regular' color='neutral-faded'>
                Product
              </Text>
            </View>
          </View.Item>
          <View.Item columns={{ s: 4, xl: 9 }}>
            <View direction='row'>
              <View.Item columns={{ s: 6, xl: 3 }}>
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

              <View.Item columns={{ s: 6, xl: 2 }}>
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

              <Hidden hide={{ s: true, xl: false }}>
                <View.Item columns={2}>
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
              </Hidden>

              <Hidden hide={{ s: true, xl: false }}>
                <View.Item columns={3}>
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
              </Hidden>

              <Hidden hide={{ s: true, xl: false }}>
                <View.Item columns={2}>
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
              </Hidden>
            </View>
          </View.Item>
        </View>
        <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
        {Object.entries(uniqueProducts).map(
          ([productId, productInfo], index) => {
            const productName = productInfo.details.localizations?.find(
              (item: { locale: string }) => item.locale === 'EN'
            )?.name;

            const price = productInfo.details?.localizations?.[1]?.price
              ?.amount as number;

            const productPrice = isNaN(price) ? 0 : price;

            const tax = productInfo.details?.localizations?.[1]?.price?.tax;

            const priceWithoutTax =
              (100 / (100 + tax)) * (productPrice * productInfo.count);

            const priceWithTax = productPrice * productInfo.count;

            const manufacturerProductId =
              productInfo.details.manufacturerProductId;

            return (
              <>
                <View direction='row' key={productName} gap={4}>
                  <View.Item columns={{ s: 8, xl: 3 }}>
                    <Text variant='caption-1' weight='regular'>
                      {productName}
                    </Text>
                  </View.Item>
                  <View.Item columns={{ s: 4, xl: 9 }}>
                    <View direction='row' className='!justify-between' gap={4}>
                      <View.Item columns={{ s: 6, xl: 3 }}>
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

                      <View.Item columns={{ s: 6, xl: 2 }}>
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

                      <Hidden hide={{ s: true, xl: false }}>
                        <View.Item columns={2}>
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
                      </Hidden>

                      <Hidden hide={{ s: true, xl: false }}>
                        <View.Item columns={3}>
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
                      </Hidden>

                      <Hidden hide={{ s: true, xl: false }}>
                        <View.Item columns={2}>
                          <View textAlign='center'>
                            <Text variant='caption-1' weight='regular'>
                              {`${priceWithTax} €`}
                            </Text>
                          </View>
                        </View.Item>
                      </Hidden>
                    </View>
                  </View.Item>
                  <View
                    direction='row'
                    align='center'
                    gap={1}
                    className='print:!p-x1'
                  >
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
                {index < Object.keys(uniqueProducts).length - 1 && (
                  <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
                )}
              </>
            );
          }
        )}
      </View>
    </View>
  );
}
