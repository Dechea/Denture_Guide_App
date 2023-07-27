'use client';

import cx from 'classnames';
import { useQuery } from 'fqlx-client';
import { useMemo } from 'react';
import { View } from 'reshaped';
import { Query, SelectedProduct } from '../../fqlx-generated/typedefs';
import { useProductStore } from '../../zustand/product';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
import { CarouselTooth } from '../CarouselTooth';
interface CarouselGroupTabsProps {
  active: boolean;
  treatmentToothData: TreatmentVisualization[];
  patientFileId: string;
}

export const CarouselGroupTabs = ({
  active,
  treatmentToothData,
  patientFileId,
}: CarouselGroupTabsProps) => {
  const { selectedProducts } = useProductStore((state) => state);
  const query = useQuery<Query>();

  const patientFile = useMemo(
    () => query.PatientFile.byId(patientFileId).project({ teeth: true }).exec(),
    [patientFileId, query.PatientFile]
  );

  return (
    <View
      direction='row'
      borderRadius='small'
      paddingInline={2}
      gap={1}
      className={cx(
        {
          'opacity-50': !active,
          'bg-[--rs-color-background-neutral-faded] !border-[--rs-color-border-neutral-faded]':
            active,
        },
        'hover:border-[--rs-color-border-neutral-faded] border-[1px] border-[rgba(0.0,0.0,0.0,0.0)]'
      )}
    >
      {treatmentToothData?.map((tooth) => {
        const selected = !!selectedProducts[tooth.toothNumber];
        const toothData = patientFile.teeth.find(
          ({ name }) => Number(name) === tooth.toothNumber
        );

        const products: SelectedProduct[] = [
          ...(toothData?.root.treatmentDoc?.selectedProducts ?? []),
          ...(toothData?.crown.treatmentDoc?.selectedProducts ?? []),
        ];

        return (
          <CarouselTooth
            key={tooth.toothNumber}
            products={products}
            tooth={tooth}
            selected={selected}
          />
        );
      })}
    </View>
  );
};
