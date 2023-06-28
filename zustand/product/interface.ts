export enum PRODUCT_TYPE {
  IMPLANT = 'implant',
  ABUTMENT = 'abutment',
  HEALING_ABUTMENT = 'healingAbutment',
  TEMPORARY_ABUTMENT = 'temporaryAbutment',
  IMPRESSION = 'impression',
}

export interface ProductFilterCategory {
  displayName: string;
  fqlxKey: string;
  options: string[];
  suffix: string;
  prefix: string;
  dataType: string;
}
