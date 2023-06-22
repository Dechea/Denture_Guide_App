import { create } from 'zustand';
import { product } from '../../__mocks__/initialProductsState';
import { AbutmentInput, Product as IProduct } from '../../interfaces/schema';
import { Product } from '../../fqlx-generated/typedefs';
import { PaginateData } from 'fqlx-client';

interface ProductStore {
  product: IProduct;
  implants: PaginateData<Product>;
  searchedImplantManufacturerId: string;
  implantFilters: string[];
  setSearchedImplantManufacturerId: (id: string) => void;
  setImplants: (implants: PaginateData<Product>) => void;
  setImplantFilters: (filters: string[]) => void;
  setAbutment: (abutment: AbutmentInput) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  implants: { data: [] },
  searchedImplantManufacturerId: '',
  implantFilters: [],
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setImplants: (implants) => set({ implants }),
  setSearchedImplantManufacturerId: (id) =>
    set({ searchedImplantManufacturerId: id }),
  setImplantFilters: (filters) => set({ implantFilters: filters }),
}));
