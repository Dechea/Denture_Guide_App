import { Select, Tabs, Text, View } from 'reshaped';

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
    <View direction="row" width="100%" gap={10}>
      {filters.map((field) => (
        <>
          {field.type === 'tabs' && (
            <View.Item columns={12} key={field.id}>
              <Tabs variant="pills-elevated" itemWidth="equal">
                <Tabs.List>
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
              <Text variant="caption-1" weight="regular">
                {field.name}
              </Text>
              <Select
                variant="headless"
                name="material"
                options={field.options.map(({ name, value }) => {
                  return { label: name, value: value };
                })}
              />
            </View.Item>
          )}
        </>
      ))}
    </View>
  );
}
