import { PRODUCT_TYPE } from '../../zustand/product/interface';

export const formWhereCondition = (
  searchedProductManufacturerId: string,
  productFilters: { [key: string]: string[] },
  productType: PRODUCT_TYPE
) => {
  const conditions = [`(product) => product.${productType} != null`];

  if (searchedProductManufacturerId) {
    conditions.push(
      `product.manufacturerProductId?.includes("${searchedProductManufacturerId}")`
    );
  }

  Object.entries(productFilters).forEach(([category, fields]) => {
    fields.length &&
      conditions.push(
        `[${fields.join(',')}].includes(product.${productType}.${category})`
      );
  });

  const condition = conditions.join(' && ');

  return condition;
};
