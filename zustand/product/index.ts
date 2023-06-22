import { create } from 'zustand';
import { product } from '../../__mocks__/initialProductsState';
import { AbutmentInput, Product as IProduct } from '../../interfaces/schema';
import { Product } from '../../fqlx-generated/typedefs';
import { PaginateData } from 'fqlx-client';

interface ProductStore {
  product: IProduct;
  implants: PaginateData<Product>;
  setImplants: (implants: PaginateData<Product>) => void;
  setAbutment: (abutment: AbutmentInput) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  implants: { data: [] },
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setImplants: (implants) =>
    set((state) => ({
      implants: {
        data: [...state.implants.data, ...implants?.data],
        after: implants?.after,
        before: implants?.before,
      },
    })),
}));
