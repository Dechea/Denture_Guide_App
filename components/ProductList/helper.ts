import { PRODUCT_TYPE } from '../../zustand/product/interface';

export const formWhereCondition = (
  searchedProductManufacturerId: string,
  productFilters: { [key: string]: string[] },
  productType: PRODUCT_TYPE
) => {
  const conditions: string[] = [];

  // Form condition if product search by manufacturerId
  if (searchedProductManufacturerId) {
    conditions.push(
      `product.manufacturerProductId?.includes("${searchedProductManufacturerId}")`
    );
  }

  // Form condition for tools tab
  if (productType === PRODUCT_TYPE.TOOLS) {
    const filterOptionsConditions: string[] = [];

    Object.entries(productFilters).forEach(([category, fields]) => {
      if (fields.length) {
        filterOptionsConditions.push(`product.${category} != null`);
      }
    });

    if (filterOptionsConditions.length) {
      conditions.unshift(
        `(product) => (${filterOptionsConditions.join(' || ')})`
      );
    } else {
      conditions.unshift(
        `(product) => (product.labScrew != null || product.implantReplica != null || product.screwdriver != null || product.orientationAid != null || product.protectionAid != null || product.clampingAid != null)`
      );
    }

    return conditions.join(' && ');
  }

  conditions.unshift(`(product) => product.${productType} != null`);

  Object.entries(productFilters).forEach(([category, fields]) => {
    if (fields.length) {
      conditions.push(
        `[${fields.join(',')}].includes(product.${productType}.${category})`
      );
    }
  });

  const condition = conditions.join(' && ');

  return condition;
};
