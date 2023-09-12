import { Link, Text, View } from 'reshaped';
import { Address } from '../../fqlx-generated/typedefs';

export default function OrderAddress({
  setActiveTab,
  addresses,
}: {
  setActiveTab: (activeTab: string) => void;
  addresses: Address[] | undefined;
}) {
  const stringifyAddress = (address: Address | null) => {
    if (address) {
      return `${address.street} ${address.streetNo}, 
    ${address.zip} ${address.city}, ${address.state}
    , ${address.country}`;
    }
    return '';
  };

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
              {addresses?.[0].name}
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              {stringifyAddress(addresses?.[0] ?? null)}
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
              {addresses?.[1].name}
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              {stringifyAddress(addresses?.[1] ?? null)}
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
