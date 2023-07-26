'use client';

import { Tabs, View } from 'reshaped';
import TeethDiagramWithTreatments from '../../../components/TeethDiagram';
import { useProductStore } from '../../../zustand/product';
import { useEffect } from 'react';

export default function Treatment({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActivePatientFileId } = useProductStore();
  useEffect(() => {
    console.log('id');
    setActivePatientFileId(params.patientFileId);
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments`}>
      <View paddingTop={4}>
        <TeethDiagramWithTreatments patientFileId={params.patientFileId} />
      </View>
    </Tabs.Panel>
  );
}
