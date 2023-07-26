import { create } from 'zustand';
import { PaginateData } from 'fqlx-client';
import { product } from '../../__mocks__/initialProductsState';
import { Product, AbutmentInput } from '../../fqlx-generated/typedefs';
import { TABGROUP_TYPE } from './interface';

export interface SelectedProducts {
  [key: number]: string;
}

interface ProductStore {
  product: Product;
  products: PaginateData<Product>;
  activeProductTab: string;
  activePatientFileId: string;
  searchedProductManufacturerId: string;
  productFilters: { [key: string]: string[] };
  availableTeethByProductType: number[];
  selectedProducts: SelectedProducts;
  acceptedTreatmentGroups: TABGROUP_TYPE[];
  activeTreatmentGroup: string;
  recentToothClicked: number;
  setSearchedProductManufacturerId: (id: string) => void;
  setProducts: (products: PaginateData<Product>) => void;
  setActiveProductTab: (productTab: string) => void;
  setActivePatientFileId: (patientFileId: string) => void;
  setProductFilters: (filters: { [key: string]: string[] }) => void;
  setAvailableTeethByProductType: (availableTeeth: number[]) => void;
  setSelectedProducts: (products: SelectedProducts) => void;
  setAcceptedTreatmentGroups: (treatmentGroups: TABGROUP_TYPE[]) => void;
  setActiveTreatmentGroup: (treatmentGroup: string) => void;
  setAbutment: (abutment: AbutmentInput) => void;
  setRecentToothClicked: (toothNumber: number) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  product: product,
  products: { data: [] },
  activeProductTab: '',
  activePatientFileId: '',
  searchedProductManufacturerId: '',
  productFilters: {},
  availableTeethByProductType: [],
  selectedProducts: {},
  acceptedTreatmentGroups: [],
  activeTreatmentGroup: '',
  recentToothClicked: 0,
  setAbutment: (abutment) =>
    set((state) => ({
      product: { ...state.product, abutment: { ...abutment, id: '' } },
    })),
  setProducts: (products) => set({ products }),
  setActiveProductTab: (productTab) => set({ activeProductTab: productTab }),
  setActivePatientFileId: (patientFileId) =>
    set({ activePatientFileId: patientFileId }),
  setSearchedProductManufacturerId: (id) =>
    set({ searchedProductManufacturerId: id }),
  setProductFilters: (filters) => set({ productFilters: filters }),
  setAvailableTeethByProductType: (availableTeeth) =>
    set({ availableTeethByProductType: availableTeeth }),
  setSelectedProducts: (products: SelectedProducts) =>
    set({ selectedProducts: products }),
  setAcceptedTreatmentGroups: (treatmentGroups: TABGROUP_TYPE[]) =>
    set({ acceptedTreatmentGroups: treatmentGroups }),
  setActiveTreatmentGroup: (treatmentGroup: string) =>
    set({ activeTreatmentGroup: treatmentGroup }),
  setRecentToothClicked: (toothNumber: number) =>
    set({ recentToothClicked: toothNumber }),
}));
