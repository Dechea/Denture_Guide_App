'use client';

import { useEffect } from 'react';
import { useProductStore } from '../zustand/product';
import { useQuery } from 'fqlx-client';
import { PatientFile, Query } from '../fqlx-generated/typedefs';
import { AREA_TYPE, GROUP_TYPE } from '../zustand/product/interface';

interface UseAvailableTeethByTreatmentProps {
  patientFileId: string;
  productType: string;
  acceptedTreatmentGroups: GROUP_TYPE[];
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

      // for (const [area, values] of Object.entries(acceptableTreatment)) {
      //   // @ts-expect-error
      //   if (values.includes(tooth[area]?.treatmentDoc?.treatment?.name)) {
      //     // @ts-expect-error
      //     if (tooth[area]?.treatmentDoc?.selectedProducts?.length) {
      //       // @ts-expect-error
      //       tooth[area]?.treatmentDoc?.selectedProducts.forEach(
      //         // @ts-expect-error
      //         ({ selectedProduct }) => {
      //           if (Object.keys(selectedProduct).includes(productType)) {
      //             alreadySelectedProducts[toothNumber] = selectedProduct.id;
      //           }
      //         }
      //       );
      //     }
      //     break;
      //   }
      // }

      Object.values(AREA_TYPE).forEach((area) => {
        if (tooth[area]?.treatmentDoc?.selectedProducts?.length) {
          tooth[area]?.treatmentDoc?.selectedProducts?.forEach(
            ({ selectedProduct }) => {
              // @ts-ignore
              if (Object.keys(selectedProduct).includes(productType)) {
                alreadySelectedProducts[toothNumber] =
                  selectedProduct?.id || '';
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
