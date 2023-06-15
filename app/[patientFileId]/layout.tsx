import { View } from 'reshaped';
import Header from '../../components/Header';
import TreatmentTabs from '../../components/TreatmentTabs';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <View>
      <Header patientFileId={params.patientFileId} />
      <TreatmentTabs patientFileId={params.patientFileId}>
        {children}
      </TreatmentTabs>
    </View>
  );
}
