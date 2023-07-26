'use client';

import { Icon, Text, View, MenuItem, Card } from 'reshaped';
import cx from 'classnames';
import ToothIcon from '../Icons/Tooth';
import { SelectedProducts, useProductStore } from '../../zustand/product';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { useEffect, useState } from 'react';

interface ProductToothListProps {
  productId: string;
  onClickProduct: (
    productToDelete: string,
    toothNumber: number,
    selectedProducts: SelectedProducts
  ) => void;
}

const ProductToothList = ({
  productId,
  onClickProduct,
}: ProductToothListProps) => {
  const { activeTreatmentGroup, selectedProducts, setSelectedProducts } =
    useProductStore();
  const { getToothGroups } = useTreatmentsByGroup();
  const [groupIndex, setGroupIndex] = useState('0');
  const toothGroups = getToothGroups();

  useEffect(() => {
    setGroupIndex(activeTreatmentGroup);
  }, [activeTreatmentGroup]);

  const handleClickOnToothOption = (toothNumber: number) => {
    const selectedProductsData = { ...selectedProducts };
    const productToDelete = selectedProductsData[toothNumber];

    // Deselect if clicked on selected tooth
    if (selectedProductsData[toothNumber] === productId) {
      selectedProductsData[toothNumber] = '';
    } else {
      // Select tooth with productId
      selectedProductsData[toothNumber] = productId;
    }

    setSelectedProducts(selectedProductsData);
    onClickProduct(productToDelete, toothNumber, selectedProductsData);
  };

  return toothGroups[Number(groupIndex)]?.teeth.map(({ toothNumber }) => {
    const selected = selectedProducts[toothNumber] === productId;

    return (
      <Card
        key={`${toothNumber}`}
        padding={0}
        className={cx(
          '!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)]',
          { '!border-[--rs-color-foreground-primary]': selected }
        )}
      >
        <MenuItem
          selected={selected}
          size={'small'}
          roundedCorners={true}
          onClick={() => handleClickOnToothOption(toothNumber)}
          className='hover:!cursor-pointer'
        >
          <View
            direction='row'
            align='center'
            gap={3}
            width='100%'
            paddingStart={2}
            paddingBlock={2}
          >
            <Icon svg={ToothIcon} size={5} />
            <Text variant='body-3' weight='medium'>
              {toothNumber}
            </Text>
          </View>
        </MenuItem>
      </Card>
    );
  });
};

export default ProductToothList;
