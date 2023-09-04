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
import { healingProductFields } from './filterFields';
import NewProductView from '../../../../components/NewProductView';

export default function Healing({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActiveProductTab, setActivePatientFileId } = useProductStore();

  useAvailableTeethByTreatment({
    patientFileId: params.patientFileId,
    productType: PRODUCT_TYPE.HEALING_ABUTMENT,
    acceptedTreatmentGroups: [TREATMENT_GROUP.IMPLANT_GROUP],
  });

  useEffect(() => {
    setActiveProductTab(PRODUCT_TYPE.HEALING_ABUTMENT);
    setActivePatientFileId(params.patientFileId);
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/healing`}>
      <CarouselTeeth />
      <View
        width='100%'
        align='center'
        paddingTop={{ s: 4, l: 6 }}
        paddingInline={{ s: 0, l: 35 }}
        paddingBottom={{ l: 16 }}
      >
        <Suspense
          fallback={
            <View height='70vh'>
              <Loader />
            </View>
          }
        >
          <NewProductView
            productType={PRODUCT_TYPE.HEALING_ABUTMENT}
            productFields={healingProductFields}
            areaType={AREA_TYPE.ROOT}
            patientFileId={params.patientFileId}
          />
        </Suspense>
      </View>
    </Tabs.Panel>
  );
}
