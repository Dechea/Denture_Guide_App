import { View } from 'reshaped';
import SelectedToothList from '../SelectedToothList';
import { SelectedProducts, useProductStore } from '../../zustand/product';

const NewProductToothList = ({
  onClickProduct,
}: {
  onClickProduct: (
    productToDelete: string,
    toothNumber: number,
    selectedProducts: SelectedProducts
  ) => void;
}) => {
  const { activeProductId } = useProductStore();

  return (
    <View
      width='100%'
      height='100%'
      align='stretch'
      className='border-none des:border-l des:border-solid border-[--rs-color-border-neutral-faded] des:!bg-page-faded'
    >
      <SelectedToothList
        productId={activeProductId}
        onClickProduct={onClickProduct}
      />
    </View>
  );
};

export default NewProductToothList;
