import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Address {
  name: string;
  street: string;
  streetNo: string;
  zip: string;
  city: string;
  state: string;
  country: string;
  type: string;
}

interface ProductStore {
  organizationId: string;
  savedAddresses: Address[];
  setOrganizationId: (id: string) => void;
  setSavedAddresses: (addresses: Address[]) => void;
}

export const useUserStore = create<ProductStore>()(
  persist(
    (set) => ({
      organizationId: '',
      savedAddresses: [],
      setOrganizationId: (id: string) => set({organizationId: id}),
      setSavedAddresses: (addresses: Address[]) =>
        set({ savedAddresses: addresses }),
    }),
    { name: 'userStore' }
  )
);
