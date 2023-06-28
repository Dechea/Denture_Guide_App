'use client';

import { Divider, Icon, Image, Text, View } from 'reshaped';
import ProductToothList from '../ProductToothList';
import StorageIcon from '../Icons/Storage';
import ArrowDownIcon from '../Icons/ArrowDown';
import BarCodeIcon from '../Icons/Barcode';
import { Product } from '../../fqlx-generated/typedefs';
import { PRODUCT_TYPE } from '../../zustand/product/interface';
import { convertCamelCaseToTitleCase } from '../../utils/helper';

interface ProductCardProps {
  product: Product;
  productType: PRODUCT_TYPE;
}

export const ProductCard = ({ product, productType }: ProductCardProps) => {
  const productName =
    product?.localizations?.find(
      (item: { locale: string }) => item.locale === 'EN'
    )?.name || '';

  return (
    <View direction='row' paddingBlock={6} paddingInline={4} gap={8}>
      <Image
        width='140px'
        height='140px'
        src={product.image}
        alt={productName}
        borderRadius='medium'
      />

      <View.Item grow>
        <View direction='row'>
          <View.Item grow>
            <View gap={12} direction='row'>
              <View gap={5} width='100%'>
                <View gap={1}>
                  <View direction='row' align='center' gap={2}>
                    <Text variant='body-1' weight='bold'>
                      {productName ? productName?.split(',')[0] : '-'}
                    </Text>
                    <Text
                      variant='caption-1'
                      weight='medium'
                      color='neutral-faded'
                    >
                      {product.manufacturer.name}
                    </Text>
                  </View>

                  <View direction='row' gap={1}>
                    <Icon svg={BarCodeIcon} size={5} color='neutral-faded' />
                    <Text
                      color='neutral-faded'
                      variant='body-3'
                      weight='regular'
                    >
                      {product?.manufacturerProductId || '-'}
                    </Text>
                  </View>
                </View>

                <View gap={2} width='inherit'>
                  {Object.entries(product[productType]).map(([key, value]) => (
                    <View
                      key={key}
                      direction='row'
                      width='100%'
                      height='100%'
                      gap={1}
                    >
                      <View direction='row' width='50%' gap={1}>
                        <Text
                          variant='body-3'
                          weight='regular'
                          color='neutral-faded'
                        >
                          {key}
                        </Text>

                        <View.Item grow>
                          <View paddingTop={3.5}>
                            <Divider />
                          </View>
                        </View.Item>
                      </View>

                      <View direction='row'>
                        <Text variant='body-3' weight='regular'>
                          {value as string}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
              <View direction='row' height='100%' gap={6} width='100%'>
                <Text color='neutral' variant='body-3' weight='medium'>
                  {!isNaN(product.localizations[1].price.amount)
                    ? product.localizations[1].price.amount
                    : '-'}{' '}
                  €
                </Text>
                {true && (
                  <View direction='row' gap={1} align='center'>
                    <Icon svg={StorageIcon} color='primary' />
                    <Text color='primary' variant='body-3' weight='medium'>
                      2 in Local Storage
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View.Item>

          <View
            gap={3}
            direction='row'
            align='end'
            justify='end'
            width='24.453%'
          >
            <View direction='row' align='center' width='100%' gap={1}>
              <Icon svg={ArrowDownIcon} />
              <Text variant='body-3' weight='medium'>
                Select {convertCamelCaseToTitleCase(productType)} for:
              </Text>
            </View>

            <View direction='column' justify='start' gap={2} width='100%'>
              <ProductToothList />
            </View>
          </View>
        </View>
      </View.Item>
    </View>
  );
};
