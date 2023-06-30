'use client';

import { useQuery } from 'fqlx-client';
import { useEffect, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Text, View } from 'reshaped';
import { Product, Query } from '../../fqlx-generated/typedefs';
import Loader from '../Loader';
import { ProductCard } from '../ProductCard';
import ShareButton from '../ShareButton';
import { useProductStore } from '../../zustand/product';
import ProductHelpFooter from '../ProductHelpFooter';
import ProductNotFound from '../ProductNotFound';
import { formWhereCondition } from './helper';
import { PRODUCT_TYPE } from '../../zustand/product/interface';
import { convertCamelCaseToTitleCase } from '../../utils/helper';

interface ProductListProps {
  productType: PRODUCT_TYPE;
}

const ProductList = ({ productType }: ProductListProps) => {
  const {
    products,
    setProducts,
    searchedProductManufacturerId,
    productFilters,
  } = useProductStore();

  const query = useQuery<Query>();

  const productQuery = useMemo(
    () =>
      query.Product.all().where(
        formWhereCondition(
          searchedProductManufacturerId,
          productFilters,
          productType
        )
      ),
    [searchedProductManufacturerId, productFilters]
  );

  const fqlxProducts = useMemo(
    () => productQuery.exec(),

    [productQuery]
  );

  const productsCount = useMemo(
    () => productQuery.count().exec(),
    [productQuery]
  );

  const fetchMoreProducts = async () => {
    const paginated = await query.Set.paginate<Product>(
      `${products?.after}`
    ).exec();

    setProducts({
      data: [...products.data, ...paginated.data],
      after: paginated?.after,
      before: paginated?.before,
    });
  };

  useEffect(() => {
    setProducts(fqlxProducts);
  }, [fqlxProducts.data]);

  // Reset products in state on component unmount
  useEffect(() => {
    return () => {
      setProducts({ data: [] });
    };
  }, []);

  return (
    <>
      <View direction='row' align='center' paddingBottom={6}>
        <View.Item grow>
          <View direction='row' gap={2} align='end'>
            <Text variant='featured-3' weight='bold'>
              {convertCamelCaseToTitleCase(productType)}
            </Text>

            <View direction='row' align='center' paddingBottom={0.5}>
              <Text
                variant='body-3'
                weight='regular'
                color='neutral-faded'
                align='end'
              >
                {productsCount}
              </Text>
            </View>
          </View>
        </View.Item>

        <ShareButton />
      </View>

      {!!products?.data?.length ? (
        <InfiniteScroll
          dataLength={products.data.length}
          next={fetchMoreProducts}
          scrollThreshold={'100px'}
          scrollableTarget={'scrollableProductList'}
          hasMore={!!products?.after}
          loader={
            <View paddingBlock={10}>
              <Loader />
            </View>
          }
          endMessage={<ProductHelpFooter />}
        >
          <Card padding={0}>
            <View divided>
              {products.data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  productType={productType}
                />
              ))}
            </View>
          </Card>
        </InfiniteScroll>
      ) : (
        <>
          <ProductNotFound
            barcode={searchedProductManufacturerId}
            showFilterError={
              !Object.values(productFilters).every((x) => !x.length)
            }
          />
          <ProductHelpFooter />
        </>
      )}
    </>
  );
};

export default ProductList;
