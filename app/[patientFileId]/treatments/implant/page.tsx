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
import { implantProductFields } from './filterFields';
import NewProductView from '../../../../components/NewProductView';
import { DISCOVERYMODE, FLOW } from '../../../../__mocks__/flow';

export default function Implant({
  params,
}: {
  readonly params: { patientFileId: string };
}) {
  const { setActiveProductTab, setActivePatientFileId } = useProductStore();

  useAvailableTeethByTreatment({
    patientFileId: params.patientFileId,
    productType: PRODUCT_TYPE.IMPLANT,
    acceptedTreatmentGroups: [TREATMENT_GROUP.IMPLANT_GROUP],
  });

  useEffect(() => {
    setActiveProductTab(PRODUCT_TYPE.IMPLANT);
    setActivePatientFileId(params.patientFileId);
  }, []);

  useEffect(() => {
    if (params.patientFileId === DISCOVERYMODE) {
      localStorage.setItem('lastTab', FLOW.implant.id);
    }
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/implant`}>
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
            productType={PRODUCT_TYPE.IMPLANT}
            productFields={implantProductFields}
            areaType={AREA_TYPE.ROOT}
            patientFileId={params.patientFileId}
          />
        </Suspense>
      </View>
    </Tabs.Panel>
  );
}
