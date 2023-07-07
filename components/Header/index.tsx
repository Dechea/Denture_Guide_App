'use client';

import { useQuery } from 'fqlx-client';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { Avatar, Badge, Button, Divider, Icon, Text, View } from 'reshaped';
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
      align="stretch"
      width="100%"
      position="sticky"
      insetTop={0}
      zIndex={50}
      backgroundColor="white"
    >
      <View
        direction="row"
        align="center"
        paddingBlock={2}
        paddingInline={6}
        className="!justify-between"
      >
        <Button
          icon={<Icon svg={MenuIcon} size={4} />}
          variant="ghost"
          onClick={() => router.push('/')}
        >
          <Text variant="body-3" weight="medium">
            Orders List
          </Text>
        </Button>

        <View direction="row" gap={3} align="center">
          <Avatar
            src={patientFile?.patient?.avatar || '/defaultAvatar.svg'}
            size={8}
          />
          <Text variant="body-2" weight="medium">
            {patientFile?.patient?.name}
          </Text>
        </View>

        <View direction="row" align="center" justify="end" gap={3}>
          <View direction="row" align="center" gap={2.5}>
            <Button
              variant="ghost"
              icon={<Icon svg={CartIcon} size={4} />}
              highlighted={pathname === `/${patientFileId}/cart`}
              onClick={() => router.push(`/${patientFileId}/cart`)}
            >
              <View direction="row" align="center" justify="center" gap={2}>
                <Text variant="body-3" weight="medium">
                  {totalCostOfProductsInCart} €
                </Text>
                <Badge color="critical" size="small">
                  {totalProductsInCart}
                </Badge>
              </View>
            </Button>
          </View>
          <Button
            icon={<CostEst />}
            variant="ghost"
            color="neutral"
            highlighted={pathname === `/costestimation`}
            onClick={() => router.push(`/costestimation`)}
          >
            Cost Estimation
          </Button>
        </View>
      </View>
      <Divider />
    </View>
  );
}
