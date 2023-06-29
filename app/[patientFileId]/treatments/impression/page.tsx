'use client';

import { Card, Tabs, Text, View } from 'reshaped';
import { ImpressionList } from '../../../../components/ImpressionList';
import { ImpressionForm } from '../../../../components/ImpressionForm';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import ShareButton from '../../../../components/ShareButton';
import { impressionProductList } from '../../../../__mocks__/impression';
import { impressionListProps } from '../../../../interfaces/impression';

export default function Impression({
  params,
}: {
  params: { patientFileId: string };
}) {
  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/impression`}>
      <CarouselTeeth />

      <View paddingBlock={0} paddingInline={8}>
        <View.Item>
          <View direction='row' align='center' paddingTop={6}>
            <View.Item grow>
              <Text variant='body-3' color='neutral-faded'>
                25 Results
              </Text>
            </View.Item>
            <ShareButton />
          </View>
        </View.Item>

        <View direction='row' paddingBlock={8} paddingInline={0} gap={23}>
          <View.Item columns={3}>
            <ImpressionForm />
          </View.Item>

          <View.Item columns={9}>
            <Card padding={0}>
              <View divided>
                {impressionProductList.map((data: impressionListProps) => (
                  <ImpressionList
                    key={data.id}
                    id={data.id}
                    heading={data.heading}
                    description={data.description}
                    image={data.image}
                    price={data.price}
                    options={data.options}
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
