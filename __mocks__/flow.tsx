import { PRODUCT_TYPE } from '../zustand/product/interface';

export const DISCOVERYMODE = 'discovery-mode';

export const CARTTABROUTES = {
  selectedproducts: 'selectedproducts',
  shippingdetails: 'shippingdetails',
  orders: 'orders',
};

export const FLOW: {
  [key: string]: { id: string; path: string; tab?: string };
} = {
  treatments: { id: '0', path: '/treatments' },
  implant: { id: '1', path: '/treatments/implant', tab: PRODUCT_TYPE.IMPLANT },
  abutment: {
    id: '2',
    path: '/treatments/abutment',
    tab: PRODUCT_TYPE.ABUTMENT,
  },
  healing: {
    id: '3',
    path: '/treatments/healing',
    tab: PRODUCT_TYPE.HEALING_ABUTMENT,
  },
  temporary: {
    id: '4',
    path: '/treatments/temporary',
    tab: PRODUCT_TYPE.TEMPORARY_ABUTMENT,
  },
  impression: {
    id: '5',
    path: '/treatments/impression',
    tab: PRODUCT_TYPE.IMPRESSION,
  },
  tools: { id: '6', path: '/tools' },
  cart: { id: '7', path: `/cart/${CARTTABROUTES.selectedproducts}` },
  shipping: { id: '8', path: `/cart/${CARTTABROUTES.shippingdetails}` },
};
