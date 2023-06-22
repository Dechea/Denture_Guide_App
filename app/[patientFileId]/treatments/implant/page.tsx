'use client';

import { useEffect, useState } from 'react';
import { Card, Icon, Tabs, Text, TextField, View } from 'reshaped';
import { useRouter } from 'next/navigation';
import { ImplantList } from '../../../../components/ImplantList';
import { ImplantForm } from '../../../../components/ImplantForm';
import SelectTeeth from '../../../../components/SelectedTeeth';
import FilterIcon from '../../../../components/Icons/Filter';
import NoImplantFound from './NoImplantFound';
import HelpFooter from './HelpFooter';
import BarCodeIcon from '../../../../components/Icons/Barcode';
import { PaginateData, useQuery } from 'fqlx-client';
import { Product, Query } from '../../../../fqlx-generated/typedefs';
import ShareButton from '../../../../components/ShareButton';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../../../components/Loader';

export default function Implant({
  params,
}: {
  params: { patientFileId: string };
}) {
  const [selectedImplants, _setImplants] = useState<{
    [key: string]: boolean;
  }>({});
  const [implants, setImplants] = useState<PaginateData<Product>>();
  const selectedTeeth = [14, 22];

  const router = useRouter();
  const query = useQuery<Query>();

  const implantProducts = query.Product.all()
    .where((product) => product.implant != null)
    .exec();

  const fetchMoreImplants = async () => {
    const paginated = await query.Set.paginate(`"${implants?.after}"`).exec();

    setImplants({
      after: paginated?.after,
      data: [...(implants?.data || []), ...paginated.data],
      before: paginated?.before,
    });
  };

  useEffect(() => {
    setImplants(implantProducts);
  }, [implantProducts.data]);

  const implantCount = query.Product.all()
    .where((product) => product.implant != null)
    .count()
    .exec();

  useEffect(() => {
    if (Object.keys(selectedImplants).length === selectedTeeth.length) {
      router.push(`/${params.patientFileId}/treatments/abutment`);
    }
  }, [selectedImplants, selectedTeeth.length]);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/implant`}>
      <SelectTeeth />

      <View paddingInline={16} paddingTop={18}>
        <View direction='row' gap={11}>
          <View.Item columns={3}>
            <View gap={5.5}>
              <View direction='row' align='center' paddingBlock={2.5} gap={1}>
                <Icon svg={FilterIcon} size={4} color='neutral-faded' />
                <Text variant='body-3' color='neutral-faded'>
                  Filters
                </Text>
              </View>

              <TextField
                size='large'
                variant='faded'
                name='email'
                placeholder='Search by code e.g K1043.XXXX '
                startSlot={
                  <Icon svg={BarCodeIcon} color='neutral-faded' size={5} />
                }
              />

              <ImplantForm />
            </View>
          </View.Item>

          <View.Item columns={9}>
            <View direction='row' align='center' paddingBottom={6}>
              <View.Item grow>
                <View direction='row' gap={2} align='end'>
                  <Text variant='featured-3' weight='bold'>
                    Implants
                  </Text>

                  <View direction='row' align='center' paddingBottom={0.5}>
                    <Text
                      variant='body-3'
                      weight='regular'
                      color='neutral-faded'
                      align='end'
                    >
                      {/* @ts-expect-error */}
                      {implantCount}
                    </Text>
                  </View>
                </View>
              </View.Item>
              <ShareButton />
            </View>

            {!!implants?.data?.length ? (
              <InfiniteScroll
                dataLength={implants.data.length}
                next={fetchMoreImplants}
                scrollThreshold={'100px'}
                hasMore={!!implants?.after}
                loader={
                  <View paddingBlock={10}>
                    <Loader />
                  </View>
                }
                endMessage={<HelpFooter />}
              >
                <Card padding={0}>
                  <View divided>
                    {implants.data.map((implant) => (
                      <ImplantList
                        key={implant.id}
                        id={implant.id}
                        implant={implant}
                        options={[
                          {
                            id: 0,
                            selectedTeeth: 14,
                            localStorageCount: 0,
                          },
                          { id: 1, selectedTeeth: 43, localStorageCount: 2 },
                        ]}
                      />
                    ))}
                  </View>
                </Card>
              </InfiniteScroll>
            ) : (
              <>
                <NoImplantFound barcode={'P2211.4012'} />
                <HelpFooter />
              </>
            )}
          </View.Item>
        </View>
      </View>
    </Tabs.Panel>
  );
}
