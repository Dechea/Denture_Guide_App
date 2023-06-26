import { create } from 'zustand';
import { PaginateData } from 'fqlx-client';
import { product } from '../../__mocks__/initialProductsState';
import { Product, AbutmentInput } from '../../fqlx-generated/typedefs';

interface ProductStore {
  product: Product;
  implants: PaginateData<Product>;
  searchedImplantManufacturerId: string;
  implantFilters: { [key: string]: string[] };
  setSearchedImplantManufacturerId: (id: string) => void;
  setImplants: (implants: PaginateData<Product>) => void;
  setImplantFilters: (filters: { [key: string]: string[] }) => void;
  setAbutment: (abutment: AbutmentInput) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  implants: { data: [] },
  searchedImplantManufacturerId: '',
  implantFilters: {},
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setImplants: (implants) => set({ implants }),
  setSearchedImplantManufacturerId: (id) =>
    set({ searchedImplantManufacturerId: id }),
  setImplantFilters: (filters) => set({ implantFilters: filters }),
}));
