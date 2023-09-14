import { Address } from '../../fqlx-generated/typedefs';

export enum AddressType {
  SHIPPING = 'SHIPPING',
  BILLING = 'BILLING',
}

export interface AddressFormData {
  shipping: Address;
  isBillingSameAsShippingAddress: boolean;
  billing: Address;
}

export const initialAddress = {
  name: '',
  street: '',
  streetNo: '',
  zip: '',
  city: '',
  state: '',
  country: '',
  default: false,
};

export const initialFormData = {
  shipping: { ...initialAddress, type: AddressType.SHIPPING } as Address,
  isBillingSameAsShippingAddress: true,
  billing: { ...initialAddress, type: AddressType.BILLING } as Address,
};
