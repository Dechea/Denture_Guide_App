'use client';

import { useMemo, useState } from 'react';
import { View, Text, Checkbox, Icon, TextField, Button } from 'reshaped';
import { useQuery } from 'fqlx-client';
import { debounce } from 'reshaped/utilities/helpers';
import FilterIcon from '../Icons/Filter';
import BarCodeIcon from '../Icons/Barcode';
import { useProductStore } from '../../zustand/product';
import { Query } from '../../fqlx-generated/typedefs';
import EndIcon from '../Icons/End';

const categoryList = [
  {
    displayName: 'Diameter',
    fqlxKey: 'diameterPlatform',
    prefix: 'Ø',
    suffix: 'mm',
    dataType: 'number',
  },
  {
    displayName: 'Length',
    fqlxKey: 'length',
    prefix: '',
    suffix: 'mm',
    dataType: 'number',
  },
  {
    displayName: 'Neck Height',
    fqlxKey: 'lengthNeck',
    prefix: '',
    suffix: 'mm',
    dataType: 'number',
  },
  {
    displayName: 'Implant Line',
    fqlxKey: 'implantLine',
    prefix: '',
    suffix: '',
    dataType: 'string',
  },
  {
    displayName: 'Type',
    fqlxKey: 'level',
    prefix: '',
    suffix: '',
    dataType: 'string',
  },
  {
    displayName: 'Material',
    fqlxKey: 'material',
    prefix: '',
    suffix: '',
    dataType: 'string',
  },
];

interface Category {
  displayName: string;
  fqlxKey: string;
  options: string[];
  suffix: string;
  prefix: string;
  dataType: string;
}

export const ImplantFilterForm = () => {
  const {
    setSearchedImplantManufacturerId,
    implantFilters,
    setImplantFilters,
  } = useProductStore();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const query = useQuery<Query>();

  const implantProducts = query.Product.all()
    .where((product) => product.implant != null)
    .exec();
  console.log({ implantProducts });
  // useMemo(() => {
  //   console.log({ implantProducts });
  //   console.log(
  //     'implantProducts query======',
  //     implantProducts
  //       .map(`(product) => product.implant.length`)
  //       .distinct<string>()
  //       .exec()
  //   );
  //   const categoriesWithOptions = categoryList.map((category) => ({
  //     ...category,
  //     options: implantProducts
  //       .map(`(product) => product.implant.${category.fqlxKey}`)
  //       .distinct<string>()
  //       .exec()
  //       .data?.filter((option) => option),
  //   }));
  //   console.log({ categoriesWithOptions });
  //   setCategories(categoriesWithOptions);
  // }, []);

  // console.log({ categories });

  // const toggleCategoryOptions = (category: string) => {
  //   const localExpandedItems = expandedCategories.includes(category)
  //     ? expandedCategories.filter((id) => id !== category)
  //     : [...expandedCategories, category];
  //   setExpandedCategories(localExpandedItems);
  // };

  // const handleManufacturerIdChange = debounce((id: string) => {
  //   setSearchedImplantManufacturerId(id);
  // }, 300);

  // const getValueByType = (option: string, dataType: string) => {
  //   switch (dataType) {
  //     case 'string':
  //       return `"${option}"`;

  //     case 'number':
  //       return option;

  //     default:
  //       return option;
  //   }
  // };

  // const handleCategoryFieldClick = (category: string, field: string) => {
  //   let filteredImplants = { ...implantFilters };
  //   const filterCategory = filteredImplants[category];

  //   if (filterCategory?.includes(field)) {
  //     filteredImplants[category] = filterCategory.filter(
  //       (implant) => implant !== field
  //     );
  //   } else {
  //     filteredImplants[category] = [...(filterCategory || []), field];
  //   }

  //   setImplantFilters(filteredImplants);
  // };

  return (
    <View gap={5.5}>
      <View direction='row' align='center' paddingBlock={2.5} gap={1}>
        <Icon svg={FilterIcon} size={4} color='neutral-faded' />
        <Text variant='body-3' color='neutral-faded'>
          Filters
        </Text>
      </View>

      {/* <TextField
        size='large'
        variant='faded'
        name='email'
        placeholder='Search by code e.g K1043.XXXX '
        startSlot={<Icon svg={BarCodeIcon} color='neutral-faded' size={5} />}
        onChange={({ value }: { value: string }) =>
          handleManufacturerIdChange(value)
        }
      />

      <View
        gap={10}
        paddingBottom={10}
        height='calc(100vh - 480px)'
        className='overflow-y-auto'
      >
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
                      const value = getValueByType(option, category.dataType);
                      return (
                        <View key={index + `${option}`}>
                          <Checkbox
                            name={option}
                            value={option}
                            checked={implantFilters[
                              category.fqlxKey as keyof typeof implantFilters
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
      </View> */}
    </View>
  );
};
