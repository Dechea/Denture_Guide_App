'use client';

import { Suspense, useEffect } from 'react';
import { Tabs, View } from 'reshaped';
import ProductList from '../../../../components/ProductList';
import { ProductFilterForm } from '../../../../components/ProductFilterForm';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import Loader from '../../../../components/Loader';
import { filterCategories } from './filterCategories';
import {
  AREA_TYPE,
  TREATMENT_GROUP,
  PRODUCT_TYPE,
} from '../../../../zustand/product/interface';
import { useAvailableTeethByTreatment } from '../../../../hooks/useAvailableTeethByTreatment';
import { useProductStore } from '../../../../zustand/product';

export default function Implant({
  params,
}: {
  params: { patientFileId: string };
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

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/implant`}>
      <CarouselTeeth />

      <View direction="column" width="100%" align="center">
        <View
          direction="row"
          gap={12}
          maxWidth="1280px"
          width="100%"
          justify="center"
        >
          <View.Item columns={3} className="sticky !top-[180px]">
            <View
              paddingStart={6}
              paddingTop={8}
              height="calc(100vh - 240px)"
              className="overflow-y-auto scrollbar-0"
            >
              <Suspense
                fallback={
                  <View height="70vh">
                    <Loader />
                  </View>
                }
              >
                <ProductFilterForm
                  filterCategories={filterCategories}
                  productType={PRODUCT_TYPE.IMPLANT}
                />
              </Suspense>
            </View>
          </View.Item>

          <View.Item columns={9}>
            <View paddingEnd={6} paddingTop={8}>
              <Suspense
                fallback={
                  <View height="70vh">
                    <Loader />
                  </View>
                }
              >
                <ProductList
                  productType={PRODUCT_TYPE.IMPLANT}
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
