import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Address } from '../../components/AddressForm/constants';

interface AddressFormData {
  shipping: Address;
  billing: Address;
  isBillingSameAsShippingAddress: boolean;
}
interface ProductStore {
  organizationId: string;
  addressFormData: AddressFormData | null;
  setOrganizationId: (id: string) => void;
  setAddressFormData: (data: AddressFormData | null) => void;
}

export const useUserStore = create<ProductStore>()(
  persist(
    (set) => ({
      organizationId: '',
      addressFormData: null,
      setOrganizationId: (id: string) => set({ organizationId: id }),
      setAddressFormData: (data: AddressFormData | null) =>
        set({ addressFormData: data }),
    }),
    { name: 'userStore' }
  )
);
