'use client';

import { useQuery } from 'fqlx-client';
import { useEffect, useMemo } from 'react';
import { Card, Icon, Image, Text, TextField, View } from 'reshaped';
import { Query } from '../../fqlx-generated/typedefs';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { useProductStore } from '../../zustand/product';
import { AREA_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';
import DynamicForm from '../DynamicForm';
import BarCodeIcon from '../Icons/Barcode';
import SelectedToothList from '../SelectedToothList';
import { formWhereCondition } from './helper';

interface FormOption {
  id: string;
  name: string;
  type: string;
  options: { name: string; value: string }[];
}
interface ProductListProps {
  productType: PRODUCT_TYPE;
  productOptions: FormOption[];
  areaType: AREA_TYPE;
  patientFileId: string;
}

const NewProductCard = ({ productType, productOptions }: ProductListProps) => {
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

      <View width={'100%'} align="center">
        <Card className="w-full !p-0">
          <View direction={{ m: 'column', l: 'row' }} align="stretch" gap={10}>
            <View.Item columns={{ m: 12, l: 8 }}>
              <View padding={6} paddingBottom={10}>
                <View direction="row" gap={6}>
                  <Image
                    width="140px"
                    height="140px"
                    src={'/AbutmentImage.svg'}
                    alt={'abutment'}
                    borderRadius="medium"
                  />

                  <View gap={2}>
                    <Text variant="featured-3" weight="medium">
                      Camlog
                    </Text>
                    <View direction="row" gap={4}>
                      <Text>55</Text>
                      <View direction="row">
                        <Icon
                          svg={BarCodeIcon}
                          size={5}
                          color="neutral-faded"
                        />
                        <Text
                          color="neutral-faded"
                          variant="body-3"
                          weight="regular"
                        >
                          K1043.3011
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* content */}
                <View.Item grow>
                  <View
                    gap={16}
                    paddingStart={{ l: 41 }}
                    paddingTop={{ s: 8, l: 0 }}
                  >
                    <DynamicForm filters={productOptions} />
                  </View>
                </View.Item>
              </View>
            </View.Item>

            {/* Selected Teeth */}
            <View.Item columns={{ m: 12, l: 4 }}>
              <View height="100%" backgroundColor="page-faded">
                <SelectedToothList />
              </View>
            </View.Item>
          </View>
        </Card>
      </View>
    </>
  );
};

export default NewProductCard;
