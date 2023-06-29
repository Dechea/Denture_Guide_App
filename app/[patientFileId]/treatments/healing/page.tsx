import { Tabs, View, Text, Card } from 'reshaped';
import HealingList from '../../../../components/HealingList';
import HealingForm from '../../../../components/HealingForm';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import { healingProductList } from '../../../../__mocks__/healing';
import { healingProductListProps } from '../../../../interfaces/healing';
import ShareButton from '../../../../components/ShareButton';

export default function Healing({
  params,
}: {
  params: { patientFileId: string };
}) {
  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/healing`}>
      <CarouselTeeth />

      <View paddingBlock={0} paddingInline={8}>
        <View.Item>
          <View direction='row' align='center' paddingTop={6}>
            <View.Item grow>
              <Text variant='body-3' color='neutral-faded'>
                3 Results
              </Text>
            </View.Item>
            <ShareButton />
          </View>
        </View.Item>

        <View direction='row' paddingBlock={8} paddingInline={0} gap={23}>
          <View.Item columns={3}>
            <HealingForm />
          </View.Item>
          <View.Item columns={9}>
            <Card padding={0}>
              <View divided>
                {healingProductList.map((data) => (
                  <HealingList
                    key={data.id}
                    id={data.id}
                    heading={data.heading}
                    description={data.description}
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
