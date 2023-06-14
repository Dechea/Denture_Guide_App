'use client';

import React, { Suspense } from 'react';
import OrderDashboard from '../components/OrderDashboard';

export default function Home() {
  return (
    <Suspense fallback={'Loading Orders...'}>
      <OrderDashboard />
    </Suspense>
  );
}
