'use client';

import { useQuery } from 'fqlx-client';
import { useMemo, useState } from 'react';
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

const NewProductCard = ({
  productType,
  productFields,
}: NewProductCardProps) => {
  const { implicitFilters, productState, setProductState, setActiveProductId } =
    useProductStore((state) => state);
  const [lastOptionClicked, setLastOptionClicked] = useState<{
    category: string;
    value: string;
    state: any;
  } | null>(null);

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
    }
  }, [lastOptionClicked, fqlxProducts]);

  const filterOptions = useMemo(() => {
    const localOptions: {
      id: string;
      name: string;
      type: string;
      options: { isAvailable: boolean; name: string; value: string }[];
    }[] = [];

    productFields.forEach(({ name }) => {
      const fqlxOptions = query.Product.all()
        .where(formBaseCondition(implicitFilters, productType))
        .map(`(product) => product.${productType}.${name}`)
        .distinct<string>()
        .exec().data;
      const options = fqlxOptions.map((option) => {
        if (name === 'workflows') {
          option = option[0];
        }
        option = typeof option === 'string' ? `"${option}"` : `${option}`;
        const stateWithOption = { ...productState, [name]: option };
        const matching = query.Product.all()
          .where(
            formWhereCondition(implicitFilters, productType, stateWithOption)
          )
          .count()
          .exec();
        return {
          isAvailable: Boolean(matching),
          name: option,
          value: option,
        };
      });
      localOptions.push({
        ...(productFields.find(
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
  }, [fqlxProducts]);

  const handleOptionClick = (category: string, value: string) => {
    setLastOptionClicked({ category, value, state: productState });

    setProductState({
      ...productState,
      [category]: value,
    });
  };

  return (
    <>
      {!!fqlxProducts?.data.length ? (
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
                    defaultValue={
                      fqlxProducts?.data?.[0]?.manufacturerProductId
                    }
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
        <Text variant="featured-3" weight="medium">
          No Product Found
        </Text>
      )}
    </>
  );
};

export default NewProductCard;
