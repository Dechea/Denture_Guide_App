'use client';

import React, { Suspense } from 'react';
import OrderDashboard from '../components/OrderDashboard';
import Loader from '../components/Loader';

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <OrderDashboard />
    </Suspense>
  );
}
