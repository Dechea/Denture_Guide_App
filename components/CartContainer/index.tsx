'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '../../zustand/user';

const CartContainer = ({ children }: { children: React.ReactNode }) => {
  const { setAddressFormData, setSavedBillingIndex, setSavedShippingIndex } =
    useUserStore();

  useEffect(() => {
    setAddressFormData(null);
    setSavedShippingIndex(0);
    setSavedBillingIndex(0);
  }, []);

  return <>{children}</>;
};

export default CartContainer;
