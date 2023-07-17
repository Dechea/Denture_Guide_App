'use client';

import { Actionable, Icon, Image, Popover, Text, View } from 'reshaped';
import { selectedTeethData } from '../../__mocks__/treatmentTabs';
import { SelectedProduct } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import TickIcon from '../Icons/Tick';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import Root from '../TeethDiagram/teeth/areas/root';
import {
  Tooth,
  ToothContainer,
  ToothNumber,
} from '../TeethDiagram/teeth/areas/tooth';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';
interface CarouselToothProps {
  toothNumber: number;
}

const styles = {
  activeTooth: '[&_svg>*]:!pointer-events-none [&_svg]:opacity-30 ',
  inactiveTooth: '[&_svg>*]:!pointer-events-none ',
};

export const CarouselTooth = ({ toothNumber }: CarouselToothProps) => {
  const { treatments } = useTeethDiagramStore((state) => state);
  const { selectedProducts } = useProductStore((state) => state);

  const toothData = treatments[toothNumber as keyof typeof treatments] ?? {};
  const selected = !!selectedProducts[toothNumber];

  return (
    <>
      <Popover triggerType='hover' padding={3}>
        <Popover.Trigger>
          {(attributes) => (
            <Actionable attributes={attributes}>
              <View height={30} width={15} aspectRatio={60 / 120}>
                <ToothContainer customStyles='!w-full pointer-events-none'>
                  <Tooth
                    variant={toothData?.toothVariant}
                    tooth={toothNumber}
                    className={
                      selected ? styles.activeTooth : styles.inactiveTooth
                    }
                  >
                    <Root tooth={toothNumber} variant={toothData.rootVariant} />
                    <Crown
                      tooth={toothNumber}
                      variant={toothData.crownVariant}
                      leftAnchor={toothData.leftAnchor}
                      rightAnchor={toothData.rightAnchor}
                    />
                    {selected && (
                      <View
                        position='absolute'
                        width='100%'
                        height='100%'
                        direction='row'
                        insetTop={3}
                        align='center'
                        justify='center'
                        className='[&_svg]:!opacity-100 [&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]'
                      >
                        <Icon svg={TickIcon} size={6} />
                      </View>
                    )}
                  </Tooth>

                  <ToothNumber tooth={toothNumber} jawType={JawType.UPPER} />
                </ToothContainer>
              </View>
            </Actionable>
          )}
        </Popover.Trigger>
        <Popover.Content>
          {selectedTeethData.map((tooth) => {
            const products: SelectedProduct[] = [
              ...(tooth.root.treatmentDoc?.selectedProducts ?? []),
              ...(tooth.crown.treatmentDoc?.selectedProducts ?? []),
            ];

            if (products.length == 0) {
              return;
            }

            return (
              <View divided gap={4.25}>
                {products.map(({ selectedProduct, quantity }) => {
                  const localization = selectedProduct?.localizations?.[1];

                  return (
                    <View
                      key={selectedProduct?.id as string}
                      align='center'
                      direction='row'
                      gap={4}
                      wrap={false}
                    >
                      <Image
                        src={selectedProduct?.image}
                        alt={selectedProduct?.image}
                        height='48px'
                        width='48px'
                        borderRadius='medium'
                      />

                      <View gap={1} width='232px' textAlign='start'>
                        <Text variant='body-3' weight='bold'>
                          {localization?.name}
                        </Text>

                        <Text
                          variant='caption-1'
                          weight='regular'
                          color='neutral-faded'
                        >
                          {localization?.description}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </Popover.Content>
      </Popover>
    </>
  );
};
