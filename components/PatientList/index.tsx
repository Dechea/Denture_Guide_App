'use client';

import { Avatar, Badge, Text, View, Card, Divider } from 'reshaped';
import { useQuery } from 'fqlx-client';
import moment from 'moment';
import { Query } from '../../fqlx-generated/typedefs';

const mapStatus: { [key: string]: 'positive' | 'critical' | undefined } = {
  'Waiting for Lab': 'critical',
  Shipping: 'positive',
  'Arriving Today': 'positive',
  default: undefined,
};

export default function PatientList() {
  const query = useQuery<Query>();

  const patientFiles = query.PatientFile.all().exec().data;

  return (
    <View direction='column' padding={10} height={'100%'}>
      {
        <View.Item>
          <View direction='row' align='center' justify='start'>
            <View.Item columns={4}>
              <Text variant='body-3' color='neutral-faded' weight='medium'>
                Patient
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
          {patientFiles.map((patientFile, index) => (
            <View key={patientFile.id}>
              <Card
                href={`/${patientFile.id}/treatments`}
                padding={4}
                className='w-[100%] !px-0 !border-0'
              >
                <View direction='row' align='center' justify='start'>
                  <View.Item columns={4}>
                    <View direction='row' gap={4} align='center'>
                      <Avatar
                        src={patientFile.patient.avatar || '/defaultAvatar.svg'}
                        size={9}
                      />

                      <Text variant='body-2' color='neutral' weight='medium'>
                        {patientFile.patient.name}
                      </Text>
                    </View>
                  </View.Item>

                  <View.Item columns={4}>
                    <View direction='row' align='center' width='100%'>
                      <View.Item grow>
                        <Badge
                          color={
                            mapStatus[patientFile.patient?.status || 'default']
                          }
                        >
                          <Text
                            variant='caption-1'
                            color='neutral'
                            weight='medium'
                          >
                            {patientFile.patient?.status ||
                              'Status will be here'}
                          </Text>
                        </Badge>
                      </View.Item>
                    </View>
                  </View.Item>

                  <View.Item columns={4}>
                    <Text variant='body-3' color='neutral' weight='regular'>
                      {moment(patientFile.ts.isoString).format('MMM DD, YYYY')}
                    </Text>
                  </View.Item>
                </View>
              </Card>

              {index < patientFiles.length - 1 && <Divider />}
            </View>
          ))}
        </View>
      </View.Item>
    </View>
  );
}
