import Header from '../../components/Header';
import TreatmentTabs from '../../components/TreatmentTabs';
import { Suspense } from 'react';
import Loader from '../../components/Loader';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Header patientFileId={params.patientFileId} />
      <TreatmentTabs patientFileId={params.patientFileId}>
        {children}
      </TreatmentTabs>
    </Suspense>
  );
}
