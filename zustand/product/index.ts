import { create } from 'zustand';
import { product } from '../../__mocks__/initialProductsState';
import { AbutmentInput, ImplantInput, Product } from '../../interfaces/schema';

interface ProductStore {
  product: Product;
  setImplant: (implant: ImplantInput) => void;
  setAbutment: (abutment: AbutmentInput) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setImplant: (implant) =>
    set((state) => ({ product: { ...state.product, implant: implant } })),
}));
