'use client';

import React, { Suspense, useEffect, useMemo } from 'react';
import OrderDashboard from '../components/OrderDashboard';
import Loader from '../components/Loader';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'fauna-typed';
import { Query } from '../fqlx-generated/typedefs';
import { redirect } from 'next/navigation';

export default function Home() {
  const { user, isSignedIn } = useUser();
  const query = useQuery<Query>();

  if (!isSignedIn) {
    redirect('/discovery-mode/treatments');
  }

  const faunaUser = useMemo(
    () => query.User.firstWhere(`user => user.clerkId == "${user?.id}"`).exec(),
    [user]
  );

  useEffect(() => {
    if (faunaUser === null) {
      redirect('/users/sync');
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <OrderDashboard />
    </Suspense>
  );
}
