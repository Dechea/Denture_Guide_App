'use client';

import { Card, Divider, Icon, Image, Text, View } from 'reshaped';
import ImplantProductOption from '../ImplantProductOption';
import {
  implantProductListProps,
  implantProductOptionsProps,
} from '../../interfaces/implant';
import StorageIcon from '../Icons/Storage';
import ArrowDownIcon from '../Icons/ArrowDown';
import BarCodeIcon from '../Icons/Barcode';

export const ImplantList = ({
  id,
  implant,
  options,
}: // heading,
// image,
// options,
// price,
// description,
// onSelectImplant,
// selectedTeeth,
// selectedImplants,
// implantDetails,
// barcode,
// inStorage,
// storageNumber,
any) => {
  return (
    <View
      direction='row'
      paddingTop={6}
      paddingInline={4}
      paddingBottom={4}
      wrap={false}
      width='100%'
      className='flex flex-row justify-between'
      borderColor='critical'
    >
      <View className='mr-[32px]' borderColor='positive'>
        <View direction='row' gap={8} align='start' wrap={false}>
          <View justify='center'>
            <Image
              width='140px'
              height='140px'
              src='/ImplantImage.svg'
              alt='ImplantImage'
            />
          </View>
        </View>
      </View>

      <View
        className='flex flex-row flex-grow justify-between w-[calc(100%-204px)]'
        gap={45}
        wrap={false}
        borderColor='positive'
      >
        <View
          gap={12}
          direction='row'
          // justify='start'
          // width='50.82%'
        >
          <View gap={5} width='100%'>
            <View gap={1}>
              <View direction='row' align='stretch' gap={2}>
                <Text variant='body-1' weight='bold'>
                  {/* {abutment?.heading}{' '} */}
                  Tissue Level
                </Text>

                <View direction='row' align='center' justify='start'>
                  <Text
                    variant='caption-1'
                    weight='medium'
                    color='neutral-faded'
                  >
                    Camlog
                  </Text>
                </View>
              </View>

              <View direction='row' gap={1}>
                <Icon svg={BarCodeIcon} size={5} color='neutral-faded' />
                <Text color='neutral-faded' variant='body-3' weight='regular'>
                  {implant?.barcode}
                </Text>
              </View>
            </View>

            <View gap={2} align='stretch'>
              {Object.entries(implant?.implant).map(([key, value]) => (
                <View direction='row' width='100%' height='100%' gap={1}>
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
            <Text color='neutral' variant='body-3' weight='bold'>
              {implant?.price}
            </Text>
            {implant?.inStorage && (
              <View direction='row' gap={1} align='center'>
                <Icon svg={StorageIcon} color='primary' />
                <Text color='primary' variant='body-3' weight='medium'>
                  {implant?.storageNumber} in Local Storage
                </Text>
              </View>
            )}
          </View>
        </View>

        <View
          gap={3}
          direction='row'
          align='end'
          justify='end'
          // width='89%'
          className='min-w-[190px]'
        >
          <View direction='row' align='center' width='100%' gap={1}>
            <Icon svg={ArrowDownIcon} />
            <Text variant='body-3' weight='medium'>
              Select Implant for:
            </Text>
          </View>

          <View direction='column' justify='start' gap={2} width='100%'>
            {options?.map((data) => (
              <Card
                padding={0}
                key={data.id}
                className='!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)]'
              >
                <ImplantProductOption
                  optionId={data.id}
                  productId={id}
                  // localStorageCount={data.localStorageCount}
                  selectedTeeth={data.selectedTeeth}
                  // size={data.size}
                  // onSelectImplant={onSelectImplant}
                  // selectedImplants={selectedImplants}
                />
              </Card>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};
