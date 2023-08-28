import { useQuery } from 'fqlx-client';
import { useMemo } from 'react';
import { Text, View } from 'reshaped';
import { Product, Query } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import { PRODUCT_TYPE } from '../../zustand/product/interface';
import { formProductSearchQuery } from '../NewProductView/helper';
import MenuItemWithImage from '../MenuItemWithImage';

interface SearchProductDropdownProps {
  productType: PRODUCT_TYPE;
  onClick?: (value: Product) => void;
}

export default function SearchProductDropdown({
  productType,
  onClick,
}: SearchProductDropdownProps) {
  const query = useQuery<Query>();
  const { implicitFilters, searchedProductManufacturerId } = useProductStore();

  const products = useMemo(
    () =>
      searchedProductManufacturerId
        ? query.Product.all()
            .where(
              formProductSearchQuery(
                implicitFilters,
                productType,
                searchedProductManufacturerId
              )
            )
            .exec().data
        : [],
    [searchedProductManufacturerId]
  );

  if (!products?.length) {
    return (
      <View paddingBlock={4} paddingInline={2}>
        <Text>No Products found</Text>
      </View>
    );
  }

  return products?.slice(0, 10)?.map((product) => (
    <MenuItemWithImage
      key={product.id}
      image={product.image}
      imageAlt={product?.manufacturer?.name ?? ''}
      onClick={() => onClick?.(product)}
    >
      <Text variant="caption-1" weight="medium">
        {product?.manufacturer?.name ?? ''}
      </Text>
      <Text variant="body-3" weight="regular">
        {product.manufacturerProductId}
      </Text>
    </MenuItemWithImage>
  ));
}
