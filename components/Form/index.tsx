import { DropdownMenu, Select, Tabs, Text, View } from 'reshaped';

interface Field {
  id: string;
  name: string;
  type: string;
  options: string[];
}

interface FormProps {
  fields: Field[];
  values: { [key: string]: string };
  onChangeValue: (name: string, value: string) => void;
}

export default function Form({ fields, values, onChangeValue }: FormProps) {
  return (
    <View direction="row" width="100%" gap={10} className="!gap-y-[24px]">
      {fields.map((field) => (
        <>
          {field.type === 'tabs' && (
            <View.Item columns={12} key={field.id}>
              <Tabs
                value={values[field.name]}
                variant="pills-elevated"
                itemWidth="equal"
                onChange={({ value }) => onChangeValue(field.name, value)}
              >
                <Tabs.List
                  className={
                    field.options.length > 2 &&
                    `max-[640px]:[&_[role=tablist]]:flex-col max-[640px]:[&_[role=presentation]]:!w-full max-[640px]:[&_[role=presentation]]:!mx-[var(--rs-tabs-gap)] max-[640px]:[&_[role=tab]>span]:!justify-start`
                  }
                >
                  {field?.options.map((value) => (
                    <Tabs.Item key={value} value={value}>
                      {value}
                    </Tabs.Item>
                  ))}
                </Tabs.List>
              </Tabs>
            </View.Item>
          )}
          {field.type === 'dropdown' && (
            <View.Item key={field.id} columns={6}>
              <Text variant="caption-1" weight="regular" className="pb-x1">
                {field.name}
              </Text>
              <DropdownMenu width="trigger">
                <DropdownMenu.Trigger>
                  {(attributes) => (
                    <Select
                      name={field.name}
                      inputAttributes={attributes}
                      placeholder={values[field.name]}
                      value={values[field.name]}
                    />
                  )}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  {field.options.map((value) => (
                    <DropdownMenu.Item
                      key={value}
                      onClick={() => onChangeValue(field.name, value)}
                    >
                      {value}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu>
            </View.Item>
          )}
        </>
      ))}
    </View>
  );
}
