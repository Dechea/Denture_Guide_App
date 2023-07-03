import TreatmentTabs from '../../../components/TreatmentTabs';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { patientFileId: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <TreatmentTabs patientFileId={params.patientFileId}>
      {children}
    </TreatmentTabs>
  );
}
