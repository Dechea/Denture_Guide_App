'use client';

import { useQuery } from 'fqlx-client';
import { useCallback, useMemo } from 'react';
import { Query, SelectedProduct } from '../fqlx-generated/typedefs';

export const useProductCalculations = (patientFileId: string) => {
  const query = useQuery<Query>();

  const patientFile = useMemo(
    () =>
      query.PatientFile.firstWhere(
        `(patientFile) => patientFile.id == "${patientFileId}"`
      )
        .project({ teeth: true })
        .exec(),
    [patientFileId, query]
  );

  const totalProductsInCart = useMemo(
    () =>
      patientFile.teeth?.reduce((acc, tooth) => {
        return (
          acc +
          (Number(tooth.root?.treatmentDoc?.selectedProducts?.length) ?? 0) +
          (Number(tooth.crown?.treatmentDoc?.selectedProducts?.length) ?? 0)
        );
      }, 0),
    [patientFile]
  );

  const sumOfCostOfProducts = useCallback(
    (products: SelectedProduct[]): number => {
      return (
        products?.reduce((acc, { selectedProduct, quantity }) => {
          if (selectedProduct?.localizations?.length) {
            return (
              acc +
              (Number(selectedProduct?.localizations[1]?.price?.amount) ?? 0) *
                (Number(quantity) ?? 0)
            );
          }

          return acc;
        }, 0) || 0
      );
    },
    []
  );

  const totalCostOfProductsInCart = useMemo(
    () =>
      patientFile.teeth?.reduce((acc, tooth) => {
        return (
          acc +
          sumOfCostOfProducts(
            tooth.root?.treatmentDoc?.selectedProducts ?? []
          ) +
          sumOfCostOfProducts(tooth.crown?.treatmentDoc?.selectedProducts ?? [])
        );
      }, 0),
    [patientFile]
  );

  return { totalProductsInCart, totalCostOfProductsInCart };
};
