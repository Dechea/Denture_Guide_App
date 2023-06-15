'use client';

import { Button, Card, Divider, Text, View } from 'reshaped';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import BackwardIcon from '../../components/Icons/Backward';
import PrintIcon from '../../components/Icons/Print';
import { cartItems } from '../../__mocks__/cart';

const CostEstimation = () => {
  const router = useRouter();

  return (
    <View>
      {/* TODO: Use PatientFileId from params */}
      <Header patientFileId='367517616975118544' />

      <View
        backgroundColor='neutral-faded'
        direction='row'
        padding={11}
        align='center'
        gap={4}
      >
        <Button
          onClick={() => router.back()}
          icon={<BackwardIcon />}
          variant='ghost'
          size='small'
        />

        <Text color='neutral-faded' variant='featured-1' weight='bold'>
          {' '}
          Cost Estimation
        </Text>
      </View>

      <View
        direction='row'
        width='100%'
        paddingTop={12}
        paddingStart={21}
        paddingEnd={15}
        paddingBottom={12}
        gap={16}
      >
        <View.Item columns={8}>
          <View direction='row' width='100%' paddingBottom={4}>
            <View.Item columns={2}>
              <Text color='neutral-faded' variant='caption-1'>
                Anzahl
              </Text>
            </View.Item>

            <View.Item columns={8}>
              <Text color='neutral-faded' variant='caption-1'>
                Leistung
              </Text>
            </View.Item>

            <View.Item columns={2}>
              <Text color='neutral-faded' variant='caption-1' align='end'>
                Betrag
              </Text>
            </View.Item>
          </View>
          <Divider />

          {cartItems.map((data, index) => (
            <View key={data.id}>
              <View
                direction='row'
                width='100%'
                paddingBlock={4}
                paddingInline={0}
              >
                <View.Item columns={2}>
                  <Text color='neutral-faded' variant='caption-1'>
                    {data.count}
                  </Text>
                </View.Item>

                <View.Item columns={4}>
                  <Text color='neutral-faded' variant='caption-1'>
                    {data.title}
                  </Text>
                </View.Item>

                <View.Item columns={4}>
                  {data.description && (
                    <Text color='neutral-faded' variant='caption-1'>
                      {data.description}
                    </Text>
                  )}
                </View.Item>

                <View.Item columns={2}>
                  <Text color='neutral-faded' variant='caption-1' align='end'>
                    {data.price}
                  </Text>
                </View.Item>
              </View>
              {index < cartItems.length - 1 && <Divider />}
            </View>
          ))}
        </View.Item>

        <View.Item columns={4}>
          <Card padding={0}>
            <View padding={6} gap={9}>
              <View direction='row' width='100%'>
                <View.Item grow>
                  <Text color='neutral-faded' variant='body-2' weight='medium'>
                    Cost Estimation
                  </Text>
                </View.Item>

                <Text color='neutral-faded' variant='body-2' weight='medium'>
                  330.00 €
                </Text>
              </View>
              <View width='100%' align='stretch'>
                <Button variant='outline' icon={<PrintIcon />}>
                  Print
                </Button>
              </View>
            </View>
          </Card>
        </View.Item>
      </View>
    </View>
  );
};

export default CostEstimation;
