import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductStore {
  organizationId: string;
  setOrganizationId: (id: string) => void;
}

export const useUserStore = create<ProductStore>()(
  persist(
    (set) => ({
      organizationId: '',
      setOrganizationId: (id: string) => set({ organizationId: id }),
    }),
    { name: 'userStore' }
  )
);
