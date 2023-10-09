'use client';

import { Tabs, View } from 'reshaped';
import TeethDiagramWithTreatments from '../../../components/TeethDiagram';
import { useProductStore } from '../../../zustand/product';
import { useEffect } from 'react';
import { DISCOVERYMODE, FLOW } from '../../../__mocks__/flow';

export default function Treatment({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActivePatientFileId } = useProductStore();

  useEffect(() => {
    setActivePatientFileId(params.patientFileId);
  }, []);

  useEffect(() => {
    if (params.patientFileId === DISCOVERYMODE) {
      localStorage.setItem('lastTab', FLOW.treatments.id);
    }
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments`}>
      <View paddingTop={4} align={'center'}>
        <TeethDiagramWithTreatments patientFileId={params.patientFileId} />
      </View>
    </Tabs.Panel>
  );
}
