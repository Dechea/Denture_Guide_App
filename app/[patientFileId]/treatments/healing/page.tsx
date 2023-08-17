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
      <View direction="column" width="100%" align="center">
        <View
          direction="row"
          gap={12}
          maxWidth="1280px"
          width="100%"
          justify="center"
        >
          <View.Item columns={{ s: 12, m: 9 }}>
            <View paddingTop={5.5} className="mb-x24">
              <Suspense
                fallback={
                  <View height="70vh">
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
          </View.Item>
        </View>
      </View>
    </Tabs.Panel>
  );
}
