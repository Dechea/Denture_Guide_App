'use client';

import { Suspense, useEffect, useState } from 'react';
import { Tabs, View } from 'reshaped';
import { useRouter } from 'next/navigation';
import ImplantList from '../../../../components/ImplantList';
import { ImplantFilterForm } from '../../../../components/ImplantFilterForm';
import SelectTeeth from '../../../../components/SelectedTeeth';
import Loader from '../../../../components/Loader';

export default function Implant({
  params,
}: {
  params: { patientFileId: string };
}) {
  const [selectedImplants, _setImplants] = useState<{
    [key: string]: boolean;
  }>({});
  const selectedTeeth = [14, 22];

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(selectedImplants).length === selectedTeeth.length) {
      router.push(`/${params.patientFileId}/treatments/abutment`);
    }
  }, [selectedImplants, selectedTeeth.length]);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/implant`}>
      <SelectTeeth />

      <View paddingInline={16} paddingTop={18}>
        <View direction='row' gap={11}>
          <View.Item columns={3}>
            <ImplantFilterForm />
          </View.Item>

          <View.Item columns={9}>
            <Suspense
              fallback={
                <View height='70vh'>
                  <Loader />
                </View>
              }
            >
              {/* <ImplantList /> */}
            </Suspense>
          </View.Item>
        </View>
      </View>
    </Tabs.Panel>
  );
}
