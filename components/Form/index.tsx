import React from 'react';
import { Switch, Tabs, Text, View } from 'reshaped';

interface Field {
  id: string;
  name: string;
  type: string;
  options: { isAvailable: boolean; name: string; value: string }[];
}

interface FormProps {
  fields: Field[];
  values: { [key: string]: string };
  onChangeValue: (name: string, value: string) => void;
}

export default function Form({ fields, values, onChangeValue }: FormProps) {
  return (
    <View direction='row' width='100%' gap={10} className='!gap-y-[24px]'>
      {fields.map((field) => (
        <React.Fragment key={field.id}>
          {field.type === 'tabs' && (
            <View.Item columns={12} key={field.id}>
              <Tabs
                value={values[field.name]}
                variant='pills-elevated'
                itemWidth='equal'
                onChange={({ value }) => onChangeValue(field.name, value)}
              >
                <Tabs.List
                  className={
                    field.options.length > 2 &&
                    `max-[640px]:[&_[role=tablist]]:flex-col max-[640px]:[&_[role=presentation]]:!w-full max-[640px]:[&_[role=presentation]]:!mx-[var(--rs-tabs-gap)] max-[640px]:[&_[role=tab]>span]:!justify-start`
                  }
                >
                  {field?.options.map(({ isAvailable, name, value }) => (
                    <Tabs.Item key={value} value={value}>
                      <Text color={!isAvailable ? 'disabled' : 'neutral'}>
                        {name}
                      </Text>
                    </Tabs.Item>
                  ))}
                </Tabs.List>
              </Tabs>
            </View.Item>
          )}
          {field.type === 'switch' && (
            <View.Item key={field.id} columns={12}>
              <View>
                <Switch
                  name='switch'
                  checked={Boolean(values[field.name] === 'true')}
                  onChange={({ checked }) => {
                    onChangeValue(field.name, `${checked}`);
                  }}
                >
                  <Text variant='body-3' weight='regular'>
                    {field.name}
                  </Text>
                </Switch>
              </View>
            </View.Item>
          )}
          {field.type === 'dropdown' && (
            <View.Item key={field.id} columns={{ s: 12, l: 6 }}>
              <Text variant='caption-1' weight='regular' className='pb-x1'>
                {field.name}
              </Text>
              <select
                className='px-x1 py-x2  border border-[--rs-color-border-neutral-faded] rounded w-full'
                onChange={(event) =>
                  onChangeValue(field.name, event.target.value)
                }
                value={values[field.name]}
              >
                {field.options.map(({ isAvailable, name, value }) => (
                  <option
                    key={value}
                    value={value}
                    className={`${
                      !isAvailable &&
                      '!text-[var(--rs-color-foreground-disabled)]'
                    }`}
                  >
                    {name}
                  </option>
                ))}
              </select>
            </View.Item>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}
