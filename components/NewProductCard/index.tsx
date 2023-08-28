'use client';

import { useQuery } from 'fqlx-client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Text, View } from 'reshaped';
import { Product, Query } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import { PRODUCT_TYPE } from '../../zustand/product/interface';
import AutoComplete from '../AutoComplete';
import Form from '../Form';
import BarCodeIcon from '../Icons/Barcode';
import {
  formBaseCondition,
  formWhereCondition,
} from '../NewProductView/helper';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import SearchProductDropdown from './SearchProductDropdown';

interface Field {
  id: string;
  name: string;
  type: string;
}
interface NewProductCardProps {
  productType: PRODUCT_TYPE;
  productFields: Field[];
}

interface FilterOption {
  id: string;
  name: string;
  type: string;
  options: { isAvailable: boolean; name: string; value: string }[];
}

const NewProductCard = ({
  productType,
  productFields,
}: NewProductCardProps) => {
  const {
    implicitFilters,
    filterFields,
    activeTreatmentGroup,
    selectedProducts,
    setFilterFields,
    activeProductId,
    setActiveProductId,
    searchedProductManufacturerId,
    setSearchedProductManufacturerId,
  } = useProductStore((state) => state);
  const [lastOptionClicked, setLastOptionClicked] = useState<{
    category: string;
    value: string;
    state: any;
  } | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);
  const { toothGroups, getToothGroups } = useTreatmentsByGroup();
  const [searchProductValue, setSearchProductValue] = useState<string>('');

  const query = useQuery<Query>();

  const formatFqlxOption = (category: string, value: any) => {
    if (category === 'workflows') {
      value = value[0];
    }
    return typeof value === 'string' ? `"${value}"` : `${value}`;
  };

  const formatProductState = (product: Product) => {
    const formattedProduct: { [key: string]: string } = {};

    productFields.forEach(({ name }) => {
      if (
        // @ts-ignore
        product?.[productType]?.[name] !== undefined
      ) {
        formattedProduct[name] = formatFqlxOption(
          name,
          // @ts-ignore
          product?.[productType]?.[name]
        );
      }
    });

    return formattedProduct;
  };

  const productQuery = useMemo(() => {
    return query.Product.all().where(
      formWhereCondition(implicitFilters, productType, filterFields)
    );
  }, [implicitFilters, filterFields]);

  const fqlxProducts = useMemo(() => {
    const fqlxProducts = productQuery.exec();
    return fqlxProducts;
  }, [productQuery]);

  useMemo(() => {
    // @ts-expect-error
    let localProduct: Product = {};
    let toUpdateProduct = false;

    if (fqlxProducts?.data?.length === 0) {
      const oldValue =
        lastOptionClicked !== null
          ? { [lastOptionClicked.category]: lastOptionClicked.value }
          : {};

      localProduct = query.Product.all()
        .firstWhere(formWhereCondition(implicitFilters, productType, oldValue))
        .exec();

      toUpdateProduct = true;
    } else if (Object.keys(filterFields).length === 0) {
      localProduct = fqlxProducts.data?.[0];
      toUpdateProduct = true;
    }

    if (toUpdateProduct && localProduct !== null) {
      const defaultProduct = formatProductState(localProduct);

      setFilterFields(defaultProduct);
      // @ts-ignore
      setActiveProductId(localProduct?.id);

      setSearchProductValue(() => localProduct?.manufacturerProductId);
      setSearchedProductManufacturerId(localProduct?.manufacturerProductId);
    } else if (
      fqlxProducts?.data?.length &&
      fqlxProducts?.data?.[0]?.id !== activeProductId
    ) {
      // @ts-ignore
      setActiveProductId(fqlxProducts?.data?.[0]?.id);

      setSearchedProductManufacturerId(
        fqlxProducts?.data?.[0]?.manufacturerProductId
      );
      setSearchProductValue(fqlxProducts?.data?.[0]?.manufacturerProductId);
    }
  }, [lastOptionClicked, fqlxProducts]);

  const fetchImplicitFilters = useCallback(async () => {
    const localOptions: FilterOption[] = [];

    const distinctOptionPromises: Promise<any>[] = [];

    productFields.forEach(({ name }) => {
      try {
        const fqlxOptions = query.Product.all()
          .where(formBaseCondition(implicitFilters, productType))
          .map(`(product) => product.${productType}.${name}`)
          .distinct<string>()
          .exec();

        distinctOptionPromises.push(fqlxOptions as unknown as Promise<any>);
      } catch (error) {
        if (error instanceof Promise) {
          distinctOptionPromises.push(error);
        }
      }
    });

    const promisifiedDistinctOptions = await Promise.all(
      distinctOptionPromises
    );
    const distinctOptions = promisifiedDistinctOptions?.map(
      (option) => option?.data
    );

    const productCountPromises: Promise<any>[][] = [];

    productFields.forEach(({ name }, index) => {
      const productFieldPromises: Promise<any>[] = [];

      distinctOptions[index].forEach((option: any) => {
        if (name === 'workflows') {
          option = option[0];
        }
        option = typeof option === 'string' ? `"${option}"` : `${option}`;
        const stateWithOption = { ...filterFields, [name]: option };

        try {
          const matching = query.Product.all()
            .where(
              formWhereCondition(implicitFilters, productType, stateWithOption)
            )
            .count()
            .exec();

          productFieldPromises.push(matching as unknown as Promise<any>);
        } catch (error) {
          if (error instanceof Promise) {
            productFieldPromises.push(error);
          }
        }
      });

      productCountPromises.push(productFieldPromises);
    });

    for (
      let productFieldIndex = 0;
      productFieldIndex < productFields.length;
      productFieldIndex++
    ) {
      const productField = productFields[productFieldIndex];
      const promisifiedOptions: {
        isAvailable: boolean;
        name: string;
        value: string;
      }[] = [];

      for (
        let distinctOptionIndex = 0;
        distinctOptionIndex < distinctOptions[productFieldIndex].length;
        distinctOptionIndex++
      ) {
        let distinctOption =
          distinctOptions[productFieldIndex][distinctOptionIndex];

        if (productField.name === 'workflows') {
          distinctOption = distinctOption[0];
        }

        const mappedDistinctOption =
          typeof distinctOption === 'string'
            ? `"${distinctOption}"`
            : `${distinctOption}`;

        const promisifiedProductsCount = await Promise.all(
          productCountPromises[productFieldIndex]
        );

        promisifiedOptions.push({
          isAvailable: Boolean(promisifiedProductsCount[distinctOptionIndex]),
          name: mappedDistinctOption,
          value: mappedDistinctOption,
        });
      }

      localOptions.push({
        ...(productFields.find(
          (productOption) => productOption.name === productField.name
        ) ?? {
          id: '',
          name: '',
          type: '',
        }),
        options: promisifiedOptions,
      });
    }

    setFilterOptions(localOptions);
  }, [productFields, implicitFilters, productType, filterFields]);

  const handleFilterOptionClick = useCallback(
    (category: string, value: string) => {
      setLastOptionClicked({ category, value, state: filterFields });
      setFilterFields({
        ...filterFields,
        [category]: value,
      });
    },
    [filterFields]
  );

  const setInitialProduct = async (productId: string) => {
    const firstProduct = await query.Product.byId(productId).exec();
    const localProductState: { [key: string]: string } = {};

    productFields.forEach(({ name }) => {
      if (
        // @ts-ignore
        firstProduct?.[productType]?.[name] !== undefined
      ) {
        localProductState[name] = formatFqlxOption(
          name,
          // @ts-ignore
          firstProduct?.[productType]?.[name]
        );
      }
    });

    setFilterFields(localProductState);
    // @ts-ignore
    setActiveProductId(firstProduct?.id);

    setSearchedProductManufacturerId(firstProduct?.manufacturerProductId);
    setSearchProductValue(firstProduct?.manufacturerProductId);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchImplicitFilters();
    }, 500);

    return () => clearTimeout(timer);
  }, [implicitFilters, filterFields]);

  useEffect(() => {
    getToothGroups();
  }, [activeTreatmentGroup]);

  useEffect(() => {
    setFilterFields({});
    setLastOptionClicked(null);

    if (
      activeTreatmentGroup !== null &&
      toothGroups[activeTreatmentGroup]?.teeth.length
    ) {
      const selectedTeeth = Object.keys(selectedProducts);
      for (const { toothNumber } of toothGroups[activeTreatmentGroup].teeth) {
        if (selectedTeeth.includes(`${toothNumber}`)) {
          setInitialProduct(selectedProducts[toothNumber]);
          break;
        }
      }
    }
  }, [toothGroups]);

  const handleProductAutocompleteChange = (manufactureId: string | number) => {
    if (!manufactureId) {
      setSearchedProductManufacturerId('');
    }

    setSearchProductValue(String(manufactureId));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchProductValue) {
        setSearchedProductManufacturerId(searchProductValue);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [searchProductValue]);

  const handleSearchedOptionClick = async (product: Product) => {
    const response = await query.Product.byId(product?.id as string).exec();

    const defaultProduct: { [key: string]: string } =
      formatProductState(response);

    setFilterFields(defaultProduct);
    setActiveProductId(product?.id as string);
    setSearchedProductManufacturerId(product?.manufacturerProductId);
    setSearchProductValue(product?.manufacturerProductId);
  };

  useEffect(() => {
    if (searchedProductManufacturerId) {
      setSearchProductValue(searchedProductManufacturerId);
    }
  }, [searchedProductManufacturerId]);

  return (
    <>
      {!fqlxProducts?.data?.length ? (
        <View paddingTop={{ s: 8, l: 2 }} align="center">
          <Text variant="featured-3" weight="medium">
            No Product Found
          </Text>
        </View>
      ) : (
        <View padding={6} paddingBottom={10}>
          <View direction="row" gap={6}>
            <Image
              width={{ s: '120px', l: '140px' }}
              height={{ s: '120px', l: '140px' }}
              src={fqlxProducts?.data?.[0]?.image}
              alt={'abutment'}
              borderRadius="medium"
            />

            <View gap={2} grow>
              <View direction="row" align="start" className="!justify-between">
                <View.Item grow>
                  <Text variant="featured-3" weight="medium">
                    {fqlxProducts?.data?.[0]?.localizations?.[1].name}
                  </Text>
                </View.Item>

                <View maxWidth={41}>
                  <AutoComplete
                    name="autocomplete"
                    onChange={handleProductAutocompleteChange}
                    value={searchProductValue}
                    onSelectOption={(option) =>
                      handleSearchedOptionClick(option as unknown as Product)
                    }
                    DropdownComponent={SearchProductDropdown}
                    DropdownComponentProps={{ productType }}
                    icon={<BarCodeIcon />}
                  />
                </View>
              </View>
              <Text>
                {fqlxProducts?.data?.[0]?.localizations?.[1].price.amount} €
              </Text>
            </View>
          </View>
          <View.Item grow>
            <View paddingStart={{ l: 41 }} paddingTop={{ s: 8, l: 0 }}>
              <Form
                fields={filterOptions}
                values={filterFields}
                onChangeValue={handleFilterOptionClick}
              />
            </View>
          </View.Item>
        </View>
      )}
    </>
  );
};

export default NewProductCard;
