'use client';

import { useLocalStorage, useQuery } from 'fauna-typed';
import { useMemo } from 'react';
import { PatientFile, Query } from '../fqlx-generated/typedefs';

export const useProductCalculations = (patientFileId: string) => {
  const query = useQuery<Query>();

  const { value: discoveryModePatientFile } = useLocalStorage(
    'discovery-mode',
    'PatientFile'
  );

  const patientFile = useMemo(() => {
    if (patientFileId === 'discovery-mode') {
      return discoveryModePatientFile as PatientFile;
    } else {
      return query.PatientFile.byId(patientFileId)
        .project({ teeth: true })
        .exec();
    }
  }, [patientFileId, query, discoveryModePatientFile]);

  const selectedProducts = useMemo(
    () =>
      patientFile.teeth?.flatMap((tooth) => [
        ...(tooth.root?.treatmentDoc.selectedProducts ?? []),
        ...(tooth.crown?.treatmentDoc.selectedProducts ?? []),
      ]),
    [patientFile]
  );

  const {
    totalProductsInCart,
    totalCostOfProductsInCart,
    totalCostOfProductsInCartWithTax,
  } = useMemo(
    () =>
      selectedProducts?.reduce(
        (acc, { selectedProduct, quantity }) => {
          acc.totalProductsInCart += Number(quantity);

          if (selectedProduct?.localizations?.length) {
            const amount = Number(
              selectedProduct?.localizations[1]?.price?.amount
            );
            const price = isNaN(amount) ? 0 : amount;
            const localTax = Number(
              selectedProduct?.localizations[1]?.price?.tax
            );
            const tax = isNaN(localTax) ? 0 : localTax;
            const priceWithoutTax = price * Number(quantity);

            acc.totalCostOfProductsInCartWithTax +=
              (priceWithoutTax * Number(tax ?? 0)) / 100 + priceWithoutTax;
            acc.totalCostOfProductsInCart += priceWithoutTax;
          }

          return acc;
        },
        {
          totalProductsInCart: 0,
          totalCostOfProductsInCart: 0,
          totalCostOfProductsInCartWithTax: 0,
        }
      ) ?? {
        totalProductsInCart: 0,
        totalCostOfProductsInCart: 0,
        totalCostOfProductsInCartWithTax: 0,
      },
    [selectedProducts]
  );

  return {
    selectedProducts,
    totalProductsInCart,
    totalCostOfProductsInCart,
    totalCostOfProductsInCartWithTax,
  };
};
