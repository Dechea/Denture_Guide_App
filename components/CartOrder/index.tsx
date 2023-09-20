'use client';

import { Divider, Text, View } from 'reshaped';
import { useProductCalculations } from '../../hooks/useProductCalculations';
import CartCostCard from '../CartButtonComponent';
import { DecheaLogo } from '../Icons/DecheaLogo';
import PrintIcon from '../Icons/Print';
import CartProductList from './CartProductList';
import OrderAddress from './OrderAddress';

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
  const { totalCostOfProductsInCart } = useProductCalculations(
    params.patientFileId
  );

  return (
    <>
      <View
        direction={{ s: 'column', xl: 'row' }}
        width="100%"
        gap={{ xl: 26 }}
        className="print:!hidden"
      >
        <View.Item grow>
          <View gap={14} paddingBottom={{ s: 11, xl: 32 }} paddingInline={6}>
            <View gap={4}>
              <Text variant="body-2" weight="medium">
                Order details
              </Text>

              <View gap={1}>
                <View direction="row" gap={1}>
                  <Text variant="body-3" weight="regular" color="neutral-faded">
                    Order date:{' '}
                  </Text>
                  <Text variant="body-3" weight="regular" color="neutral-faded">
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

            <Divider />
            <CartProductList params={params} />
          </View>
        </View.Item>
        <View.Item className="sticky bottom-0 top-[128px]">
          <CartCostCard
            params={params}
            onClick={() => window.print()}
            buttonText="Print"
            icon={<PrintIcon />}
          />
        </View.Item>
      </View>

      <View
        direction="column"
        width="100%"
        gap={14}
        className="!hidden print:!flex print:pt-x3"
      >
        <View direction="row" width="100%">
          <View.Item columns={6}>
            <View direction="row" gap={4}>
              <DecheaLogo />
              <Text variant="body-1" weight="medium" color="neutral-faded">
                Orders
              </Text>
            </View>
          </View.Item>
          <View.Item columns={6}>
            <View gap={1}>
              <View direction="row" gap={1}>
                <Text variant="body-3" weight="regular" color="neutral-faded">
                  Order date:{' '}
                </Text>
                <Text variant="body-3" weight="regular" color="neutral-faded">
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
          </View.Item>
        </View>

        <OrderAddress />
        <Divider className="print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]" />

        <View direction="column" gap={20}>
          <View direction="row" width="100%" className="!justify-between">
            <View>
              <Text variant="featured-2" weight="medium">
                Products
              </Text>
            </View>
            <View direction="column" gap={3}>
              <View direction="column" gap={1}>
                <Text variant="body-3" weight="medium">
                  Total/ Inc. All VAT
                </Text>
                <Text variant="featured-2" weight="bold">
                  Euro
                </Text>
              </View>
              <Text variant="caption-1" weight="regular">
                Net amount: {totalCostOfProductsInCart} €
              </Text>
            </View>
          </View>
          <CartProductList params={params} />
        </View>
      </View>
    </>
  );
}
