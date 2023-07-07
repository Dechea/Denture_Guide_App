import { create } from 'zustand';
import { PaginateData } from 'fqlx-client';
import { product } from '../../__mocks__/initialProductsState';
import { Product, AbutmentInput } from '../../fqlx-generated/typedefs';

export interface SelectedProducts {
  [key: number]: string;
}

interface ProductStore {
  product: Product;
  products: PaginateData<Product>;
  searchedProductManufacturerId: string;
  productFilters: { [key: string]: string[] };
  availableTeethByProductType: number[];
  selectedProducts: SelectedProducts;
  setSearchedProductManufacturerId: (id: string) => void;
  setProducts: (products: PaginateData<Product>) => void;
  setProductFilters: (filters: { [key: string]: string[] }) => void;
  setAvailableTeethByProductType: (availableTeeth: number[]) => void;
  setSelectedProducts: (products: SelectedProducts) => void;
  setAbutment: (abutment: AbutmentInput) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  products: { data: [] },
  searchedProductManufacturerId: '',
  productFilters: {},
  availableTeethByProductType: [],
  selectedProducts: {},
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setProducts: (products) => set({ products }),
  setSearchedProductManufacturerId: (id) =>
    set({ searchedProductManufacturerId: id }),
  setProductFilters: (filters) => set({ productFilters: filters }),
  setAvailableTeethByProductType: (availableTeeth) =>
    set({ availableTeethByProductType: availableTeeth }),
  setSelectedProducts: (products: SelectedProducts) =>
    set({ selectedProducts: products }),
}));
