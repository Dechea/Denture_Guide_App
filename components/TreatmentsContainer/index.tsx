'use client';

import { useUser } from '@clerk/nextjs';
import { useLocalStorage } from 'fauna-typed';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { DISCOVERYMODE } from '../../__mocks__/flow';

const TreatmentsContainer = ({
  children,
  patientFileId,
}: {
  patientFileId: string;
  children: React.ReactNode;
}) => {
  const {
    value: discoveryModePatientFile,
    setValue: setDiscoveryModePatientFile,
  } = useLocalStorage(`${DISCOVERYMODE}`, 'PatientFile');
  const { isSignedIn } = useUser();
  const isDiscoveryModeEnabled = patientFileId === `${DISCOVERYMODE}`;

  useEffect(() => {
    if (isSignedIn === undefined) {
      return;
    }

    if (!isSignedIn && !isDiscoveryModeEnabled) {
      redirect(`/${DISCOVERYMODE}/treatments`);
    } else if (isSignedIn && isDiscoveryModeEnabled) {
      redirect('/');
    }
  }, [isSignedIn, isDiscoveryModeEnabled]);

  useEffect(() => {
    if (isDiscoveryModeEnabled && discoveryModePatientFile === null) {
      localStorage.removeItem(`${DISCOVERYMODE}`);
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

  return <>{children}</>;
};

export default TreatmentsContainer;
