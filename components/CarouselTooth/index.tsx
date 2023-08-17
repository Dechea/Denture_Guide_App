'use client';

import { Actionable, Icon, Image, Popover, Text, View } from 'reshaped';
import { SelectedProduct } from '../../fqlx-generated/typedefs';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
import TickIcon from '../Icons/Tick';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import Root from '../TeethDiagram/teeth/areas/root';
import {
  Tooth,
  ToothContainer,
  ToothNumber,
} from '../TeethDiagram/teeth/areas/tooth';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';
import { useProductStore } from '../../zustand/product';
import { useEffect, useMemo, useState } from 'react';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
interface CarouselToothProps {
  tooth: TreatmentVisualization;
}

const styles = {
  activeTooth: '[&_svg>*]:!pointer-events-none opacity-30',
  inactiveTooth: '[&_svg>*]:!pointer-events-none ',
};

export const CarouselTooth = ({ tooth }: CarouselToothProps) => {
  const { patientFile } = useTreatmentsByGroup();
  const { selectedProducts } = useProductStore((state) => state);
  const [products, setProducts] = useState<SelectedProduct[]>([]);

  const selected = !!selectedProducts[tooth.toothNumber];
  const toothData = patientFile.teeth.find(
    ({ name }) => Number(name) === tooth.toothNumber
  );

  const selectedProductsList = useMemo(() => {
    return [
      ...(toothData?.root.treatmentDoc?.selectedProducts ?? []),
      ...(toothData?.crown.treatmentDoc?.selectedProducts ?? []),
    ];
  }, [tooth, toothData]);

  useEffect(() => {
    setProducts(selectedProductsList);
  }, [selectedProductsList]);

  return (
    <Popover
      position="bottom"
      forcePosition
      key={products.length}
      triggerType="hover"
      padding={3}
    >
      <Popover.Trigger>
        {(attributes) => {
          return (
            <Actionable attributes={attributes}>
              <View height={30} width={15}>
                <ToothContainer customStyles="!w-full pointer-events-none">
                  <Tooth
                    variant={tooth.toothVariant}
                    tooth={tooth.toothNumber}
                    className={
                      selected ? styles.activeTooth : styles.inactiveTooth
                    }
                  >
                    <Root
                      tooth={tooth.toothNumber}
                      variant={tooth.rootVariant}
                    />
                    <Crown
                      tooth={tooth.toothNumber}
                      variant={tooth.crownVariant}
                      leftAnchor={tooth.leftAnchor}
                      rightAnchor={tooth.rightAnchor}
                    />
                  </Tooth>
                  {selected && (
                    <View
                      position="absolute"
                      width="100%"
                      height="100%"
                      direction="row"
                      align="center"
                      justify="center"
                      className="[&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]"
                    >
                      <Icon svg={TickIcon} size={6} color="primary" />
                    </View>
                  )}

                  <ToothNumber
                    tooth={tooth.toothNumber}
                    jawType={JawType.UPPER}
                  />
                </ToothContainer>
              </View>
            </Actionable>
          );
        }}
      </Popover.Trigger>
      <Popover.Content
        className={
          products.length
            ? 'visible !max-h-[calc(100vh-248px)] !overflow-y-auto'
            : 'hidden'
        }
      >
        <View divided gap={4.25}>
          {products.map(({ selectedProduct }) => {
            const localization = selectedProduct?.localizations?.[1];

            return (
              <View
                key={selectedProduct?.id as string}
                align="start"
                direction="row"
                gap={8}
                wrap={false}
              >
                <Image
                  src={selectedProduct?.image}
                  alt={selectedProduct?.image}
                  height="48px"
                  width="48px"
                  borderRadius="medium"
                />

                <View gap={1} width={58} textAlign="start">
                  <Text variant="body-3" weight="bold">
                    {localization?.name}
                  </Text>

                  <Text
                    variant="caption-1"
                    weight="regular"
                    color="neutral-faded"
                  >
                    {localization?.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </Popover.Content>
    </Popover>
  );
};
