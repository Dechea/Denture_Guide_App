import { View } from 'reshaped';
import CartItemsList from '../CartItemsList';
import CartCostCard from '../CartCostCard';
import { Tooth } from '../../fqlx-generated/typedefs';
import { useRouter } from 'next/navigation';

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
  const isDiscoveryModeEnabled = params.patientFileId === 'discovery-mode';
  const router = useRouter();

  const handleClick = () => {
    if (isDiscoveryModeEnabled) {
      // @ts-ignore
      router.push('/sign-in');
    } else {
      setActiveTab('shippingdetails');
    }
  };

  return (
    <View
      direction={{ s: 'column', xl: 'row' }}
      gap={{ xl: 26 }}
      grow
      className='overflow-y-scroll scrollbar-0 print:overflow-visible max-h-[calc(100svh-136px)] sm:max-h-[calc(100svh-189px)] lg:max-h-[calc(100svh-191px)]'
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
          onClick={handleClick}
          buttonText={
            isDiscoveryModeEnabled ? 'Sign in to Order' : 'Shipping Details'
          }
          color='primary'
        />
      </View.Item>
    </View>
  );
}
