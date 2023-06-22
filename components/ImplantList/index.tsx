'use client';

import { Card, Divider, Icon, Image, Text, View } from 'reshaped';
import ImplantProductOption from '../ImplantProductOption';
import { implantProductListProps } from '../../interfaces/implant';
import StorageIcon from '../Icons/Storage';
import ArrowDownIcon from '../Icons/ArrowDown';
import BarCodeIcon from '../Icons/Barcode';

export const ImplantList = ({
  id,
  implant,
  options,
}: implantProductListProps) => {
  const implantData = {
    Material: implant?.implant?.material || '',
    'Insertion Post': implant?.implant?.insertionPost || '',
    'Neck Length': implant?.implant?.lengthNeck || '',
    Diameter: implant?.implant?.diameterPlatform || '',
    Length: implant?.implant?.length || '',
    'Platform Switch': implant?.implant?.platformSwitch || '',
  };

  return (
    <View direction='row' paddingBlock={6} paddingInline={4} gap={8}>
      <Image
        width='140px'
        height='140px'
        src='/ImplantImage.svg'
        alt='ImplantImage'
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
                      {implant?.localizations?.length
                        ? implant.localizations
                            .find(
                              (item: { locale: string }) => item.locale === 'EN'
                            )
                            .name.split(',')[0]
                        : '-'}
                    </Text>
                    <Text
                      variant='caption-1'
                      weight='medium'
                      color='neutral-faded'
                    >
                      {implant.manufacturer.name}
                    </Text>
                  </View>

                  <View direction='row' gap={1}>
                    <Icon svg={BarCodeIcon} size={5} color='neutral-faded' />
                    <Text
                      color='neutral-faded'
                      variant='body-3'
                      weight='regular'
                    >
                      {implant?.manufacturerProductId || '-'}
                    </Text>
                  </View>
                </View>

                <View gap={2} width='inherit'>
                  {Object.entries(implantData).map(([key, value]) => (
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
                  {implant?.localizations?.length
                    ? implant.localizations[1].price.amount
                    : '-'}{' '}
                  €
                </Text>
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
                Select Implant for:
              </Text>
            </View>

            <View direction='column' justify='start' gap={2} width='100%'>
              {options?.map((data) => (
                <ImplantProductOption
                  key={data.id}
                  selectedTeeth={data.selectedTeeth}
                />
              ))}
            </View>
          </View>
        </View>
      </View.Item>
    </View>
  );
};
