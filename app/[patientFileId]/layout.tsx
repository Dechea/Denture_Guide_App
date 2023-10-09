import { Suspense } from 'react';
import { View } from 'reshaped';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import TreatmentsContainer from '../../components/TreatmentsContainer';

interface RootLayoutProps {
  readonly children: React.ReactNode;
  readonly params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <Suspense
      fallback={
        <View height='100%' width='100%' justify='center' align='center'>
          <Loader />
        </View>
      }
    >
      <TreatmentsContainer patientFileId={params.patientFileId}>
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
      </TreatmentsContainer>
    </Suspense>
  );
}
