'use client';

import { Avatar, Badge, Text, View, Card, Divider } from 'reshaped';
import { PaginateData, useQuery } from 'fqlx-client';
import moment from 'moment';
import { PatientFile, Query } from '../../fqlx-generated/typedefs';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader';

const mapStatus: { [key: string]: 'positive' | 'critical' | undefined } = {
  'Waiting for Lab': 'critical',
  Shipping: 'positive',
  'Arriving Today': 'positive',
  default: undefined,
};

export default function PatientList() {
  const [patientFiles, setPatientFiles] = useState<PaginateData<PatientFile>>();
  const query = useQuery<Query>();

  const fetchMorePatients = async () => {
    const paginated = await query.Set.paginate(`${patientFiles?.after}`).exec();

    setPatientFiles({
      after: paginated?.after,
      data: [...(patientFiles?.data || []), ...paginated.data] as PatientFile[],
      before: paginated?.before,
    });
  };

  const patientFilesData = query.PatientFile.all().exec();

  useEffect(() => {
    setPatientFiles(patientFilesData);
  }, [patientFilesData.data]);

  return (
    <View direction='column' padding={10} height={'100%'}>
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
      <View.Item gapBefore={3}>
        <Divider />
      </View.Item>
      <View.Item>
        <View direction='column' align={'stretch'} height={'100%'}>
          <InfiniteScroll
            dataLength={patientFiles?.data?.length || 0}
            next={fetchMorePatients}
            scrollThreshold={'100px'}
            hasMore={!!patientFiles?.after}
            loader={
              <View paddingBlock={10}>
                <Loader />
              </View>
            }
          >
            {patientFiles?.data?.map((patientFile, index) => (
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
                          src={
                            patientFile.patient?.avatar || '/defaultAvatar.svg'
                          }
                          size={9}
                        />

                        <Text variant='body-2' color='neutral' weight='medium'>
                          {patientFile.patient?.name}
                        </Text>
                      </View>
                    </View.Item>

                    <View.Item columns={4}>
                      <View direction='row' align='center' width='100%'>
                        <View.Item grow>
                          <Badge
                            color={
                              mapStatus[
                                patientFile.patient?.status || 'default'
                              ]
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
                        {moment(patientFile.ts.isoString).format(
                          'MMM DD, YYYY'
                        )}
                      </Text>
                    </View.Item>
                  </View>
                </Card>

                {index < patientFiles?.data?.length - 1 && <Divider />}
              </View>
            ))}
          </InfiniteScroll>
        </View>
      </View.Item>
    </View>
  );
}
