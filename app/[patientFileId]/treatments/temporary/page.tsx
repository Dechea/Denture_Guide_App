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
import { temporaryProductFields } from './filterFields';
import NewProductView from '../../../../components/NewProductView';

export default function Temporary({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActiveProductTab, setActivePatientFileId } = useProductStore();

  useAvailableTeethByTreatment({
    patientFileId: params.patientFileId,
    productType: PRODUCT_TYPE.TEMPORARY_ABUTMENT,
    acceptedTreatmentGroups: [TREATMENT_GROUP.IMPLANT_GROUP],
  });

  useEffect(() => {
    setActiveProductTab(PRODUCT_TYPE.TEMPORARY_ABUTMENT);
    setActivePatientFileId(params.patientFileId);
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/temporary`}>
      <CarouselTeeth />
      <View
        width='100%'
        align='center'
        paddingTop={5.5}
        paddingInline={35}
        paddingBottom={16}
      >
        <Suspense
          fallback={
            <View height='70vh'>
              <Loader />
            </View>
          }
        >
          <NewProductView
            productType={PRODUCT_TYPE.TEMPORARY_ABUTMENT}
            productFields={temporaryProductFields}
            areaType={AREA_TYPE.ROOT}
            patientFileId={params.patientFileId}
          />
        </Suspense>
      </View>
    </Tabs.Panel>
  );
}
