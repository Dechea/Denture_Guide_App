'use client';

import { Suspense } from 'react';
import { Tabs, View } from 'reshaped';
import ProductList from '../../../../components/ProductList';
import { ProductFilterForm } from '../../../../components/ProductFilterForm';
import CarouselTeeth from '../../../../components/CarouselTeeth';
import Loader from '../../../../components/Loader';
import { filterCategories } from './filterCategories';
import { PRODUCT_TYPE } from '../../../../zustand/product/interface';
import { useAvailableTeethByTreatment } from '../../../../hooks/useAvailableTeethByTreatment';
import {
  ARTIFICIAL_CROWN,
  BRIDGE_ANCHOR,
  BRIDGE_LINK,
  IMPLANT,
  PROSTHESIS_ANCHOR,
  PROSTHESIS_LINK,
} from '../../../../components/TeethDiagram/teeth/constants/treatmentVariants';

const acceptableTreatment = {
  rootVariant: [IMPLANT],
  crownVariant: [
    ARTIFICIAL_CROWN,
    PROSTHESIS_ANCHOR,
    PROSTHESIS_LINK,
    BRIDGE_ANCHOR,
    BRIDGE_LINK,
  ],
};

export default function Abutment({
  params,
}: {
  params: { patientFileId: string };
}) {
  useAvailableTeethByTreatment({ acceptableTreatment });

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/abutment`}>
      <CarouselTeeth />

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
                productType={PRODUCT_TYPE.ABUTMENT}
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
              <ProductList productType={PRODUCT_TYPE.ABUTMENT} />
            </Suspense>
          </View>
        </View.Item>
      </View>
    </Tabs.Panel>
  );
}
