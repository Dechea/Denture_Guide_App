'use client';

import cx from 'classnames';
import { useQuery } from 'fqlx-client';
import { useMemo } from 'react';
import { Actionable, Icon, Image, Popover, Text, View } from 'reshaped';
import { Query, SelectedProduct } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import TickIcon from '../Icons/Tick';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import Root from '../TeethDiagram/teeth/areas/root';
import {
  Tooth,
  ToothContainer,
  ToothNumber,
} from '../TeethDiagram/teeth/areas/tooth';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
interface CarouselToothProps {
  active: boolean;
  treatmentToothData: TreatmentVisualization[];
  patientFileId: string;
}

const styles = {
  activeTooth: '[&_svg>*]:!pointer-events-none [&_svg]:opacity-30 ',
  inactiveTooth: '[&_svg>*]:!pointer-events-none ',
};

export const CarouselTooth = ({
  active,
  treatmentToothData,
  patientFileId,
}: CarouselToothProps) => {
  const { selectedProducts } = useProductStore((state) => state);
  const query = useQuery<Query>();

  const patientFile = useMemo(
    () => query.PatientFile.byId(patientFileId).project({ teeth: true }).exec(),
    [patientFileId, query.PatientFile]
  );

  return (
    <View
      direction='row'
      borderRadius='small'
      paddingInline={2}
      className={cx(
        {
          'opacity-50': !active,
          'bg-[--rs-color-background-neutral-faded] !border-[--rs-color-border-neutral-faded]':
            active,
        },
        'hover:border-[--rs-color-border-neutral-faded] border-[1px] border-[rgba(0.0,0.0,0.0,0.0)]'
      )}
    >
      {treatmentToothData.map((tooth) => {
        const selected = !!selectedProducts[tooth.toothNumber as number];
        const toothData = patientFile.teeth.find(
          ({ name }) => Number(name) === tooth.toothNumber
        );

        const products: SelectedProduct[] = [
          ...(toothData?.root.treatmentDoc?.selectedProducts ?? []),
          ...(toothData?.crown.treatmentDoc?.selectedProducts ?? []),
        ];

        return (
          <Popover key={tooth.toothNumber} triggerType='hover' padding={3}>
            <Popover.Trigger>
              {(attributes) => {
                return (
                  <Actionable attributes={attributes}>
                    <View height={30} width={15}>
                      <ToothContainer customStyles='!w-full pointer-events-none'>
                        <Tooth
                          variant={tooth.toothVariant}
                          tooth={tooth.toothNumber}
                          className={
                            selected ? styles.activeTooth : styles.inactiveTooth
                          }
                        >
                          <Root
                            tooth={tooth.toothNumber}
                            variant={tooth.roothVariant}
                          />
                          <Crown
                            tooth={tooth.toothNumber}
                            variant={tooth.crownVariant}
                            leftAnchor={tooth.leftAnchor}
                            rightAnchor={tooth.rightAnchor}
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
            <Popover.Content className={products.length ? 'visible' : 'hidden'}>
              <View divided gap={4.25}>
                {products.map(({ selectedProduct }) => {
                  const localization = selectedProduct?.localizations?.[1];

                  return (
                    <View
                      key={selectedProduct?.id as string}
                      align='start'
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

                      <View gap={1} width={58} textAlign='start'>
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
            </Popover.Content>
          </Popover>
        );
      })}
    </View>
  );
};
