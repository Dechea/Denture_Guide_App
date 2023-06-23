'use client';

import { useQuery } from 'fqlx-client';
import { Product, Query } from '../../fqlx-generated/typedefs';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Text, View } from 'reshaped';
import Loader from '../Loader';
import HelpFooter from '../../app/[patientFileId]/treatments/implant/HelpFooter';
import { ImplantProduct } from '../ImplantProduct';
import NoImplantFound from '../../app/[patientFileId]/treatments/implant/NoImplantFound';
import ShareButton from '../ShareButton';
import { useProductStore } from '../../zustand/product';

const formConditionForFilterKeys = (keys: string[]) => {
  const condition = keys
    .map((key) => {
      const splitedKey = key.split('$');
      const category = splitedKey[0];
      const field = splitedKey[1];

      return `product.implant.${category} == ${field}`;
    })
    .join(' || ');

  return condition;
};

const formWhereCondition = (
  searchedImplantManufacturerId: string,
  implantFilters: string[]
) => {
  const defaultCondition = '(product) => product.implant != null';
  const hasFilterKeys = Boolean(implantFilters.length);
  const hasManufacturerId = Boolean(searchedImplantManufacturerId);

  switch (true) {
    case hasManufacturerId && hasFilterKeys:
      return `(product) => ( product.implant != null && product.manufacturerProductId?.includes("${searchedImplantManufacturerId}") ) && ( ${formConditionForFilterKeys(
        implantFilters
      )} )`;

    case hasFilterKeys:
      return `(product) => product.implant != null  && ( ${formConditionForFilterKeys(
        implantFilters
      )} )`;

    case hasManufacturerId:
      return `${defaultCondition} && product.manufacturerProductId?.includes("${searchedImplantManufacturerId}")`;

    default:
      return defaultCondition;
  }
};

const ImplantList = ({}) => {
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
                {typeof implantCount === 'object' ? 0 : implantCount}
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
                <ImplantProduct
                  key={implant.id}
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
          <NoImplantFound barcode={searchedImplantManufacturerId} />
          <HelpFooter />
        </>
      )}
    </>
  );
};

export default ImplantList;
