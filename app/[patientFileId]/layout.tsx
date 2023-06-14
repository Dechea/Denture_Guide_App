import { View } from 'reshaped';
import Header from '../../components/Header';
import TreatmentTabs from '../../components/TreatmentTabs';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { patientFileId: string };
}) {
  return (
    <View>
      <Header />
      <TreatmentTabs patientFileId={params.patientFileId}>
        {children}
      </TreatmentTabs>
    </View>
  );
}
