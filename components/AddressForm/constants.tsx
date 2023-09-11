export interface Address {
  name: string;
  street: string;
  streetNo: string;
  zip: string;
  city: string;
  state: string;
  country: string;
}

export enum AddressType {
  SHIPPING = 'SHIPPING',
  BILLING = 'BILLING',
}

export const initialFormData = {
  shipping: {
    name: '',
    street: '',
    streetNo: '',
    zip: '',
    city: '',
    state: '',
    country: '',
  },
  isBillingSameAsShippingAddress: true,
  billing: {
    name: '',
    street: '',
    streetNo: '',
    zip: '',
    city: '',
    state: '',
    country: '',
  },
};
