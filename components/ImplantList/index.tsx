'use client';

import { Card, Divider, Image, Text, View } from 'reshaped';
import ImplantProductOption from '../ImplantProductOption';
import {
  implantProductListProps,
  implantProductOptionsProps,
} from '../../interfaces/implant';

export const ImplantList = ({
  id,
  heading,
  image,
  options,
  price,
  description,
  onSelectImplant,
  selectedTeeth,
  selectedImplants,
}: implantProductListProps) => {
  return (
    <View direction='row' align='stretch'>
      <View.Item>
        <View position='absolute' insetTop={2} insetStart={2}>
          <Image src={image} alt={heading} />
        </View>

        <View padding={7} justify='center'>
          <Image
            width={'166px'}
            height={'166px'}
            src='/ImplantImage.svg'
            alt='ImplantImage'
          />
        </View>
      </View.Item>

      <View.Item grow>
        <View direction='column' height={'100%'} paddingBlock={6} paddingInline={0} gap={1}>
          <Text variant='body-2' weight='bold'>{heading}</Text>
          <Text color='neutral-faded' variant='body-3'>
            {description}
          </Text>

          <View.Item grow>
            <View direction='column' justify='end' height='100%'>
              <Text color='disabled' variant='caption-1'>
                {price}
              </Text>
            </View>
          </View.Item>
        </View>
      </View.Item>

      <View.Item>
        <View paddingBlock={6} paddingInline={8}>
          <Card padding={0}>
            {options.map((data: implantProductOptionsProps, index: number) => (
              <View key={data.id}>
                <ImplantProductOption
                  optionId={data.id}
                  productId={id}
                  localStorageCount={data.localStorageCount}
                  selectedTeeth={selectedTeeth}
                  size={data.size}
                  onSelectImplant={onSelectImplant}
                  selectedImplants={selectedImplants}
                />
                {index < options.length - 1 && <Divider />}
              </View>
            ))}
          </Card>
        </View>
      </View.Item>
    </View>
  );
};
