'use client';

import { useEffect } from 'react';
import { useUserStore } from '../../../zustand/user';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setAddressFormData, setSavedBillingIndex, setSavedShippingIndex } =
    useUserStore();

  useEffect(() => {
    setAddressFormData(null);
    setSavedShippingIndex(0);
    setSavedBillingIndex(0);
  }, []);

  return <>{children}</>;
}
