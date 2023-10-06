'use client';

import { Suspense, useEffect } from 'react';
import { Tabs, View } from 'reshaped';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import Loader from '../../../../components/Loader';
import {
  AREA_TYPE,
  TREATMENT_GROUP,
  PRODUCT_TYPE,
} from '../../../../zustand/product/interface';
import { useAvailableTeethByTreatment } from '../../../../hooks/useAvailableTeethByTreatment';
import { useProductStore } from '../../../../zustand/product';
import { abutmentProductFields } from './filterFields';
import NewProductView from '../../../../components/NewProductView';
import { FLOW } from '../../../../__mocks__/flow';

export default function Abutment({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActiveProductTab, setActivePatientFileId, filterFields } =
    useProductStore();

  useAvailableTeethByTreatment({
    patientFileId: params.patientFileId,
    productType: PRODUCT_TYPE.ABUTMENT,
    acceptedTreatmentGroups: [
      TREATMENT_GROUP.IMPLANT_GROUP,
      TREATMENT_GROUP.ABUTMENT_GROUP,
    ],
  });

  useEffect(() => {
    setActiveProductTab(PRODUCT_TYPE.ABUTMENT);
    setActivePatientFileId(params.patientFileId);
  }, []);

  const filteredAbutmentProductFields =
    filterFields?.angle === '0'
      ? abutmentProductFields.filter((field) => field.name !== 'type')
      : abutmentProductFields;

  localStorage.setItem('lastTab', FLOW.abutment.id);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/abutment`}>
      <CarouselTeeth />
      <View
        width='100%'
        align='center'
        paddingTop={{ s: 4, l: 6 }}
        paddingInline={{ s: 0, xl: 35 }}
        paddingBottom={{ l: 16 }}
      >
        <Suspense
          fallback={
            <View height='70svh'>
              <Loader />
            </View>
          }
        >
          <NewProductView
            productType={PRODUCT_TYPE.ABUTMENT}
            productFields={filteredAbutmentProductFields}
            areaType={AREA_TYPE.CROWN}
            patientFileId={params.patientFileId}
          />
        </Suspense>
      </View>
    </Tabs.Panel>
  );
}
