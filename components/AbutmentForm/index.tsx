'use client';

import { Badge, Tabs, Text, TextField, View } from 'reshaped';
import SearchIcon from '../Icons/Search';
import MenuItemWithBadge from '../MenuItemWithBadge';
import {
  abutmentFormAnalog,
  abutmentFormDigital,
} from '../../__mocks__/abutment';
import { abutmentFormProps } from '../../interfaces/abutment';

const AbutmentForm = () => {
  return (
    <View gap={6}>
      <TextField
        icon={SearchIcon}
        name='email'
        size='medium'
        placeholder='Search by code e.g K1043.XXXX '
      />

      <View gap={4}>
        <Tabs variant='pills-elevated' itemWidth='equal'>
          <Tabs.List>
            <Tabs.Item value='analog'>
              <Text variant='body-3'>Analog</Text>
            </Tabs.Item>
            <Tabs.Item value='digital'>
              <Text variant='body-3'>Digital</Text>
            </Tabs.Item>
          </Tabs.List>

          <Tabs.Panel value='analog'>
            {abutmentFormAnalog.map((item: abutmentFormProps) => (
              <MenuItemWithBadge
                key={item.id}
                text={item.name}
                endIcon={<Badge size='small'>{item.count}</Badge>}
              />
            ))}
          </Tabs.Panel>

          <Tabs.Panel value='digital'>
            {abutmentFormDigital.map((item: abutmentFormProps) => (
              <MenuItemWithBadge
                key={item.id}
                text={item.name}
                endIcon={<Badge size='small'>{item.count}</Badge>}
              />
            ))}
          </Tabs.Panel>
        </Tabs>
      </View>
    </View>
  );
};

export default AbutmentForm;
