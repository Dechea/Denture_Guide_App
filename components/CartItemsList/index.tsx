'use client';

import { Text, View } from 'reshaped';
import ImageWithDetailsCard from '../ImageWithDetailsCard';
import Counter from '../Counter';
import Delete from '../DeleteButton';
import { SelectedProduct, Tooth } from '../../fqlx-generated/typedefs';

interface CartItemsListProps {
  teeth: Tooth[];
  onProductCountChange: (
    quantity: number,
    toothNumber: number,
    productId: string
  ) => void;
  onDeleteProduct: (toothNumber: number, productId: string) => void;
}

export default function CartItemsList({
  teeth,
  onProductCountChange,
  onDeleteProduct,
}: CartItemsListProps) {
  return (
    <View gap={18}>
      {teeth.map((tooth) => {
        const products: SelectedProduct[] = [
          ...(tooth.root.treatmentDoc?.selectedProducts || []),
          ...(tooth.crown.treatmentDoc?.selectedProducts || []),
        ];
        if (products.length == 0) {
          return;
        }

        return (
          <View key={tooth.name} gap={8}>
            <View direction='row' gap={2} align='center'>
              <Text variant='featured-3' weight='medium'>
                {tooth.name}
              </Text>
              <Text variant='featured-3' weight='medium'>
                {`${tooth.root.treatmentDoc.treatment.name} ${tooth.crown.treatmentDoc.treatment.name}`}
              </Text>
            </View>

            <View align='center' width='100%' divided gap={6}>
              {products.map(({ selectedProduct, quantity }) => (
                <View
                  key={selectedProduct?.id as string}
                  width='100%'
                  direction='row'
                  align='center'
                  className='justify-between'
                  gap={4}
                >
                  <View.Item grow>
                    <ImageWithDetailsCard
                      title={selectedProduct?.localizations[1]?.name as string}
                      description={
                        selectedProduct?.localizations[1]?.description as string
                      }
                      imageUrl={selectedProduct?.image as string}
                      price={
                        selectedProduct?.localizations[1]?.price
                          ?.amount as number
                      }
                    />
                  </View.Item>

                  <View direction='row' align='center' gap={4}>
                    <Counter
                      initialCount={Number(quantity)}
                      onCountChange={(count: number) =>
                        onProductCountChange(
                          count,
                          Number(tooth.name),
                          selectedProduct?.id as string
                        )
                      }
                    />
                    <Delete
                      onClick={() =>
                        onDeleteProduct(
                          Number(tooth.name),
                          selectedProduct?.id as string
                        )
                      }
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
}
