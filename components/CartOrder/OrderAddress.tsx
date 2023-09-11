import { Link, Text, View } from 'reshaped';
import { Address } from '../AddressForm/constants';

export default function OrderAddress({
  setActiveTab,
  addresses,
}: {
  setActiveTab: (activeTab: string) => void;
  addresses: Address[];
}) {
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
              {addresses[0].name}
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              {addresses[0].street} {addresses[0].streetNo}, {addresses[0].zip}{' '}
              {addresses[0].city}, {addresses[0].state}, {addresses[0].country}
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
              {addresses[1].name}
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              {addresses[1].street} {addresses[1].streetNo}, {addresses[1].zip}{' '}
              {addresses[1].city}, {addresses[1].state}, {addresses[1].country}
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
