'use client';

import { useState } from 'react';
import { Divider, Image, Text, View } from 'reshaped';
import SelectionMenuItem from '../SelectionMenuItem';
import {
  impressionListProps,
  impressionOptionsProps,
} from '../../interfaces/impression';

export const ImpressionList = ({
  id,
  heading,
  description,
  image,
  price,
  options,
}: impressionListProps) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  // const handleMenuItemClick = (itemId) => {
  //   setSelectedItemId(itemId);
  // };
  //
  const handleClick = () => {
    // e.preventDefault();
    // e.stopPropagation();
  };

  return (
    <View direction='row' align='stretch'>
      <View.Item>
        <View padding={7} justify='center'>
          <Image width={'166px'} height={'166px'} src={image} alt={heading} />
        </View>
      </View.Item>

      <View.Item grow>
        <View direction='column' height={'100%'} paddingBlock={6} paddingInline={0} gap={1}>
          <Text variant='body-2' weight='bold'>{heading}</Text>
          <Text color='neutral-faded' variant='body-3'>
            {description}
          </Text>

          <View.Item grow>
            <View direction='column' justify='end' height={'100%'}>
              <Text color='neutral' variant='body-3'>
                {price}
              </Text>
            </View>
          </View.Item>
        </View>
      </View.Item>

      <View.Item>
        <View gap={1} paddingBlock={6} paddingInline={8}>
          <View paddingBottom={2}>
            <Text variant='caption-1' weight='medium'>Order for:</Text>
          </View>
          <View borderColor='neutral-faded' borderRadius='small' divided>
            {options.map((data: impressionOptionsProps) => {
              return (
                <SelectionMenuItem
                  key={data.id}
                  id={data.id}
                  localStorageCount={data.localStorageCount}
                  selectedTeeth={data.selectedTeeth}
                  onClick={handleClick}
                />
              );
            })}
          </View>
        </View>
      </View.Item>
    </View>
  );
};
