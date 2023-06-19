'use client';

import { View, Text, Checkbox } from 'reshaped';
import { implantForm } from '../../__mocks__/implant';

export const ImplantForm = () => {
  return (
    <View gap={10} paddingBottom={10} paddingTop={2.5}>
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
  );
};
