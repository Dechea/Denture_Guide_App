'use client';

import {
  View,
  Text,
  TextField,
  MenuItem,
  Badge,
  Tabs,
  Divider,
} from 'reshaped';
import SearchIcon from '../Icons/Search';
import { impressionForm } from '../../__mocks__/impression';
import {
  impressionFormOptionsProps,
  impressionFormProps,
} from '../../interfaces/impression';
import MenuItemWithBadge from '../MenuItemWithBadge';

export const ImpressionForm = () => {
  return (
    <View>
      <TextField
        icon={<SearchIcon />}
        name='search'
        placeholder='Search'
      />

      <View.Item>
        {impressionForm.map((data: impressionFormProps, index) => (
          <View key={data.id} gap={3} paddingTop={8}>
            <View.Item>
              <View paddingStart={3} paddingBottom={1}>
                <Text variant='body-3' color='neutral-faded'>{data.question}</Text>
              </View>
            </View.Item>

            <View.Item>
              {data.options.map((data: impressionFormOptionsProps) => (
                <MenuItemWithBadge
                  key={data.id}
                  text={data.name}
                  endIcon={
                    <Badge variant='outline' size={'small'}>
                      {data.count}
                    </Badge>
                  }
                />
              ))}
            </View.Item>

            {index < impressionForm.length - 1 && (
              <View paddingBlock={2} paddingInline={0}>
                <Divider />
              </View>
            )}
          </View>
        ))}
      </View.Item>
    </View>
  );
};
