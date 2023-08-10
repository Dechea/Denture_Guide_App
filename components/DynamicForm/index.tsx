import { DropdownMenu, Select, Tabs, Text, View } from 'reshaped';

interface DynamicFormProps {
  id: string;
  name: string;
  type: string;
  options: { name: string; value: string }[];
}

export default function DynamicForm({
  filters,
}: {
  filters: DynamicFormProps[];
}) {
  return (
    <View direction="row" width="100%" gap={10} className="!gap-y-[24px]">
      {filters.map((field) => (
        <>
          {field.type === 'tabs' && (
            <View.Item columns={12} key={field.id}>
              <Tabs variant="pills-elevated" itemWidth="equal">
                <Tabs.List
                  className={
                    field.options.length > 2 &&
                    `max-[640px]:[&_[role=tablist]]:flex-col max-[640px]:[&_[role=presentation]]:!w-full max-[640px]:[&_[role=presentation]]:!mx-[var(--rs-tabs-gap)] max-[640px]:[&_[role=tab]>span]:!justify-start`
                  }
                >
                  {field?.options.map(({ name, value }) => (
                    <Tabs.Item key={value} value={value}>
                      {name}
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
                      placeholder={field.options[0].value}
                    />
                  )}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  {field.options.map(({ value }) => (
                    <DropdownMenu.Item key={value}>{value}</DropdownMenu.Item>
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
