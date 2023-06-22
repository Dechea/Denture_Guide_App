'use client';

import { View, Text, Checkbox, Button, Icon } from 'reshaped';
import { useMemo, useState } from 'react';
import { useQuery } from 'fqlx-client';
import { Query } from '../../fqlx-generated/typedefs';
import EndIcon from '../Icons/End';

const categoryList = ['length', 'implantLine', 'material', 'diameterPlatform'];

interface Category {
  name: string;
  options: string[];
}

export const ImplantForm = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const query = useQuery<Query>();

  const implantProducts = query.Product.all().where(
    (product) => product.implant != null
  );

  useMemo(() => {
    const categoriesWithOptions = categoryList.map((category) => ({
      name: category,
      options: implantProducts
        .map(`(product) => product.implant.${category}`)
        .distinct()
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

  return (
    <View gap={10} paddingBottom={10}>
      {categories.map((category) => {
        const isExpanded = expandedCategories.includes(category.name);
        const optionsLength = category.options?.length;
        const sliceEndPointer = isExpanded
          ? optionsLength
          : Math.min(5, optionsLength);

        return (
          <View gap={4} direction='column' key={category.name} paddingStart={0}>
            <Text variant='body-3' weight='medium'>
              {category.name}
            </Text>

            <View gap={4}>
              <>
                {category.options
                  ?.slice(0, sliceEndPointer)
                  .map((option, index) => {
                    return (
                      <View key={index + `${option}`}>
                        <Checkbox
                          name={option}
                          value={option}
                          onChange={(_event) => {}}
                        >
                          <Text variant='body-3' weight='regular'>
                            {option}
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
                  onClick={() => toggleCategoryOptions(category.name)}
                  size={'small'}
                  variant='ghost'
                  endIcon={
                    <Icon
                      svg={EndIcon}
                      color='primary'
                      size={4}
                      className='ps-[1px]'
                    />
                  }
                >
                  <Text variant='body-3' weight='medium' color='primary'>
                    {expandedCategories.includes(category.name)
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
  );
};
