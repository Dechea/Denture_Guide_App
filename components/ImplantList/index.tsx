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
      padding={4}
      paddingTop={6}
      wrap={false}
      width='100%'
      gap={8}
    >
      <Image
        width='140px'
        height='140px'
        src='/ImplantImage.svg'
        alt='ImplantImage'
        borderRadius='medium'
      />

      <View.Item grow>
        <View
          direction='row'
          className='!justify-between'
          gap={45}
          wrap={false}
          width='100%'
        >
          <View.Item grow>
            <View gap={12} width='100%'>
              <View gap={5} width='100%'>
                <View gap={1}>
                  <View direction='row' align='center' gap={2}>
                    <Text variant='body-1' weight='bold'>
                      {/* {abutment?.heading}{' '} */}
                      Tissue Level
                    </Text>

                    <Text
                      variant='caption-1'
                      weight='medium'
                      color='neutral-faded'
                    >
                      Camlog
                    </Text>
                  </View>

                  <View direction='row' gap={1} align='center'>
                    <Icon svg={BarCodeIcon} size={5} color='neutral-faded' />
                    <Text
                      color='neutral-faded'
                      variant='body-3'
                      weight='regular'
                    >
                      {implant?.barcode}
                    </Text>
                  </View>
                </View>

                <View gap={2}>
                  {Object.entries(implant?.implant).map(([key, value]) => (
                    <View direction='row' width='100%' align='center'>
                      <View.Item columns={8}>
                        <View direction='row' align='baseline'>
                          <Text
                            variant='body-3'
                            weight='regular'
                            color='neutral-faded'
                          >
                            {key}
                          </Text>

                          <View.Item grow gapBefore={1}>
                            <View width='100%'>
                              <Divider />
                            </View>
                          </View.Item>
                        </View>
                      </View.Item>

                      <View.Item columns={4} gapBefore={1}>
                        <Text variant='body-3' weight='regular'>
                          {value as string}
                        </Text>
                      </View.Item>
                    </View>
                  ))}
                </View>
              </View>

              <View direction='row' gap={6} width='100%' align='center'>
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
          </View.Item>

          <View gap={3} width='20%'>
            <View direction='row' align='center' width='100%' gap={1}>
              <Icon svg={ArrowDownIcon} />
              <Text variant='body-3' weight='medium'>
                Select Implant for:
              </Text>
            </View>

            <View direction='column' justify='start' width='100%' gap={2}>
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
      </View.Item>
    </View>
  );
};
