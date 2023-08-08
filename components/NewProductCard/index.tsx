'use client';

import { useQuery } from 'fqlx-client';
import { useEffect, useMemo } from 'react';
import { Text, TextField, View } from 'reshaped';
import { Query } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import { formWhereCondition } from './helper';
import { AREA_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import BarCodeIcon from '../Icons/Barcode';

interface ProductListProps {
  productType: PRODUCT_TYPE;
  areaType: AREA_TYPE;
  patientFileId: string;
}

const NewProductCard = ({ productType }: ProductListProps) => {
  const {
    setProducts,
    searchedProductManufacturerId,
    productFilters,
    activeProductTab,
    availableTeethByProductType,
    implicitFilters,
  } = useProductStore();
  const { patientFile, getToothGroups } = useTreatmentsByGroup();

  const query = useQuery<Query>();

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
      <View direction="row" align="center" paddingBottom={6} maxWidth="1280px">
        <View.Item grow>
          <View direction="row" gap={2} align="end">
            <Text variant="featured-3" weight="bold">
              {convertCamelCaseToTitleCase(productType)}
            </Text>

            <View direction="row" align="center" paddingBottom={0.5}>
              <Text
                variant="body-3"
                weight="regular"
                color="neutral-faded"
                align="end"
              >
                {productsCount}
              </Text>
            </View>
          </View>
        </View.Item>

        <View.Item columns={4}>
          <TextField
            icon={BarCodeIcon}
            name="email"
            size="medium"
            placeholder="Search by code e.g K1043.XXXX "
          />
        </View.Item>
      </View>

      <View width={'100%'} height={'440px'} borderColor="primary"></View>
    </>
  );
};

export default NewProductCard;
