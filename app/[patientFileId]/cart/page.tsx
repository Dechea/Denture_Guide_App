'use client';

import { useMemo } from 'react';
import { View } from 'reshaped';
import { useQuery } from 'fqlx-client';
import { CartCostEstimation } from '../../../components/CartCostEstimation';
import CartHeader from '../../../components/CartHeader';
import CartItemsList from '../../../components/CartItemsList';
import { Query, Tooth } from '../../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../../hooks/useProductCalculations';
import { useProductCrudOps } from '../../../hooks/useProductCrudOps';
import { AREA_TYPE } from '../../../zustand/product/interface';

interface CartProps {
  params: { patientFileId: string };
}

export default function Cart({ params }: CartProps) {
  const query = useQuery<Query>();

  const { totalProductsInCart, totalCostOfProductsInCart } =
    useProductCalculations(params.patientFileId);

  const { addOrUpdateProductInFqlx } = useProductCrudOps({
    patientFileId: params.patientFileId,
  });

  const patientFile = useMemo(
    () =>
      query.PatientFile.firstWhere(
        `(product) => product.id == "${params.patientFileId}"`
      )
        .project({ patient: true, teeth: true })
        .exec(),
    [params.patientFileId, query]
  );

  const handleProductCountChange = async (
    quantity: number,
    toothNumber: number,
    productId: string
  ) => {
    const getMappedTeeth = (teeth: Tooth[]) => {
      teeth.forEach((tooth: Tooth) => {
        const localToothNumber = Number(tooth.name);
        for (const area of Object.values(AREA_TYPE)) {
          if (tooth[area].treatmentDoc?.selectedProducts?.length) {
            if (
              localToothNumber == toothNumber &&
              // @ts-ignore
              tooth[area]?.treatmentDoc?.selectedProducts[0]?.selectedProduct
                ?.id === productId
            ) {
              tooth[area].treatmentDoc.selectedProducts = [
                {
                  // @ts-ignore
                  selectedProduct: `Product.byId("${tooth[area].treatmentDoc.selectedProducts[0]?.selectedProduct?.id}")`,
                  quantity: quantity,
                },
              ];
            } else {
              tooth[area].treatmentDoc.selectedProducts = [
                {
                  // @ts-ignore
                  selectedProduct: `Product.byId("${tooth[area].treatmentDoc.selectedProducts[0]?.selectedProduct?.id}")`,
                  quantity:
                    // @ts-ignore
                    tooth[area].treatmentDoc.selectedProducts[0]?.quantity,
                },
              ];
            }
          }
        }
      });
    };

    addOrUpdateProductInFqlx(getMappedTeeth);
  };

  const handleDeleteProduct = async (
    toothNumber: number,
    productId: string
  ) => {
    const getMappedTeeth = (teeth: Tooth[]) => {
      teeth.forEach((tooth: Tooth) => {
        const localToothNumber = Number(tooth.name);
        for (const area of Object.values(AREA_TYPE)) {
          if (tooth[area].treatmentDoc?.selectedProducts?.length) {
            if (
              localToothNumber == toothNumber &&
              // @ts-ignore
              tooth[area].treatmentDoc.selectedProducts[0]?.selectedProduct
                ?.id === productId
            ) {
              tooth[area].treatmentDoc.selectedProducts = [];
            } else {
              tooth[area].treatmentDoc.selectedProducts = [
                {
                  // @ts-ignore
                  selectedProduct: `Product.byId("${tooth[area].treatmentDoc.selectedProducts[0]?.selectedProduct?.id}")`,
                  quantity:
                    // @ts-ignore
                    tooth[area].treatmentDoc.selectedProducts[0]?.quantity,
                },
              ];
            }
          }
        }
      });
    };

    addOrUpdateProductInFqlx(getMappedTeeth);
  };

  return (
    <View>
      <CartHeader totalProductsCount={totalProductsInCart} />

      <View
        direction='row'
        width='100%'
        paddingBlock={8}
        paddingInline={6}
        gap={35.5}
      >
        <View.Item columns={8}>
          <CartItemsList
            teeth={patientFile.teeth}
            onProductCountChange={handleProductCountChange}
            onDeleteProduct={handleDeleteProduct}
          />
        </View.Item>

        <View.Item columns={4}>
          <CartCostEstimation
            patientFileId={params.patientFileId}
            totalCostOfProducts={totalCostOfProductsInCart}
          />
        </View.Item>
      </View>
    </View>
  );
}
