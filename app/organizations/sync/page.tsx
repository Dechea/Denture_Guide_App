'use client';

import { useOrganization } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../../../zustand/user';

const Page = () => {
  const { organization } = useOrganization();
  const router = useRouter();
  const { setOrganizationId } = useUserStore();

  const loadOrganization = async () => {
    if (organization === null) {
      setOrganizationId('375287427124691152');
      router.push('/');
    }
  };

  useEffect(() => {
    loadOrganization();
  }, [organization]);

  return null;
};

export default Page;
