'use client';

import { useQuery } from 'fqlx-client';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Hidden,
  Icon,
  Text,
  View,
} from 'reshaped';
import { Query } from '../../fqlx-generated/typedefs';
import CostEst from '../Icons/CostEst';
import MenuIcon from '../Icons/MenuIcon';
import CartIcon from '../Icons/Cart';
import { useProductCalculations } from '../../hooks/useProductCalculations';

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

  return (
    <View
      align='stretch'
      width='100%'
      position='sticky'
      insetTop={0}
      zIndex={50}
      backgroundColor='white'
      className='print:!hidden'
    >
      <View
        direction='row'
        align='center'
        paddingBlock={2}
        paddingInline={6}
        className='!justify-between'
      >
        <Button
          icon={<Icon svg={MenuIcon} size={4} />}
          variant='ghost'
          onClick={() => router.push('/')}
        >
          <Text variant='body-3' weight='medium'>
            Orders List
          </Text>
        </Button>

        <View direction='row' gap={3} align='center'>
          <Text variant='body-3' weight='medium'>
            {patientFile?.patient?.name}
          </Text>
        </View>

        <View direction='row' align='center' justify='end' gap={{ s: 0, m: 6 }}>
          <View direction='row' align='center' gap={2.5}>
            <Button
              variant='ghost'
              icon={
                <Badge.Container className='w-[24px]'>
                  <Hidden hide={{ s: false, m: true }}>
                    <Badge rounded size='small'>
                      {totalProductsInCart}
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
                  <View direction='row' align='center' justify='center' gap={2}>
                    <Text variant='body-3' weight='medium'>
                      {totalCostOfProductsInCart} €
                    </Text>
                    <Badge
                      className='!min-w-[25px]'
                      color='critical'
                      size='small'
                    >
                      {totalProductsInCart}
                    </Badge>
                  </View>
                </Hidden>
              </>
            </Button>
          </View>
          <Button
            icon={<CostEst />}
            variant='ghost'
            color='neutral'
            highlighted={pathname === `/${patientFileId}/cost-estimation`}
            onClick={() => router.push(`/${patientFileId}/cost-estimation`)}
          >
            <Hidden hide={{ s: true, m: false }}>Cost Estimation</Hidden>
          </Button>
        </View>
      </View>
      <Divider />
    </View>
  );
}
