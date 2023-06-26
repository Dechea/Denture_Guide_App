'use client';

import { useQuery } from 'fqlx-client';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Text, View } from 'reshaped';
import { Product, Query } from '../../fqlx-generated/typedefs';
import Loader from '../Loader';
import { ImplantProduct } from '../ImplantProduct';
import ShareButton from '../ShareButton';
import { useProductStore } from '../../zustand/product';
import ProductHelpFooter from '../ProductHelpFooter';
import ProductNotFound from '../ProductNotFound';
import { formWhereCondition } from './helper';

const ImplantList = () => {
  const {
    implants,
    setImplants,
    searchedImplantManufacturerId,
    implantFilters,
  } = useProductStore();

  const query = useQuery<Query>();

  const implantQuery = query.Product.all().where(
    formWhereCondition(searchedImplantManufacturerId, implantFilters)
  );

  const implantProducts = implantQuery.exec();
  const implantCount = implantQuery.count().exec();

  const fetchMoreImplants = async () => {
    const paginated = await query.Set.paginate<Product>(
      `${implants?.after}`
    ).exec();

    setImplants({
      data: [...implants.data, ...paginated.data],
      after: paginated?.after,
      before: paginated?.before,
    });
  };

  useEffect(() => {
    setImplants(implantProducts);
  }, [implantProducts.data]);

  return (
    <>
      <View direction='row' align='center' paddingBottom={6} paddingEnd={16}>
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
                {typeof implantCount === 'object' ? 0 : implantCount}
              </Text>
            </View>
          </View>
        </View.Item>

        <ShareButton />
      </View>

      <View
        height='calc(100vh - 400px)'
        className='overflow-y-auto scrollbar-6 scrollbar-rounded-12 scrollbar-bg-neutral'
        attributes={{ id: 'scrollableImplantList' }}
        paddingEnd={16}
      >
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
            endMessage={<ProductHelpFooter />}
            scrollableTarget='scrollableImplantList'
          >
            <Card padding={0}>
              <View divided>
                {implants.data.map((implant) => (
                  <ImplantProduct key={implant.id} product={implant} />
                ))}
              </View>
            </Card>
          </InfiniteScroll>
        ) : (
          <>
            <ProductNotFound barcode={searchedImplantManufacturerId} />
            <ProductHelpFooter />
          </>
        )}
      </View>
    </>
  );
};

export default ImplantList;
