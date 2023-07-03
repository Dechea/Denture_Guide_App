import { Image, Text, View } from 'reshaped';

interface CartListProps {
  cartList: {
    id: number;
    title: string;
    description: string;
    image: string;
    isPrice: boolean;
    price: string;
    localStorageCount: number;
    selected: boolean;
    cartCount: number;
    shared: boolean;
    sharedId: string;
    showButton: boolean;
  };
}

export default function CartListItem({ cartList }: CartListProps) {
  return (
    <View direction='row' align='stretch' gap={4}>
      <Image
        src={cartList.image}
        alt={cartList.title}
        width='72px'
        height='72px'
        borderRadius='medium'
      />

      <View.Item grow>
        <View align='stretch' height='100%' className='!justify-between'>
          <View align='start' gap={0.25}>
            <Text variant='body-3' weight='medium'>
              {cartList.title}
            </Text>
            <Text variant='caption-1' weight='regular' color='neutral-faded'>
              {cartList.description}
            </Text>
          </View>

          <View direction='row' justify='start' align='center' gap={4}>
            {cartList.isPrice && (
              <Text variant='caption-1' weight='regular'>
                {cartList.price}
              </Text>
            )}
          </View>
        </View>
      </View.Item>
    </View>
  );
}
