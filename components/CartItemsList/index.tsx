'use client';

import { Divider, Icon, Text, View } from 'reshaped';
import ImageWithDetailsCard from '../ImageWithDetailsCard';
import Counter from '../Counter';
import Delete from '../DeleteButton';
import { SelectedProduct, Tooth } from '../../fqlx-generated/typedefs';
import ToothIcon from '../Icons/Tooth';

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
    <View gap={18} paddingBottom={{ s: 11, xl: 32 }} paddingInline={6}>
      {teeth.map((tooth) => {
        const products: SelectedProduct[] = [
          ...(tooth.root.treatmentDoc?.selectedProducts ?? []),
          ...(tooth.crown.treatmentDoc?.selectedProducts ?? []),
        ];

        if (products.length == 0 || tooth.name === '') {
          return;
        }

        return (
          <View key={tooth.name} gap={10}>
            <View direction='row' gap={2} align='center'>
              <Icon svg={<ToothIcon />} size={6} />
              <Text variant='featured-3' weight='regular'>
                {tooth.name}
              </Text>
              <Text variant='featured-3' weight='regular'>
                {`${tooth.root.treatmentDoc.treatment.name} ${tooth.crown.treatmentDoc.treatment.name}`}
              </Text>
            </View>

            <View align='center' width='100%' gap={6}>
              {products.map(({ selectedProduct, quantity }, index) => {
                const localization = selectedProduct?.localizations?.[1];

                return (
                  <View
                    gap={6}
                    key={selectedProduct?.id as string}
                    width='100%'
                  >
                    <View
                      width='100%'
                      align='center'
                      className='justify-between'
                    >
                      <ImageWithDetailsCard
                        title={localization?.name as string}
                        description={localization?.description as string}
                        imageUrl={selectedProduct?.image as string}
                        price={localization?.price?.amount as number}
                      >
                        <View
                          direction='row'
                          align='center'
                          width='100%'
                          className='!justify-between'
                          gap={4}
                        >
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
                      </ImageWithDetailsCard>
                    </View>
                    {index !== products.length - 1 && (
                      <Divider className='border-b bg-[var(--rs-color-border-neutral-faded)]' />
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}
