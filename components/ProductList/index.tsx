'use client';

import { useQuery } from 'fauna-typed';
import { useEffect, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Badge, Card, Text, View } from 'reshaped';
import { Product, Query, Tooth } from '../../fqlx-generated/typedefs';
import Loader from '../Loader';
import { ProductCard } from '../ProductCard';
import ShareButton from '../ShareButton';
import { SelectedProducts, useProductStore } from '../../zustand/product';
import ProductHelpFooter from '../ProductHelpFooter';
import ProductNotFound from '../ProductNotFound';
import { formWhereCondition } from './helper';
import { AREA_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { useProductCrudOps } from '../../hooks/useProductCrudOps';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';

interface ProductListProps {
  productType: PRODUCT_TYPE;
  areaType: AREA_TYPE;
  patientFileId: string;
}

const ProductList = ({
  productType,
  areaType,
  patientFileId,
}: ProductListProps) => {
  const {
    products,
    setProducts,
    searchedProductManufacturerId,
    productFilters,
    activeTreatmentGroup,
    activeProductTab,
    availableTeethByProductType,
    setActiveTreatmentGroup,
    implicitFilters,
  } = useProductStore();
  const { patientFile, toothGroups, getToothGroups } = useTreatmentsByGroup();

  const query = useQuery<Query>();
  const { addOrUpdateProductInFqlx } = useProductCrudOps({ patientFileId });

  const getMappedTeeth = (
    teeth: Tooth[],
    productToDelete: string,
    toothNumber: number,
    selectedProducts: SelectedProducts
  ) => {
    teeth.forEach((tooth: Tooth) => {
      const localToothNumber = Number(tooth.name);

      for (const area of Object.values(AREA_TYPE)) {
        const toothInArea =
          area === areaType && localToothNumber === toothNumber;

        // remove old, unselected product
        if (toothInArea) {
          tooth[area].treatmentDoc.selectedProducts = tooth[
            area
          ].treatmentDoc.selectedProducts?.filter(
            ({ selectedProduct }) => selectedProduct?.id !== productToDelete
          );
        }

        // convert existing products from object to ref
        if (tooth[area].treatmentDoc.selectedProducts?.length) {
          tooth[area].treatmentDoc.selectedProducts?.forEach((product) => {
            // @ts-expect-error
            product.selectedProduct = `Product.byId("${product.selectedProduct?.id}")`;
          });
        } else {
          tooth[area].treatmentDoc.selectedProducts = [];
        }

        // add new product
        if (toothInArea && selectedProducts[toothNumber]) {
          tooth[area].treatmentDoc.selectedProducts?.push({
            // @ts-expect-error
            selectedProduct: `Product.byId("${selectedProducts[toothNumber]}")`,
            quantity: 1,
          });
        }
      }
    });
  };

  const handleClickOnProduct = (
    productToDelete: string,
    toothNumber: number,
    selectedProducts: SelectedProducts
  ) => {
    addOrUpdateProductInFqlx((teeth) => {
      getMappedTeeth(teeth, productToDelete, toothNumber, selectedProducts);
    });

    const activeTreatmentGroupIndex = Number(activeTreatmentGroup);

    if (
      toothGroups[activeTreatmentGroupIndex].teeth.every(
        (tooth) => selectedProducts[`${tooth.toothNumber}`]
      ) &&
      activeTreatmentGroupIndex + 1 < toothGroups.length
    ) {
      setActiveTreatmentGroup(activeTreatmentGroupIndex + 1);
    }
  };

  const productQuery = useMemo(
    () =>
      query.Product.all().where(
        formWhereCondition(
          searchedProductManufacturerId,
          productFilters,
          implicitFilters,
          productType
        )
      ),
    [searchedProductManufacturerId, productFilters, implicitFilters]
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

  useEffect(() => {
    getToothGroups();
  }, [patientFile, activeProductTab, availableTeethByProductType]);

  // Reset products in state on component unmount
  useEffect(() => {
    return () => {
      setProducts({ data: [] });
    };
  }, []);

  return (
    <>
      <View direction='row' align='center' paddingBottom={3}>
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

      <View
        wrap={true}
        width={'100%'}
        direction={'row'}
        paddingBottom={5}
        gap={2}
      >
        {Object.entries(implicitFilters).map(([key, value]) => {
          return (
            <Badge key={key} variant='faded'>
              {`${key}: ${value}`}
            </Badge>
          );
        })}
      </View>

      {products?.data?.length ? (
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
                  onClickProduct={handleClickOnProduct}
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
