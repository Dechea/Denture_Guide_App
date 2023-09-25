'use client';

import { useQuery } from 'fqlx-client';
import { useMemo } from 'react';
import { Query } from '../fqlx-generated/typedefs';

export const useProductCalculations = (patientFileId: string) => {
  const query = useQuery<Query>();

  const patientFile = query.PatientFile.byId(patientFileId)
    .project({ teeth: true })
    .exec();

  const selectedProducts = useMemo(
    () =>
      patientFile.teeth.flatMap((tooth) => [
        ...(tooth.root?.treatmentDoc?.selectedProducts ?? []),
        ...(tooth.crown?.treatmentDoc?.selectedProducts ?? []),
      ]),
    [patientFile]
  );

  const {
    totalProductsInCart,
    totalCostOfProductsInCart,
    totalCostOfProductsInCartWithTax,
  } = useMemo(
    () =>
      selectedProducts.reduce(
        (acc, { selectedProduct, quantity }) => {
          acc.totalProductsInCart += Number(quantity);

          if (selectedProduct?.localizations?.length) {
            const amount = Number(
              selectedProduct?.localizations[1]?.price?.amount
            );
            const price = isNaN(amount) ? 0 : amount;

            const tax = Number(selectedProduct?.localizations[1]?.price?.tax);

            const priceWithoutTax = price * Number(quantity);
            acc.totalCostOfProductsInCartWithTax +=
              (priceWithoutTax * tax) / 100 + priceWithoutTax;

            acc.totalCostOfProductsInCart += Number(quantity) * price;
          }

          return acc;
        },
        {
          totalProductsInCart: 0,
          totalCostOfProductsInCart: 0,
          totalCostOfProductsInCartWithTax: 0,
        }
      ),
    [selectedProducts]
  );

  return {
    selectedProducts,
    totalProductsInCart,
    totalCostOfProductsInCart,
    totalCostOfProductsInCartWithTax,
  };
};
