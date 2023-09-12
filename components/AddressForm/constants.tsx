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

const initialAddress = {
  name: '',
  street: '',
  streetNo: '',
  zip: '',
  city: '',
  state: '',
  country: '',
};

export const initialFormData = {
  shipping: { ...initialAddress },
  isBillingSameAsShippingAddress: true,
  billing: { ...initialAddress },
};
