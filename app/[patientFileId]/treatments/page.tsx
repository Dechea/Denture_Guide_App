'use client';

import { Tabs, View } from 'reshaped';
import TeethDiagramWithTreatments from '../../../components/TeethDiagram';

export default function Treatment({
  params,
}: {
  params: { patientFileId: string };
}) {
  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments`}>
      <View paddingTop={12}>
        <TeethDiagramWithTreatments patientFileId={params.patientFileId} />
      </View>
    </Tabs.Panel>
  );
}
