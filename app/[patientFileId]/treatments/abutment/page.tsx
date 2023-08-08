'use client';

import { Suspense, useEffect } from 'react';
import { Tabs, View } from 'reshaped';
import ProductList from '../../../../components/ProductList';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import Loader from '../../../../components/Loader';
import {
  AREA_TYPE,
  TREATMENT_GROUP,
  PRODUCT_TYPE,
} from '../../../../zustand/product/interface';
import { useAvailableTeethByTreatment } from '../../../../hooks/useAvailableTeethByTreatment';
import { useProductStore } from '../../../../zustand/product';

export default function Abutment({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActiveProductTab, setActivePatientFileId } = useProductStore();

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

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/abutment`}>
      <CarouselTeeth />
      <View direction='column' width='100%' align='center'>
        <View
          direction='row'
          gap={12}
          maxWidth='1280px'
          width='100%'
          justify='center'
        >
          <View.Item columns={9}>
            <View paddingEnd={6} paddingTop={8}>
              <Suspense
                fallback={
                  <View height='70vh'>
                    <Loader />
                  </View>
                }
              >
                <ProductList
                  productType={PRODUCT_TYPE.ABUTMENT}
                  areaType={AREA_TYPE.CROWN}
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
