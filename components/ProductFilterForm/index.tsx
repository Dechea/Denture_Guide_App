'use client';

import { useEffect, useMemo, useState } from 'react';
import { View, Text, Checkbox, Icon, TextField, Button } from 'reshaped';
import { useQuery } from 'fqlx-client';
import { debounce } from 'reshaped/utilities/helpers';
import FilterIcon from '../Icons/Filter';
import BarCodeIcon from '../Icons/Barcode';
import { useProductStore } from '../../zustand/product';
import { Query } from '../../fqlx-generated/typedefs';
import EndIcon from '../Icons/End';
import {
  PRODUCT_TYPE,
  ProductFilterCategory,
} from '../../zustand/product/interface';

interface ProductFilterFormProps {
  filterCategories: ProductFilterCategory[];
  productType: PRODUCT_TYPE;
}

export const ProductFilterForm = ({
  filterCategories,
  productType,
}: ProductFilterFormProps) => {
  const {
    setSearchedProductManufacturerId,
    productFilters,
    setProductFilters,
  } = useProductStore();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<ProductFilterCategory[]>([]);

  const query = useQuery<Query>();

  useMemo(() => {
    const productQuery = query.Product.all().where(
      `(product) => product.${productType} != null`
    );

    const categoriesWithOptions = filterCategories.map((category) => ({
      ...category,
      options: productQuery
        .map(`(product) => product.${productType}.${category.fqlxKey}`)
        .distinct<string>()
        .exec()
        .data?.filter((option) => option),
    }));

    setCategories(categoriesWithOptions);
  }, []);

  const toggleCategoryOptions = (category: string) => {
    const localExpandedItems = expandedCategories.includes(category)
      ? expandedCategories.filter((id) => id !== category)
      : [...expandedCategories, category];
    setExpandedCategories(localExpandedItems);
  };

  const handleManufacturerIdChange = debounce((id: string) => {
    setSearchedProductManufacturerId(id);
  }, 300);

  const getFieldValueByType = (option: string, dataType: string) => {
    switch (dataType) {
      case 'string':
        return `"${option}"`;

      case 'number':
        return option;

      default:
        return option;
    }
  };

  const handleCategoryFieldClick = (category: string, field: string) => {
    let filteredProducts = { ...productFilters };
    const filterCategory = filteredProducts[category];

    if (filterCategory?.includes(field)) {
      filteredProducts[category] = filterCategory.filter(
        (product) => product !== field
      );
    } else {
      filteredProducts[category] = [...(filterCategory || []), field];
    }

    setProductFilters(filteredProducts);
  };

  // Reset searched manufacturerId and applied filters
  useEffect(() => {
    return () => {
      setSearchedProductManufacturerId('');
      setProductFilters({});
    };
  }, []);

  return (
    <View gap={5.5}>
      <View direction='row' align='center' paddingBlock={2.5} gap={1}>
        <Icon svg={FilterIcon} size={4} color='neutral-faded' />
        <Text variant='body-3' color='neutral-faded'>
          Filters
        </Text>
      </View>

      <TextField
        size='large'
        variant='faded'
        name='manufacturerProductId'
        placeholder='Search by code e.g K1043.XXXX '
        startSlot={<Icon svg={BarCodeIcon} color='neutral-faded' size={5} />}
        onChange={({ value }: { value: string }) =>
          handleManufacturerIdChange(value)
        }
      />

      <View gap={10} paddingBottom={10}>
        {categories.map((category) => {
          const isExpanded = expandedCategories.includes(category.fqlxKey);
          const optionsLength = category.options?.length;

          if (!optionsLength) {
            return <></>;
          }

          const sliceEndPointer = isExpanded
            ? optionsLength
            : Math.min(5, optionsLength);

          return (
            <View
              gap={4}
              direction='column'
              key={category.fqlxKey}
              paddingStart={0}
            >
              <Text variant='body-3' weight='medium'>
                {category.displayName}
              </Text>

              <View gap={4}>
                <>
                  {category.options
                    ?.slice(0, sliceEndPointer)
                    .map((option, index) => {
                      const value = getFieldValueByType(
                        option,
                        category.dataType
                      );
                      return (
                        <View key={`${index}-${option}`}>
                          <Checkbox
                            name={option}
                            value={option}
                            checked={productFilters[
                              category.fqlxKey as keyof typeof productFilters
                            ]?.includes(value)}
                            onChange={() =>
                              handleCategoryFieldClick(category.fqlxKey, value)
                            }
                          >
                            <Text variant='body-3' weight='regular'>
                              {`${category.prefix} ${option} ${category.suffix}`}
                            </Text>
                          </Checkbox>
                        </View>
                      );
                    })}
                </>
              </View>

              {optionsLength > 5 && (
                <View direction='row' align='center'>
                  <Button
                    onClick={() => toggleCategoryOptions(category.fqlxKey)}
                    size={'small'}
                    variant='ghost'
                    endIcon={
                      <Icon
                        svg={EndIcon}
                        color='primary'
                        size={4}
                        className={`ps-[1px] ${isExpanded && 'rotate-180'}`}
                      />
                    }
                  >
                    <Text variant='body-3' weight='medium' color='primary'>
                      {expandedCategories.includes(category.fqlxKey)
                        ? 'Show Less'
                        : 'Show More'}
                    </Text>
                  </Button>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};
