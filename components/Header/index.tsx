'use client';

import { useQuery } from 'fauna-typed';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { Badge, Button, Divider, Hidden, Icon, Text, View } from 'reshaped';
import { Query } from '../../fqlx-generated/typedefs';
import MenuIcon from '../Icons/MenuIcon';
import CartIcon from '../Icons/Cart';
import { useProductCalculations } from '../../hooks/useProductCalculations';
import { UserButton } from '@clerk/nextjs';

interface HeaderProps {
  patientFileId: string;
}

export default function Header({ patientFileId }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const query = useQuery<Query>();

  const { totalCostOfProductsInCart, totalProductsInCart } =
    useProductCalculations(patientFileId);

  const patientFile = useMemo(
    () =>
      query.PatientFile.firstWhere(
        `(patientFile) => patientFile.id == "${patientFileId}"`
      )
        .project({ patient: { name: true, avatar: true } })
        .exec(),
    [patientFileId]
  );

  function containsCart(pathname: string) {
    return pathname.includes('cart');
  }
  const isCartPage = containsCart(pathname);

  return (
    <HidePatientCommonHeader isCartPage={isCartPage}>
      <View
        align='stretch'
        width='100%'
        position='sticky'
        insetTop={0}
        zIndex={50}
        backgroundColor='white'
        className='print:!hidden'
      >
        <div className='flex flex-row px-x4 py-x2 bg-page-faded'>
          <div className='basis-1/3 align-middle'>
            <Button
              icon={<Icon svg={MenuIcon} size={4} />}
              variant='ghost'
              onClick={() => router.push('/')}
            >
              <Hidden hide={{ s: true, l: false }}>
                <Text variant='body-3' weight='medium'>
                  Orders List
                </Text>
              </Hidden>
              <Hidden hide={{ s: false, l: true }}>
                <Text variant='body-3' weight='medium'>
                  Orders
                </Text>
              </Hidden>
            </Button>
          </div>
          <div className='basis-1/3'>
            <div className='flex h-full items-center w-full '>
              <Text
                variant='body-3'
                weight='medium'
                className='truncate w-full text-center'
              >
                {patientFile?.patient?.name}
              </Text>
            </div>
          </div>
          <div className='basis-1/3'>
            <View
              direction='row'
              align='center'
              width='100%'
              justify='end'
              gap={2.5}
            >
              <Button
                variant='ghost'
                icon={
                  <Badge.Container className='w-8 pr-x2'>
                    <Hidden hide={{ s: false, m: true }}>
                      <Badge className='!bg-neutral' size='small'>
                        <Text className='!text-neutral'>
                          {totalProductsInCart}
                        </Text>
                      </Badge>
                    </Hidden>
                    <Icon svg={CartIcon} size={4} />
                  </Badge.Container>
                }
                highlighted={pathname === `/${patientFileId}/cart`}
                onClick={() => router.push(`/${patientFileId}/cart`)}
              >
                <>
                  <Hidden hide={{ s: true, m: false }}>
                    <View
                      direction='row'
                      align='center'
                      justify='center'
                      gap={3}
                    >
                      <Text variant='body-3' weight='medium'>
                        {totalCostOfProductsInCart} €
                      </Text>
                      <Badge className='!bg-neutral' size='small'>
                        <Text className='!text-neutral'>
                          {totalProductsInCart}
                        </Text>
                      </Badge>
                    </View>
                  </Hidden>
                </>
              </Button>
              <UserButton />
            </View>
          </div>
        </div>
        <Divider />
      </View>
    </HidePatientCommonHeader>
  );
}

interface HidePatientCommonHeaderProps {
  children: React.ReactNode;
  isCartPage: boolean;
}

const HidePatientCommonHeader = ({
  children,
  isCartPage,
}: HidePatientCommonHeaderProps) => {
  return <Hidden hide={{ s: isCartPage, m: false }}>{children}</Hidden>;
};
