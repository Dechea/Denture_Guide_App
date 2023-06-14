'use client';

import { Avatar, Badge, Text, View, Card, Divider } from 'reshaped';
import { PatientListProps } from '../../interfaces/patients';
import { useRouter } from 'next/navigation';

const mapStatus: { [key: string]: 'positive' | 'critical' } = {
  'Waiting for Lab': 'critical',
  Shipping: 'positive',
  'Arriving Today': 'positive',
};

export default function PatientList({
  patientOrders,
}: {
  patientOrders: PatientListProps[];
}) {
  const router = useRouter();

  return (
    <View direction='column' padding={10} height={'100%'}>
      {
        <View.Item>
          <View direction='row' align='center' justify='start'>
            <View.Item columns={4}>
              <Text variant='body-3' color='neutral-faded' weight='medium'>
                Patient order
              </Text>
            </View.Item>
            <View.Item columns={4}>
              <Text variant='body-3' color='neutral-faded' weight='medium'>
                Status
              </Text>
            </View.Item>

            <View.Item columns={4}>
              <Text variant='body-3' color='neutral-faded' weight='medium'>
                Date
              </Text>
            </View.Item>
          </View>
        </View.Item>
      }
      <View.Item gapBefore={3}>
        <Divider />
      </View.Item>
      <View.Item>
        <View direction='column' align={'stretch'} height={'100%'}>
          {patientOrders.map((patient, index) => (
            <View key={patient.id}>
              <Card
                onClick={() => {
                  // TODO: use dynamic PatientFile Id
                  router.push('/366051179773296849/treatments');
                }}
                padding={4}
                attributes={{
                  style: { border: 'none', paddingLeft: 0, paddingRight: 0 },
                }}
              >
                <View direction='row' align='center' justify='start'>
                  <View.Item columns={4}>
                    <View direction='row' gap={4} align='center'>
                      <Avatar src={patient.avatar} size={6} />

                      <Text variant='body-2' color='neutral' weight='medium'>
                        {patient.name}
                      </Text>
                    </View>
                  </View.Item>

                  <View.Item columns={4}>
                    <View direction='row' align='center' width='100%'>
                      <View.Item grow>
                        <Badge
                          color={mapStatus[patient.status]}
                          variant='faded'
                        > 
                        <Text variant='caption-1' color='neutral' weight='medium'>
                          {patient.status}
                        </Text>
                        </Badge>
                      </View.Item>
                    </View>
                  </View.Item>

                  <View.Item columns={4}>
                    <Text variant='body-3' color='neutral' weight='regular'>
                      {patient.date}
                    </Text>
                  </View.Item>
                </View>
              </Card>

              {index < patientOrders.length - 1 && <Divider />}
            </View>
          ))}
        </View>
      </View.Item>
    </View>
  );
}
