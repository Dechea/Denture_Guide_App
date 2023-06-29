'use client';

import { Icon, Text, View, MenuItem, Card } from 'reshaped';
import cx from 'classnames';
import ToothIcon from '../Icons/Tooth';
import { useProductStore } from '../../zustand/product';

interface ProductToothListProps {
  productId: string;
}

const ProductToothList = ({ productId }: ProductToothListProps) => {
  const { availableTeethByProductType, selectedProducts, setSelectedProducts } =
    useProductStore();

  const handleClickOnToothOption = (toothNumber: number) => {
    const selectedProductsData = { ...selectedProducts };

    // Deselect if clicked on selected tooth
    if (selectedProductsData[toothNumber] === productId) {
      delete selectedProductsData[toothNumber];
    } else {
      // Select tooth with productId
      selectedProductsData[toothNumber] = productId;
    }

    setSelectedProducts(selectedProductsData);
  };

  return availableTeethByProductType.map((availableTooth) => {
    const selected = selectedProducts[availableTooth] === productId;

    return (
      <Card
        key={`${availableTooth}`}
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
          onClick={() => handleClickOnToothOption(availableTooth)}
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
              {availableTooth}
            </Text>
          </View>
        </MenuItem>
      </Card>
    );
  });
};

export default ProductToothList;
