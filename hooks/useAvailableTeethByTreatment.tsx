'use client';

import { useEffect } from 'react';
import { useProductStore } from '../zustand/product';
import { useQuery } from 'fqlx-client';
import { PatientFile, Query } from '../fqlx-generated/typedefs';

interface UseAvailableTeethByTreatmentProps {
  acceptableTreatment: { [key: string]: string[] };
  patientFileId: string;
  productType: string;
}

export function useAvailableTeethByTreatment({
  acceptableTreatment,
  patientFileId,
  productType,
}: UseAvailableTeethByTreatmentProps) {
  const { setAvailableTeethByProductType, setSelectedProducts } =
    useProductStore();
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

      for (const [area, values] of Object.entries(acceptableTreatment)) {
        // @ts-expect-error
        if (values.includes(tooth[area]?.treatmentDoc?.treatment?.name)) {
          availableTeeth.push(Number(toothNumber));
          // @ts-expect-error
          if (tooth[area]?.treatmentDoc?.selectedProducts?.length) {
            // @ts-expect-error
            tooth[area]?.treatmentDoc?.selectedProducts.forEach(
              // @ts-expect-error
              ({ selectedProduct }) => {
                if (Object.keys(selectedProduct).includes(productType)) {
                  alreadySelectedProducts[toothNumber] = selectedProduct.id;
                }
              }
            );
          }
          break;
        }
      }
    });

    setAvailableTeethByProductType(availableTeeth);
    setSelectedProducts(alreadySelectedProducts);

    return () => {
      setAvailableTeethByProductType([]);
      setSelectedProducts({});
    };
  }, []);
}
