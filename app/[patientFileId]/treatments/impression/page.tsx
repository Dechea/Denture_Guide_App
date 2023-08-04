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

export default function Impression({
  params,
}: {
  params: { patientFileId: string };
}) {
  const { setActiveProductTab, setActivePatientFileId } = useProductStore();

  useAvailableTeethByTreatment({
    patientFileId: params.patientFileId,
    productType: PRODUCT_TYPE.IMPRESSION,
    acceptedTreatmentGroups: [TREATMENT_GROUP.IMPLANT_GROUP],
  });

  useEffect(() => {
    setActiveProductTab(PRODUCT_TYPE.IMPRESSION);
    setActivePatientFileId(params.patientFileId);
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/impression`}>
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
                  productType={PRODUCT_TYPE.IMPRESSION}
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
                  productType={PRODUCT_TYPE.IMPRESSION}
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
