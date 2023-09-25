import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Address } from '../../fqlx-generated/typedefs';

interface AddressFormData {
  shipping: Address;
  billing: Address;
  isBillingSameAsShippingAddress: boolean;
}
interface ProductStore {
  organizationId: string;
  addressFormData: AddressFormData | null;
  savedShippingIndex: number;
  savedBillingIndex: number;
  setSavedShippingIndex: (index: number) => void;
  setSavedBillingIndex: (index: number) => void;
  setOrganizationId: (id: string) => void;
  setAddressFormData: (data: AddressFormData | null) => void;
}

export const useUserStore = create<ProductStore>()(
  persist(
    (set) => ({
      organizationId: '',
      addressFormData: null,
      savedShippingIndex: 0,
      savedBillingIndex: 0,
      setSavedShippingIndex: (index: number) =>
        set({ savedShippingIndex: index }),
      setSavedBillingIndex: (index: number) =>
        set({ savedBillingIndex: index }),
      setOrganizationId: (id: string) => set({ organizationId: id }),
      setAddressFormData: (data: AddressFormData | null) =>
        set({ addressFormData: data }),
    }),
    { name: 'userStore' }
  )
);
