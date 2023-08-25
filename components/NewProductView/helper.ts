import { PRODUCT_TYPE } from '../../zustand/product/interface';

const getBaseConditions = (
  implicitFilters: { [key: string]: string[] },
  productType: PRODUCT_TYPE,
  conditions: string[]
) => {
  conditions.push(`(product) => product.${productType} != null`);

  Object.entries(implicitFilters).forEach(([category, fields]) => {
    if (fields.length) {
      if (category === 'abutmentLine') {
        conditions.push(
          `product.${productType}.abutmentLines.includes(${fields[0]})`
        );
      } else if (category === 'heightsGingiva') {
        conditions.push(
          `[${fields.join(',')}].includes(product.${productType}.heightGingiva)`
        );
      } else if (category === 'indications') {
        conditions.push(
          `product.${productType}.${category}.includes(${fields[0]})`
        );
      } else {
        conditions.push(
          `[${fields.join(',')}].includes(product.${productType}.${category})`
        );
      }
    }
  });

  return conditions;
};

export const formWhereCondition = (
  implicitFilters: { [key: string]: string[] },
  productType: PRODUCT_TYPE,
  productState: { [key: string]: string | number | boolean }
) => {
  const conditions = getBaseConditions(implicitFilters, productType, []);

  Object.entries(productState || {}).forEach(([category, value]) => {
    if (category === 'workflows') {
      conditions.push(`product.${productType}.${category}.includes(${value})`);
    } else {
      conditions.push(`product.${productType}.${category} == ${value}`);
    }
  });

  return conditions.join(' && ');
};

export const formBaseCondition = (
  implicitFilters: { [key: string]: string[] },
  productType: PRODUCT_TYPE
) => {
  const conditions = getBaseConditions(implicitFilters, productType, []);

  return conditions.join(' && ');
};

export const formProductSearchQuery = (
  implicitFilters: {
    [key: string]: string[];
  },
  productType: PRODUCT_TYPE,
  searchedProductManufacturerId: string
) => {
  const conditions = getBaseConditions(implicitFilters, productType, []);
  conditions.push(
    `product.manufacturerProductId?.includes("${searchedProductManufacturerId}")`
  );
  return conditions.join(' && ');
};

export const formProductSearchByManufacturingIdQuery = (
  implicitFilters: {
    [key: string]: string[];
  },
  productType: PRODUCT_TYPE,
  searchedProductManufacturerId: string
) => {
  const conditions = getBaseConditions(implicitFilters, productType, []);
  conditions.push(
    `product.manufacturerProductId == "${searchedProductManufacturerId}"`
  );
  return conditions.join(' && ');
};
