'use client';

import { PaginateData, useQuery } from 'fqlx-client';
import moment from 'moment';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Badge, Button, Card, Divider, Text, View } from 'reshaped';
import { PatientFile, Query } from '../../fqlx-generated/typedefs';
import PlusIcon from '../Icons/Plus';
import Loader from '../Loader';
import NoPatientOrder from '../NoPatientOrder';

const mapStatus: { [key: string]: 'positive' | 'critical' | undefined } = {
  'Waiting for Lab': 'critical',
  Shipping: 'positive',
  'Arriving Today': 'positive',
  default: undefined,
};

interface PatientListProps {
  activateNewOrderModal(): void;
}

export default function PatientList({
  activateNewOrderModal,
}: PatientListProps) {
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

  const patientFilesData = query.PatientFile.all().order('desc(.ts)').exec();

  useEffect(() => {
    setPatientFiles(patientFilesData);
  }, [patientFilesData.data]);

  return (
    <>
      <View
        direction='column'
        height='100%'
        maxWidth='800px'
        width='100%'
        gap={8}
      >
        <View direction='row' align='center' className='!justify-between '>
          <Text variant='featured-2' weight='medium'>
            Orders
          </Text>

          <Button
            icon={<PlusIcon />}
            color='primary'
            size='medium'
            onClick={activateNewOrderModal}
          >
            Create Order
          </Button>
        </View>

        {!!patientFiles?.data.length && (
          <View
            direction='column'
            align='stretch'
            height='100%'
            borderRadius='medium'
            className='bg-page'
          >
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
                <View key={patientFile.id} className='!rounded-medium !bg-page'>
                  <Card
                    href={`/${patientFile.id}/treatments`}
                    padding={4}
                    className='w-[100%] !p-[24px] !border-0'
                  >
                    <View
                      direction='row'
                      align='center'
                      className='!justify-between'
                    >
                      <View gap={1}>
                        <Text variant='body-2' color='neutral' weight='medium'>
                          {patientFile.patient?.name}
                        </Text>
                        <View>
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
                              {patientFile.patient?.status || 'Draft'}
                            </Text>
                          </Badge>
                        </View>
                      </View>

                      <View>
                        <Text
                          variant='body-3'
                          color='neutral-faded'
                          weight='regular'
                        >
                          {moment(patientFile?.ts?.isoString).format(
                            'MMM DD, YYYY'
                          )}
                        </Text>
                      </View>
                    </View>
                  </Card>

                  {index < patientFiles?.data?.length - 1 && <Divider />}
                </View>
              ))}
            </InfiniteScroll>
          </View>
        )}
      </View>

      {!patientFiles?.data.length && (
        <NoPatientOrder activateNewOrderModal={activateNewOrderModal} />
      )}
    </>
  );
}
