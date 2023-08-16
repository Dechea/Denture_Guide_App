import { create } from 'zustand';
import { PaginateData } from 'fqlx-client';
import { product } from '../../__mocks__/initialProductsState';
import { Product, AbutmentInput } from '../../fqlx-generated/typedefs';
import { TREATMENT_GROUP } from './interface';

export interface SelectedProducts {
  [key: number]: string;
}

interface ProductStore {
  product: Product;
  products: PaginateData<Product>;
  productState: { [key: string]: string };
  productCount: number;
  activeProductId: string;
  activeProductTab: string;
  activePatientFileId: string;
  searchedProductManufacturerId: string;
  productFilters: { [key: string]: string[] };
  implicitFilters: { [key: string]: string[] };
  availableTeethByProductType: number[];
  selectedProducts: SelectedProducts;
  acceptedTreatmentGroups: TREATMENT_GROUP[];
  activeTreatmentGroup: number | null;
  setSearchedProductManufacturerId: (id: string) => void;
  setProducts: (products: PaginateData<Product>) => void;
  setProductState: (productState: { [key: string]: string }) => void;
  setActiveProductId: (id: string) => void;
  setProductCount: (count: number) => void;
  setActiveProductTab: (productTab: string) => void;
  setActivePatientFileId: (patientFileId: string) => void;
  setProductFilters: (filters: { [key: string]: string[] }) => void;
  setImplicitFilters: (filters: { [key: string]: string[] }) => void;
  setAvailableTeethByProductType: (availableTeeth: number[]) => void;
  setSelectedProducts: (products: SelectedProducts) => void;
  setAcceptedTreatmentGroups: (treatmentGroups: TREATMENT_GROUP[]) => void;
  setActiveTreatmentGroup: (treatmentGroup: number | null) => void;
  setAbutment: (abutment: AbutmentInput) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  products: { data: [] },
  productState: {},
  productCount: 0,
  activeProductId: '',
  activeProductTab: '',
  activePatientFileId: '',
  searchedProductManufacturerId: '',
  productFilters: {},
  implicitFilters: {},
  availableTeethByProductType: [],
  selectedProducts: {},
  acceptedTreatmentGroups: [],
  activeTreatmentGroup: null,
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setProducts: (products) => set({ products }),
  setProductState: (productState: { [key: string]: string }) => {
    set((state) => ({ ...state.productState, productState }));
  },
  setProductCount: (count: number) => set({ productCount: count }),
  setActiveProductId: (id: string) => set({ activeProductId: id }),
  setActiveProductTab: (productTab) => set({ activeProductTab: productTab }),
  setActivePatientFileId: (patientFileId) =>
    set({ activePatientFileId: patientFileId }),
  setSearchedProductManufacturerId: (id) =>
    set({ searchedProductManufacturerId: id }),
  setProductFilters: (filters) => set({ productFilters: filters }),
  setImplicitFilters: (filters) => set({ implicitFilters: filters }),
  setAvailableTeethByProductType: (availableTeeth) =>
    set({ availableTeethByProductType: availableTeeth }),
  setSelectedProducts: (products: SelectedProducts) =>
    set({ selectedProducts: products }),
  setAcceptedTreatmentGroups: (treatmentGroups: TREATMENT_GROUP[]) =>
    set({ acceptedTreatmentGroups: treatmentGroups }),
  setActiveTreatmentGroup: (treatmentGroup: number | null) =>
    set({ activeTreatmentGroup: treatmentGroup }),
}));
