'use client';

import { Suspense } from 'react';
import { View } from 'reshaped';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { isSignedIn } = useUser();
  const isDiscoveryModeEnabled = params.patientFileId === 'discovery-mode';

  if (!isSignedIn && !isDiscoveryModeEnabled) {
    redirect('/discovery-mode/treatments');
  } else if (isSignedIn && isDiscoveryModeEnabled) {
    redirect('/');
  }

  return (
    <>
      <Suspense
        fallback={
          <View height='56px' width='100%' justify='center' align='center'>
            <Loader />
          </View>
        }
      >
        <Header patientFileId={params.patientFileId} />
      </Suspense>
      {children}
    </>
  );
}
