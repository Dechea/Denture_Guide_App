'use client';

import { useQuery } from 'fqlx-client';
import { Suspense, useEffect, useMemo } from 'react';
import { Badge, Card, Text, View } from 'reshaped';
import { Query, Tooth } from '../../fqlx-generated/typedefs';
import { useProductCrudOps } from '../../hooks/useProductCrudOps';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { SelectedProducts, useProductStore } from '../../zustand/product';
import { AREA_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';
import { formWhereCondition } from './helper';
import NewProductToothList from '../NewProductToothList';
import NewProductCard from '../NewProductCard';
import Loader from '../Loader';

interface Field {
  id: string;
  name: string;
  type: string;
}
interface NewProductViewProps {
  productType: PRODUCT_TYPE;
  productFields: Field[];
  areaType: AREA_TYPE;
  patientFileId: string;
}

const NewProductView = ({
  productType,
  productFields,
  areaType,
  patientFileId,
}: NewProductViewProps) => {
  const {
    activeProductTab,
    availableTeethByProductType,
    implicitFilters,
    activeTreatmentGroup,
    productState,
    setActiveTreatmentGroup,
    setProductState,
  } = useProductStore();
  const { patientFile, toothGroups, getToothGroups } = useTreatmentsByGroup();
  const { addOrUpdateProductInFqlx } = useProductCrudOps({ patientFileId });

  const query = useQuery<Query>();

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

  const productQuery = useMemo(
    () =>
      query.Product.all().where(
        formWhereCondition(implicitFilters, productType, productState)
      ),
    [implicitFilters, productState]
  );

  const productsCount = useMemo(
    () => productQuery.count().exec(),
    [productQuery]
  );

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

  useEffect(() => {
    getToothGroups();
  }, [patientFile, activeProductTab, availableTeethByProductType]);

  useEffect(() => {
    setProductState({});
  }, []);

  return (
    <>
      <View direction="row" align="center" paddingBottom={4} maxWidth="1280px">
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
      </View>

      <View
        wrap={true}
        width={'100%'}
        direction={'row'}
        paddingBottom={10}
        gap={2}
      >
        {Object.entries(implicitFilters).map(([key, value]) => {
          return (
            <Badge key={key} variant="faded">
              {`${key}: ${value}`}
            </Badge>
          );
        })}
      </View>

      <View width={'100%'} align="center">
        <Card className="w-full !p-0 max-[640px]:!border-none">
          <View direction={{ s: 'column', m: 'row' }} align="stretch" gap={10}>
            <View.Item columns={{ s: 12, m: 8 }}>
              <Suspense
                fallback={
                  <View height="70vh">
                    <Loader />
                  </View>
                }
              >
                <NewProductCard
                  productType={productType}
                  productFields={productFields}
                />
              </Suspense>
            </View.Item>

            <NewProductToothList onClickProduct={handleClickOnProduct} />
          </View>
        </Card>
      </View>
    </>
  );
};

export default NewProductView;
