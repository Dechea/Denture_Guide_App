'use client';

import { View, Text, Checkbox, Icon, TextField } from 'reshaped';
import { implantForm } from '../../__mocks__/implant';
import FilterIcon from '../Icons/Filter';
import BarCodeIcon from '../Icons/Barcode';

export const ImplantFilterForm = () => {
  return (
    <View gap={5.5}>
      <View direction='row' align='center' paddingBlock={2.5} gap={1}>
        <Icon svg={FilterIcon} size={4} color='neutral-faded' />
        <Text variant='body-3' color='neutral-faded'>
          Filters
        </Text>
      </View>

      <TextField
        size='large'
        variant='faded'
        name='email'
        placeholder='Search by code e.g K1043.XXXX '
        startSlot={<Icon svg={BarCodeIcon} color='neutral-faded' size={5} />}
      />

      <View gap={10} paddingBottom={10}>
        {implantForm.map((data) => (
          <View gap={4} direction='column' key={data.id}>
            <Text variant='body-3' weight='medium'>
              {data.filterName}
            </Text>

            <View gap={4}>
              {data?.option.map((data: string, index: number) => {
                return (
                  <View paddingStart={0} key={index + `${data}`}>
                    <Checkbox
                      name={data}
                      value={data}
                      onChange={({ value, name, event }) => {}}
                    >
                      <Text variant='body-3' weight='regular'>
                        {data}
                      </Text>
                    </Checkbox>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
