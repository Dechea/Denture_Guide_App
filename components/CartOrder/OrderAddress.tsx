'use client';

import { Link, Text, View } from 'reshaped';
import { Address } from '../../fqlx-generated/typedefs';
import { useUserStore } from '../../zustand/user';
import { CARTTABROUTES } from '../../__mocks__/flow';

export default function OrderAddress({
  setActiveTab,
}: {
  readonly setActiveTab?: (activeTab: string) => void;
}) {
  const { addressFormData } = useUserStore();

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
      width='100%'
      className='print:!flex print:!flex-row print:!gap-[28px]'
    >
      <View.Item columns={6}>
        <View gap={4}>
          <Text variant='body-2' weight='medium'>
            Shipping information
          </Text>

          <View gap={1}>
            <Text variant='body-3' weight='regular'>
              {addressFormData?.shipping.name}
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              {stringifyAddress(addressFormData?.shipping ?? null)}
            </Text>
          </View>
          <Link
            color='inherit'
            onClick={() => setActiveTab?.(CARTTABROUTES.shippingdetails)}
            className='print:!hidden'
          >
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
              {addressFormData?.billing.name}
            </Text>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              {stringifyAddress(addressFormData?.billing ?? null)}
            </Text>
          </View>
          <Link
            color='inherit'
            onClick={() => setActiveTab?.(CARTTABROUTES.shippingdetails)}
            className='print:!hidden'
          >
            Edit
          </Link>
        </View>
      </View.Item>
    </View>
  );
}
