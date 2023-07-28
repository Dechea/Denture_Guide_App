'use client';

import { useEffect } from 'react';
import { useProductStore } from '../zustand/product';
import { useQuery } from 'fqlx-client';
import { PatientFile, Query } from '../fqlx-generated/typedefs';
import { AREA_TYPE, TREATMENT_GROUP } from '../zustand/product/interface';

interface UseAvailableTeethByTreatmentProps {
  patientFileId: string;
  productType: string;
  acceptedTreatmentGroups: TREATMENT_GROUP[];
}

export function useAvailableTeethByTreatment({
  patientFileId,
  productType,
  acceptedTreatmentGroups,
}: UseAvailableTeethByTreatmentProps) {
  const {
    setAvailableTeethByProductType,
    setSelectedProducts,
    setAcceptedTreatmentGroups,
  } = useProductStore();
  const query = useQuery<Query>();

  const patientFile: PatientFile = query.PatientFile.byId(patientFileId)
    .project({ teeth: true })
    .exec();

  const patientFileTeeth = [...(patientFile.teeth || [])];

  useEffect(() => {
    const availableTeeth: number[] = [];
    const alreadySelectedProducts: { [key: number]: string } = {};

    patientFileTeeth.forEach((tooth) => {
      const toothNumber = Number(tooth.name);
      availableTeeth.push(Number(toothNumber));

      Object.values(AREA_TYPE).forEach((area) => {
        if (tooth[area]?.treatmentDoc?.selectedProducts?.length) {
          tooth[area]?.treatmentDoc?.selectedProducts?.forEach(
            ({ selectedProduct }) => {
              if (
                selectedProduct?.[productType as keyof typeof selectedProduct]
              ) {
                alreadySelectedProducts[toothNumber] =
                  selectedProduct?.id ?? '';
              }
            }
          );
        }
      });
    });

    setAvailableTeethByProductType(availableTeeth);
    setSelectedProducts(alreadySelectedProducts);
    setAcceptedTreatmentGroups(acceptedTreatmentGroups);

    return () => {
      setAvailableTeethByProductType([]);
      setSelectedProducts({});
    };
  }, []);
}
