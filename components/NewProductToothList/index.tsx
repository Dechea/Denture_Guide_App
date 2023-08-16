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
    <View.Item columns={{ s: 12, m: 4 }}>
      <View height="100%" backgroundColor="page-faded">
        <SelectedToothList
          productId={activeProductId}
          onClickProduct={onClickProduct}
        />
      </View>
    </View.Item>
  );
};

export default NewProductToothList;
