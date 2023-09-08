import { Link, Text, View } from 'reshaped';

export default function OrderAddress({ setActiveTab }: any) {
  return (
    <View
      direction={{ s: 'column', xl: 'row' }}
      gap={14}
      className='print:!flex print:!flex-row'
    >
      <View.Item columns={6}>
        <View gap={4}>
          <Text variant='body-2' weight='medium'>
            Shipping information
          </Text>

          <View gap={1}>
            <Text variant='body-3' weight='regular'>
              Samantha Black
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              SpitalhofSpitalhofstraße 6, 87437 Kempten, Bavaria, Germany
            </Text>
          </View>
          <Link color='inherit' onClick={() => setActiveTab('2')}>
            Edit
          </Link>
        </View>
      </View.Item>
      <View.Item columns={6}>
        <View gap={4}>
          <Text variant='body-2' weight='medium'>
            Billing information
          </Text>

          <View gap={1}>
            <Text variant='body-3' weight='regular'>
              Samantha Black
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              SpitalhofSpitalhofstraße 6, 87437 Kempten, Bavaria, Germany
            </Text>
          </View>
          <Link color='inherit' onClick={() => setActiveTab('2')}>
            Edit
          </Link>
        </View>
      </View.Item>
    </View>
  );
}
