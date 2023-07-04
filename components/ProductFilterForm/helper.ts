import { PRODUCT_TYPE } from '../../zustand/product/interface';

export const formWhereCondition = (productType: PRODUCT_TYPE) => {
  switch (true) {
    case productType === PRODUCT_TYPE.TOOLS:
      return `(product) => (product.labScrew != null || product.implantReplica != null || product.screwdriver != null || product.orientationAid != null || product.protectionAid != null || product.clampingAid != null)`;

    default:
      return `(product) => product.${productType} != null`;
  }
};
