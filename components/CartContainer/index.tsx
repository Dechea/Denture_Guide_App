'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '../../zustand/user';

const CartContainer = ({ children }: { children: React.ReactNode }) => {
  const { setAddressFormData } = useUserStore();

  useEffect(() => {
    setAddressFormData(null);
  }, []);

  return <>{children}</>;
};

export default CartContainer;
