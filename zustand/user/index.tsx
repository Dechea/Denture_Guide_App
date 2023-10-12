import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Address } from '../../fqlx-generated/typedefs';

interface AddressFormData {
  shipping: Address;
  billing: Address;
  isBillingSameAsShippingAddress: boolean;
}
interface ProductStore {
  addressFormData: AddressFormData | null;
  savedShippingIndex: number;
  savedBillingIndex: number;
  setSavedShippingIndex: (index: number) => void;
  setSavedBillingIndex: (index: number) => void;
  setAddressFormData: (data: AddressFormData | null) => void;
}

export const useUserStore = create<ProductStore>()(
  persist(
    (set) => ({
      addressFormData: null,
      savedShippingIndex: 0,
      savedBillingIndex: 0,
      setSavedShippingIndex: (index: number) =>
        set({ savedShippingIndex: index }),
      setSavedBillingIndex: (index: number) =>
        set({ savedBillingIndex: index }),
      setAddressFormData: (data: AddressFormData | null) =>
        set({ addressFormData: data }),
    }),
    { name: 'userStore' }
  )
);
