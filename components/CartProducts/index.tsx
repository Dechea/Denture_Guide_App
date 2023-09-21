import { View } from 'reshaped';
import CartItemsList from '../CartItemsList';
import CartCostCard from '../CartCostCard';
import { Tooth } from '../../fqlx-generated/typedefs';

interface CartProductsProps {
  teeth: Tooth[];
  onProductCountChange: (
    updatedQuantity: number,
    toothNumber: number,
    productId: string
  ) => Promise<void>;
  onDeleteProduct: (toothNumber: number, productId: string) => Promise<void>;
  setActiveTab: (tabId: string) => void;
  params: {
    patientFileId: string;
  };
}

export default function CartProducts({
  teeth,
  onProductCountChange,
  onDeleteProduct,
  setActiveTab,
  params,
}: CartProductsProps) {
  return (
    <View
      direction={{ s: 'column', xl: 'row' }}
      gap={{ xl: 26 }}
      paddingTop={{ s: 11, l: 0 }}
      height='100%'
      grow
      className='overflow-y-scroll scrollbar-0 print:overflow-visible'
    >
      <View.Item grow>
        <CartItemsList
          teeth={teeth}
          onProductCountChange={onProductCountChange}
          onDeleteProduct={onDeleteProduct}
        />
      </View.Item>
      <View.Item className='sticky bottom-0 top-0'>
        <CartCostCard
          params={params}
          onClick={() => setActiveTab('2')}
          buttonText='Shipping Details'
          color='primary'
        />
      </View.Item>
    </View>
  );
}
