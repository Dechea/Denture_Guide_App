export const formWhereCondition = (
  searchedImplantManufacturerId: string,
  implantFilters: { [key: string]: string[] }
) => {
  const conditions = ['(product) => product.implant != null'];

  if (Boolean(searchedImplantManufacturerId)) {
    conditions.push(
      `product.manufacturerProductId?.includes("${searchedImplantManufacturerId}")`
    );
  }

  Object.entries(implantFilters).forEach(([category, fields]) => {
    fields.length &&
      conditions.push(
        `[${fields.join(',')}].includes(product.implant.${category})`
      );
  });

  const condition = conditions.join(' && ');
  return condition;
};
