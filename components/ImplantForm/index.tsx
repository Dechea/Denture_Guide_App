'use client';

import { View, Text, Checkbox, TextField } from 'reshaped';
import { implantForm } from '../../__mocks__/implant';
import { implantFormProps } from '../../interfaces/implant';

export const ImplantForm = () => {
  return (
    <View gap={8} paddingBlock={10} paddingInline={0}>
      <TextField name='email' placeholder='Search by code e.g K1043.XXXX ' />
      {implantForm.map((data: implantFormProps) => (
        <View direction='column' key={data.id}>
          <View gap={1} direction='column'>
            <View>
              <Text color='neutral-faded' variant='caption-1' weight="medium">
                {data.filterName}
              </Text>
            </View>

            {data?.option.map((data: string, index: number) => {
              return (
                <View padding={2} paddingStart={0} key={index + `${data}`}>
                  <Checkbox
                    name={data}
                    value={data}
                    onChange={({ value, name, event }) => {}}
                  >
                    <Text color='neutral-faded'  variant='body-3'>
                      {data}
                    </Text>
                  </Checkbox>
                </View>
              );
            })}
          </View>
        </View>
      ))}
      <View>
        <Checkbox
          name='camlog'
          value='dcamlogog'
          onChange={({ value, name, event }) => {}}
        >
          <Text color='neutral-faded'  variant='body-3'>
            Platform Switching
          </Text>
        </Checkbox>
      </View>
    </View>
  );
};
