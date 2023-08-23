'use client';

import { useQuery } from 'fqlx-client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Text, TextField, View } from 'reshaped';
import { Query } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import { PRODUCT_TYPE } from '../../zustand/product/interface';
import Form from '../Form';
import BarCodeIcon from '../Icons/Barcode';
import {
  formBaseCondition,
  formWhereCondition,
} from '../NewProductView/helper';

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
    productState,
    activeTreatmentGroup,
    setProductState,
    activeProductId,
    setActiveProductId,
  } = useProductStore((state) => state);
  const [lastOptionClicked, setLastOptionClicked] = useState<{
    category: string;
    value: string;
    state: any;
  } | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);

  const query = useQuery<Query>();

  const formatFqlxOption = (category: string, value: any) => {
    if (category === 'workflows') {
      value = value[0];
    }
    return typeof value === 'string' ? `"${value}"` : `${value}`;
  };

  const productQuery = useMemo(
    () =>
      query.Product.all().where(
        formWhereCondition(implicitFilters, productType, productState)
      ),
    [implicitFilters, productState]
  );

  const fqlxProducts = useMemo(() => productQuery.exec(), [productQuery]);

  useMemo(() => {
    let localProduct = {};
    let toUpdateProduct = false;
    if (fqlxProducts?.data?.length == 0) {
      const oldValue =
        lastOptionClicked != null
          ? { [lastOptionClicked.category]: lastOptionClicked.value }
          : {};

      localProduct = query.Product.all()
        .firstWhere(formWhereCondition(implicitFilters, productType, oldValue))
        .exec();
      toUpdateProduct = true;
    } else if (Object.keys(productState).length == 0) {
      localProduct = fqlxProducts.data?.[0];
      toUpdateProduct = true;
    }

    if (toUpdateProduct && localProduct != null) {
      const defaultProduct: { [key: string]: string } = {};

      productFields.forEach(({ name }) => {
        if (
          // @ts-ignore
          localProduct?.[productType]?.[name] != undefined
        ) {
          defaultProduct[name] = formatFqlxOption(
            name,
            // @ts-ignore
            localProduct?.[productType]?.[name]
          );
        }
      });

      setProductState(defaultProduct);
      // @ts-ignore
      setActiveProductId(localProduct?.id);
    } else if (
      fqlxProducts?.data?.length &&
      fqlxProducts?.data?.[0]?.id !== activeProductId
    ) {
      // @ts-ignore
      setActiveProductId(fqlxProducts?.data?.[0]?.id);
    }
  }, [lastOptionClicked, productState]);

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
        const stateWithOption = { ...productState, [name]: option };

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
  }, [productFields, implicitFilters, productType, productState]);

  const handleOptionClick = useCallback(
    (category: string, value: string) => {
      setLastOptionClicked({ category, value, state: productState });

      setProductState({
        ...productState,
        [category]: value,
      });
    },
    [productState]
  );

  useEffect(() => {
    const timer = setTimeout(() => fetchImplicitFilters(), 500);

    return () => clearTimeout(timer);
  }, [implicitFilters, productState]);

  useEffect(() => {
    setProductState({});
    setLastOptionClicked(null);
  }, [activeTreatmentGroup]);

  return (
    <>
      {!!fqlxProducts?.data?.length ? (
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
                  <TextField
                    icon={BarCodeIcon}
                    name="email"
                    size="medium"
                    value={fqlxProducts?.data?.[0]?.manufacturerProductId}
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
                values={productState}
                onChangeValue={handleOptionClick}
              />
            </View>
          </View.Item>
        </View>
      ) : (
        <View paddingTop={{ s: 8, l: 2 }} align="center">
          <Text variant="featured-3" weight="medium">
            No Product Found
          </Text>
        </View>
      )}
    </>
  );
};

export default NewProductCard;
