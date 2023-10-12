'use client';

import { Divider, Text, View } from 'reshaped';
import { useProductCalculations } from '../../hooks/useProductCalculations';
import CartCostCard from '../CartCostCard';
import { DecheaLogo } from '../Icons/DecheaLogo';
import PrintIcon from '../Icons/Print';
import CartProductList from './CartProductList';
import OrderAddress from './OrderAddress';
import { useMemo } from 'react';

interface CartProductListProps {
  params: { patientFileId: string };
  setActiveTab: (activeTab: string) => void;
}

export default function CartOrder({
  params,
  setActiveTab,
}: CartProductListProps) {
  const formattedDate = useMemo(
    () => new Date().toLocaleDateString('en-GB').replace(/\//g, '.'),
    []
  );

  const { totalCostOfProductsInCart, totalCostOfProductsInCartWithTax } =
    useProductCalculations(params.patientFileId);

  return (
    <>
      <View
        direction={{ s: 'column', xl: 'row' }}
        width='100%'
        gap={{ xl: 26 }}
        paddingTop={{ s: 11, l: 0 }}
        className='print:!hidden'
      >
        <View.Item grow>
          <View gap={14} paddingBottom={{ s: 11, xl: 32 }} paddingInline={6}>
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

            <Divider />
            <CartProductList params={params} />
          </View>
        </View.Item>
        <View.Item className='sticky bottom-0 top-0'>
          <CartCostCard
            params={params}
            onClick={() => window.print()}
            buttonText='Print'
            icon={<PrintIcon />}
          />
        </View.Item>
      </View>

      <View
        direction='column'
        width='100%'
        gap={14}
        className='!hidden print:!flex print:pt-x3'
      >
        <View direction='row' width='100%'>
          <View.Item columns={6}>
            <View direction='row' gap={4}>
              <DecheaLogo />
              <Text variant='body-1' weight='medium' color='neutral-faded'>
                Order
              </Text>
            </View>
          </View.Item>
          <View.Item columns={6}>
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
          </View.Item>
        </View>

        <OrderAddress />
        <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />

        <View direction='column' gap={20}>
          <View direction='row' width='100%' className='!justify-between'>
            <View>
              <Text variant='featured-2' weight='medium'>
                Products
              </Text>
            </View>
            <View direction='column' gap={3} align={'end'}>
              <View direction='column' gap={1} align={'end'}>
                <Text variant='body-3' weight='medium'>
                  Total/ Inc. All VAT
                </Text>
                <Text variant='featured-2' weight='bold'>
                  {totalCostOfProductsInCartWithTax.toFixed(2)} €
                </Text>
              </View>
              <Text variant='caption-1' weight='regular'>
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
