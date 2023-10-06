'use client';

import { Suspense, useEffect } from 'react';
import { View } from 'reshaped';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useLocalStorage } from 'fauna-typed';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const {
    value: discoveryModePatientFile,
    setValue: setDiscoveryModePatientFile,
  } = useLocalStorage('discovery-mode', 'PatientFile');
  const { isSignedIn } = useUser();
  const isDiscoveryModeEnabled = params.patientFileId === 'discovery-mode';

  useEffect(() => {
    if (isSignedIn === undefined) {
      return;
    }

    if (!isSignedIn && !isDiscoveryModeEnabled) {
      redirect('/discovery-mode/treatments');
    } else if (isSignedIn && isDiscoveryModeEnabled) {
      redirect('/');
    }
  }, [isSignedIn, isDiscoveryModeEnabled]);

  useEffect(() => {
    if (isDiscoveryModeEnabled && discoveryModePatientFile === null) {
      localStorage.removeItem('discovery-mode');
    }
  }, [isDiscoveryModeEnabled, discoveryModePatientFile]);

  useEffect(() => {
    if (isDiscoveryModeEnabled) {
      setDiscoveryModePatientFile({
        ...discoveryModePatientFile,
        patient: {
          ...discoveryModePatientFile.patient,
          name: 'Untitled order',
        },
      });
    }
  }, []);

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
