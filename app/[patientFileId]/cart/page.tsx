import { View } from 'reshaped';
import { CartCostEstimation } from '../../../components/CartCostEstimation';
import CartHeader from '../../../components/CartHeader';
import ImageWithDetailCard from '../../../components/ImageWithDetailCard';

export default function Cart({
  params,
}: {
  params: { patientFileId: string };
}) {
  return (
    <View>
      <CartHeader />

      <View
        direction='row'
        width='100%'
        paddingBlock={8}
        paddingInline={6}
        gap={35.5}
      >
        <View.Item columns={8}>
          <ImageWithDetailCard />
        </View.Item>

        <View.Item columns={4}>
          <CartCostEstimation patientFileId={params.patientFileId} />
        </View.Item>
      </View>
    </View>
  );
}
