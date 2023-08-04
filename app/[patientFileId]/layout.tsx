import { Suspense } from 'react';
import { View } from 'reshaped';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <Suspense
        fallback={
          <View height="56px" width="100%" justify="center" align="center">
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
