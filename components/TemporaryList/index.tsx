'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Divider, Image, Text, View } from 'reshaped';
import AbutmentProductOption from '../SelectionMenuItem';
import {
  temporaryProductListProps,
  temporaryOptionsProps,
} from '../../interfaces/temporary';

export const TemporaryList = ({
  id,
  options,
  image,
  heading,
  price,
  patientFileId,
}: temporaryProductListProps) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const router = useRouter();

  // const handleMenuItemClick = (itemId) => {
  //   setSelectedItemId(itemId);
  // };
  //
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  return (
    <View direction='row' align='stretch'>
      <View.Item>
        <View padding={7} justify='center'>
          <Image width={'166px'} height={'166px'} src={image} alt={heading} />
        </View>
      </View.Item>
      <View.Item grow>
        <View
          direction='column'
          // width={"100%"}
          height={'100%'}
          paddingBlock={6}
          paddingInline={0}
          gap={1}
        >
          <Text variant='body-2' weight='bold'>
            {heading}
          </Text>

          <View.Item grow>
            <View direction='column' justify='end' height='100%'>
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
            <Text variant='caption-1' weight='medium' color='neutral-faded'>
              Order for:
            </Text>
          </View>
          <View borderColor='neutral-faded' borderRadius='small' divided>
            {options.map((data: temporaryOptionsProps, index: number) => (
              <AbutmentProductOption
                key={data.id}
                id={data.id}
                selectedTeeth={data.selectedTeeth}
                localStorageCount={data.localStorageCount}
                onClick={() =>
                  router.push(`/${patientFileId}/treatments/impression`)
                }
              />
            ))}
          </View>
        </View>
      </View.Item>
    </View>
  );
};
