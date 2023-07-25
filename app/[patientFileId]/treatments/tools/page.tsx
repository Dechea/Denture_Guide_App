'use client';

import { Suspense } from 'react';
import { Tabs, View } from 'reshaped';
import ProductList from '../../../../components/ProductList';
import { ProductFilterForm } from '../../../../components/ProductFilterForm';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import Loader from '../../../../components/Loader';
import { filterCategories } from './filterCategories';
import {
  AREA_TYPE,
  TABGROUP_TYPE,
  PRODUCT_TYPE,
} from '../../../../zustand/product/interface';
import { useAvailableTeethByTreatment } from '../../../../hooks/useAvailableTeethByTreatment';

export default function Tools({
  params,
}: {
  params: { patientFileId: string };
}) {
  useAvailableTeethByTreatment({
    patientFileId: params.patientFileId,
    productType: PRODUCT_TYPE.TOOLS,
    acceptedTreatmentGroups: [
      TABGROUP_TYPE.IMPLANT_GROUP,
      TABGROUP_TYPE.ABUTMENT_GROUP,
      TABGROUP_TYPE.CROWN_GROUP,
    ],
  });

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/tools`}>
      <CarouselTeeth
        patientFileId={params.patientFileId}
        productType={PRODUCT_TYPE.TOOLS}
      />

      <View direction='row' gap={11}>
        <View.Item columns={3} className='sticky !top-[180px]'>
          <View
            paddingStart={6}
            paddingTop={8}
            height='calc(100vh - 240px)'
            className='overflow-y-auto scrollbar-0'
          >
            <Suspense
              fallback={
                <View height='70vh'>
                  <Loader />
                </View>
              }
            >
              <ProductFilterForm
                filterCategories={filterCategories}
                productType={PRODUCT_TYPE.TOOLS}
                showOptionsWithoutTitle
              />
            </Suspense>
          </View>
        </View.Item>

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
                productType={PRODUCT_TYPE.TOOLS}
                areaType={AREA_TYPE.ROOT}
                patientFileId={params.patientFileId}
              />
            </Suspense>
          </View>
        </View.Item>
      </View>
    </Tabs.Panel>
  );
}
