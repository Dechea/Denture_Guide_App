import { Card, Icon, MenuItem, Text, View } from 'reshaped';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import ArrowDownIcon from '../Icons/ArrowDown';
import ToothIcon from '../Icons/Tooth';
import { SelectedProducts, useProductStore } from '../../zustand/product';
import { convertCamelCaseToTitleCase } from '../../utils/helper';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';

interface SelectedToothListProps {
  productId: string;
  onClickProduct: (
    productToDelete: string,
    toothNumber: number,
    selectedProducts: SelectedProducts
  ) => void;
}

export default function SelectedToothList({
  productId,
  onClickProduct,
}: SelectedToothListProps) {
  const {
    activeTreatmentGroup,
    selectedProducts,
    setSelectedProducts,
    activeProductTab,
    availableTeethByProductType,
  } = useProductStore();
  const { patientFile, toothGroups, getToothGroups } = useTreatmentsByGroup();
  const [groupIndex, setGroupIndex] = useState<number | null>(null);

  useEffect(() => {
    getToothGroups();
  }, [patientFile, activeProductTab, availableTeethByProductType]);

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

  if (groupIndex === null) return;

  const toothGroupsList = toothGroups[groupIndex]?.teeth;
  return (
    <View gap={3} width='100%' height='100%' padding={6} paddingBottom={10}>
      <View direction='row' align='center' width='100%' gap={1}>
        <Icon svg={ArrowDownIcon} />
        <Text variant='body-3' weight='medium'>
          {convertCamelCaseToTitleCase(activeProductTab)} for:
        </Text>
      </View>

      <View direction='column' gap={2} width='100%'>
        {productId &&
          !!toothGroupsList.length &&
          toothGroupsList.map(({ toothNumber }) => {
            const selected = selectedProducts[toothNumber] === productId;
            return (
              <Card
                key={`${toothNumber}`}
                padding={0}
                className={cx(
                  '!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)]',

                  {
                    '!border-[--rs-color-foreground-primary]': selected,
                  }
                )}
              >
                <MenuItem
                  selected={selected}
                  size={'small'}
                  roundedCorners={true}
                  onClick={() => handleClickOnToothOption(toothNumber)}
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
          })}
      </View>
    </View>
  );
}
