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

export default function Abutment({
  params,
}: {
  params: { patientFileId: string };
}) {
  const {
    setActiveProductTab,
    setActivePatientFileId,
    filterFields: productState,
  } = useProductStore();

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
    productState?.angle === '0'
      ? abutmentProductFields.filter((field) => field.name !== 'type')
      : abutmentProductFields;

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/abutment`}>
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
                  productType={PRODUCT_TYPE.ABUTMENT}
                  productFields={filteredAbutmentProductFields}
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
