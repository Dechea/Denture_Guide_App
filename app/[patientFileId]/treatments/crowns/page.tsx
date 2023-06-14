import { Tabs } from 'reshaped';

export default function Crowns({
  params,
}: {
  params: { patientFileId: string };
}) {
  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/crowns`}>
      Crowns tab content
    </Tabs.Panel>
  );
}
