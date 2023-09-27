'use client';

import { useQuery } from 'fauna-typed';
import { Suspense, useEffect, useMemo } from 'react';
import {
  Badge,
  Button,
  Card,
  Hidden,
  Modal,
  Text,
  View,
  useToggle,
} from 'reshaped';
import { Query, Tooth } from '../../fqlx-generated/typedefs';
import { useProductCrudOps } from '../../hooks/useProductCrudOps';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { SelectedProducts, useProductStore } from '../../zustand/product';
import { AREA_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';
import { formWhereCondition } from './helper';
import NewProductToothList from '../NewProductToothList';
import NewProductCard from '../NewProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

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
    filterFields,
    setActiveTreatmentGroup,
    setProductFilters,
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

  const productsCount = useMemo(
    () =>
      query.Product.all()
        .where(formWhereCondition(implicitFilters, productType, filterFields))
        .count()
        .exec(),
    [implicitFilters, filterFields]
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
    setProductFilters({});
  }, []);

  const { activate, deactivate, active } = useToggle(false);

  return (
    <View width='100%' align='center' maxWidth={{ l: '1000px', xl: '1280px' }}>
      <View
        width='100%'
        direction='row'
        gap={2}
        align='end'
        paddingBottom={4}
        paddingStart={6}
      >
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

      <View
        wrap={true}
        width={'100%'}
        direction={'row'}
        paddingBottom={10}
        paddingStart={6}
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

      <View width='100%' align='center'>
        <Card className='w-full !p-0 !border-none des:!border-solid'>
          <View
            direction={{ s: 'column', m: 'row' }}
            align='stretch'
            gap={{ s: 6, l: 10 }}
            className='min-h-[200px]'
          >
            <View.Item columns={{ s: 12, l: 8 }}>
              <Suspense fallback={<ProductCardSkeleton />}>
                <NewProductCard
                  productType={productType}
                  productFields={productFields}
                />
              </Suspense>
            </View.Item>

            <Hidden hide={{ s: true, l: false }}>
              <View.Item columns={4} grow key='productToothList'>
                {!!productsCount && (
                  <NewProductToothList onClickProduct={handleClickOnProduct} />
                )}
              </View.Item>
            </Hidden>

            <Hidden hide={{ s: false, l: true }}>
              <View.Item columns={12} grow key='selectTeeth'>
                <View padding={6} paddingBottom={13.75}>
                  <Button
                    color='primary'
                    variant='solid'
                    size='large'
                    onClick={() => activate()}
                    fullWidth
                    className='!w-[100%]'
                  >
                    {`Select ${productType} for...`}
                  </Button>
                </View>
              </View.Item>
            </Hidden>
            <ToothListModal
              onClickProduct={handleClickOnProduct}
              active={active}
              deactivate={deactivate}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};

export default NewProductView;

const ToothListModal = ({
  onClickProduct,
  active,
  deactivate,
}: {
  onClickProduct: (
    productToDelete: string,
    toothNumber: number,
    selectedProducts: SelectedProducts
  ) => void;
  active: boolean;
  deactivate: () => void;
}) => {
  return (
    <Modal
      active={active}
      position='bottom'
      onClose={deactivate}
      className='!rounded-[0px] !shadow-[0px_-15px_25px_0px_rgba(0,0,0,0.07),0px_-5px_10px_0px_rgba(0,0,0,0.05)]'
      transparentOverlay
    >
      <View
        direction='row'
        align='center'
        paddingInline={6}
        paddingBottom={4}
        className='!justify-between'
      >
        <Button variant='ghost' onClick={() => deactivate()}>
          Cancel
        </Button>
        <Button variant='ghost' color='primary' onClick={() => deactivate()}>
          Done
        </Button>
      </View>
      <NewProductToothList onClickProduct={onClickProduct} />
    </Modal>
  );
};
