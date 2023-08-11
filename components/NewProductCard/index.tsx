'use client';

import { useQuery } from 'fqlx-client';
import { useEffect, useMemo, useState } from 'react';
import { Badge, Card, Icon, Image, Text, TextField, View } from 'reshaped';
import { Query, Tooth } from '../../fqlx-generated/typedefs';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { SelectedProducts, useProductStore } from '../../zustand/product';
import { AREA_TYPE, PRODUCT_TYPE } from '../../zustand/product/interface';
import DynamicForm from '../DynamicForm';
import BarCodeIcon from '../Icons/Barcode';
import SelectedToothList from '../SelectedToothList';
import { formBaseCondition, formWhereCondition } from './helper';
import { useProductCrudOps } from '../../hooks/useProductCrudOps';

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
  defaultProduct: { [key: string]: string };
}

const NewProductCard = ({
  productType,
  productOptions,
  areaType,
  patientFileId,
}: ProductListProps) => {
  const {
    searchedProductManufacturerId,
    activeProductTab,
    availableTeethByProductType,
    implicitFilters,
    activeTreatmentGroup,
    setActiveTreatmentGroup,
  } = useProductStore();
  const { patientFile, toothGroups, getToothGroups } = useTreatmentsByGroup();
  const { addOrUpdateProductInFqlx } = useProductCrudOps({ patientFileId });
  const [productState, setProductState] = useState({});
  const [lastOptionClicked, setLastOptionClicked] = useState<string>('');

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
    [searchedProductManufacturerId, implicitFilters, productState]
  );

  const defaultProductQuery = useMemo(
    () =>
      query.Product.all().firstWhere(
        formWhereCondition(implicitFilters, productType, {
          [lastOptionClicked]:
            productState[lastOptionClicked as keyof typeof productState],
        })
      ),
    [lastOptionClicked]
  );

  const baseQuery = useMemo(() => {
    return query.Product.all().where(
      formBaseCondition(implicitFilters, productType)
    );
  }, [implicitFilters, productType]);

  const fqlxProducts = useMemo(() => productQuery.exec(), [productQuery]);

  const productsCount = useMemo(
    () => productQuery.count().exec(),
    [productQuery]
  );

  const formatFqlxOption = (category: string, value: string) => {
    if (category === 'workflows') {
      value = value[0];
    }
    return typeof value === 'string' ? `"${value}"` : `${value}`;
  };

  useMemo(() => {
    if (fqlxProducts.data.length == 0) {
      const localProduct = defaultProductQuery.exec();
      const defaultProduct: { [key: string]: string } = {};
      Object.keys(productState).forEach(
        (key) =>
          (defaultProduct[key] = formatFqlxOption(
            key,
            // @ts-ignore
            localProduct?.abutment?.[key]
          ))
      );

      setProductState(defaultProduct);
    }
  }, [defaultProductQuery]);

  const filterOptions = useMemo(() => {
    const localOptions: {
      id: string;
      name: string;
      type: string;
      options: string[];
    }[] = [];
    productOptions.forEach(({ name }) => {
      let options = baseQuery
        .map(`(product) => product.${productType}.${name}`)
        .distinct<string>()
        .exec().data;
      options = options.map((option) => formatFqlxOption(name, option));
      localOptions.push({
        ...(productOptions.find(
          (productOption) => productOption.name === name
        ) ?? {
          id: '',
          name: '',
          type: '',
        }),
        options,
      });
    });
    return localOptions;
  }, [baseQuery, productState]);

  useEffect(() => {
    getToothGroups();
  }, [patientFile, activeProductTab, availableTeethByProductType]);

  const handleOptionClick = (category: string, value: string) => {
    setProductState((prevDefault) => ({
      ...prevDefault,
      [category]: value,
    }));

    setLastOptionClicked(category);
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

        <View.Item columns={4}>
          <TextField
            icon={BarCodeIcon}
            name="email"
            size="medium"
            placeholder="Search by code e.g K1043.XXXX "
          />
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
              <View padding={6} paddingBottom={10}>
                <View direction="row" gap={6}>
                  <Image
                    width={{ s: '120px', l: '140px' }}
                    height={{ s: '120px', l: '140px' }}
                    src={'/AbutmentImage.svg'}
                    alt={'abutment'}
                    borderRadius="medium"
                  />
                  <View gap={2}>
                    <Text variant="featured-3" weight="medium">
                      {fqlxProducts?.data?.[0]?.localizations?.[1].name}
                    </Text>
                    <View direction="row" gap={4}>
                      <Text>
                        {
                          fqlxProducts?.data?.[0]?.localizations?.[1].price
                            .amount
                        }{' '}
                        €
                      </Text>
                      <View direction="row" gap={1}>
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
                          {fqlxProducts?.data?.[0]?.manufacturerProductId}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View.Item grow>
                  <View
                    gap={16}
                    paddingStart={{ l: 41 }}
                    paddingTop={{ s: 8, l: 0 }}
                  >
                    <DynamicForm
                      filters={filterOptions}
                      state={productState}
                      updateState={handleOptionClick}
                    />
                  </View>
                </View.Item>
              </View>
            </View.Item>
            <View.Item columns={{ s: 12, m: 4 }}>
              <View height="100%" backgroundColor="page-faded">
                <SelectedToothList
                  productId={fqlxProducts?.data?.[0]?.manufacturerProductId}
                  onClickProduct={handleClickOnProduct}
                />
              </View>
            </View.Item>
          </View>
        </Card>
      </View>
    </>
  );
};

export default NewProductCard;
