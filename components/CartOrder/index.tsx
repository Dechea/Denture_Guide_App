'use client';

import { Divider, Text, View } from 'reshaped';
import OrderAddress from './OrderAddress';
import CartProductList from './CartProductList';
import CartPrint from './CartPrint';

interface CartProductListProps {
  params: { patientFileId: string };
  setActiveTab: (activeTab: string) => void;
}

export default function CartOrder({
  params,
  setActiveTab,
}: CartProductListProps) {
  function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1.
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
  const formattedDate = formatDate(new Date());

  return (
    <View
      direction={{ s: 'column', xl: 'row' }}
      width='100%'
      gap={{ xl: 26 }}
      className='print:!block print:pt-x3'
    >
      <View.Item grow>
        <View gap={14} paddingBottom={11} paddingInline={6}>
          <View gap={4}>
            <Text variant='body-2' weight='medium'>
              Order details
            </Text>

            <View gap={1}>
              <View direction='row' gap={1}>
                <Text variant='body-3' weight='regular' color='neutral-faded'>
                  Order date:{' '}
                </Text>
                <Text variant='body-3' weight='regular' color='neutral-faded'>
                  {formattedDate}
                </Text>
              </View>
              {/* <View direction='row' gap={1}>
                <Text variant='body-3' weight='regular' color='neutral-faded'>
                  Order number:{' '}
                </Text>
                <Text variant='body-3' weight='regular' color='neutral-faded'>
                  39240123523123
                </Text>
              </View> */}
            </View>
          </View>

          <OrderAddress setActiveTab={setActiveTab} />

          <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
          <CartProductList params={params} />
        </View>
      </View.Item>
      <View.Item className='sticky bottom-0 print:!hidden'>
        <CartPrint params={params} />
      </View.Item>
    </View>
  );
}
