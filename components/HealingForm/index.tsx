'use client';

import { Badge, TextField, View } from 'reshaped';
import SearchIcon from '../Icons/Search';
import MenuItemWithBadge from '../MenuItemWithBadge';
import { healingForm } from '../../__mocks__/healing';
import { healingFormProps } from '../../interfaces/healing';

const HealingForm = () => {
  return (
    <View gap={8}>
      <View>
        <TextField
          icon={SearchIcon}
          name='email'
          size='medium'
          placeholder='Search by code e.g K1043.XXXX '
        />
      </View>

      <View gap={1}>
        {healingForm.map((item: healingFormProps) => (
          <MenuItemWithBadge
            key={item.id}
            text={item.name}
            endIcon={<Badge size='small'>{item.count}</Badge>}
          />
        ))}
      </View>
    </View>
  );
};

export default HealingForm;
