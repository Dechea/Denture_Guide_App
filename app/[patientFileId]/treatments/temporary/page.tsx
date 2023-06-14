'use client';

import { Card, Tabs, Text, View } from 'reshaped';
import { TemporaryList } from '../../../../components/TemporaryList';
import SelectTeeth from '../../../../components/SelectedTeeth';
import ShareButton from '../../../../components/ShareButton';
import { temporaryProductList } from '../../../../__mocks__/temporary';
import { temporaryProductListProps } from '../../../../interfaces/temporary';

export default function Temporary({
  params,
}: {
  params: { patientFileId: string };
}) {
  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/temporary`}>
      <SelectTeeth />

      <View paddingBlock={0} paddingInline={8}>
        <View.Item>
          <View direction='row' paddingTop={6} align='center'>
            <Text variant='body-3' color='neutral-faded'>
              25 Results
            </Text>

            <View.Item grow>
              <View direction='row' justify='end'>
                <ShareButton />
              </View>
            </View.Item>
          </View>
        </View.Item>
        <View
          direction='row'
          paddingBlock={8}
          paddingInline={0}
          align='center'
          gap={23}
        >
          <View.Item columns={3} />

          <View.Item columns={9}>
            <Card padding={0}>
              <View divided>
                {temporaryProductList.map((data) => (
                  <TemporaryList
                    key={data.id}
                    id={data.id}
                    heading={data.heading}
                    price={data.price}
                    image={data.image}
                    options={data.options}
                    patientFileId={params.patientFileId}
                  />
                ))}
              </View>
            </Card>
          </View.Item>
        </View>
      </View>
    </Tabs.Panel>
  );
}
