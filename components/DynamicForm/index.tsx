import { DropdownMenu, Select, Tabs, Text, View } from 'reshaped';

interface Filter {
  id: string;
  name: string;
  type: string;
  options: string[];
}

interface DynamicFormProps {
  filters: Filter[];
  state: { [key: string]: string };
  updateState: (name: string, value: string) => void;
}

export default function DynamicForm({
  filters,
  state,
  updateState,
}: DynamicFormProps) {
  const handleChange = (name: string, value: string) =>
    updateState(name, value);

  return (
    <View direction="row" width="100%" gap={10} className="!gap-y-[24px]">
      {filters.map((field) => (
        <>
          {field.type === 'tabs' && (
            <View.Item columns={12} key={field.id}>
              <Tabs
                value={state[field.name]}
                variant="pills-elevated"
                itemWidth="equal"
                onChange={({ value }) => handleChange(field.name, value)}
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
                      placeholder={state[field.name]}
                      value={state[field.name]}
                    />
                  )}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  {field.options.map((value) => (
                    <DropdownMenu.Item
                      key={value}
                      onClick={() => handleChange(field.name, value)}
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
