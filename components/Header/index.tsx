'use client';

import { View, Avatar, Divider, MenuItem, Button, Text } from 'reshaped';
import { useRouter, usePathname } from 'next/navigation';
import CartPopoverButton from '../CartPopoverButton';
import BackwardIcon from '../Icons/Backward';
import CostEst from '../Icons/Cost Est';
import { useQuery } from 'fqlx-client';
import { Query } from '../../fqlx-generated/typedefs';

interface HeaderProps {
  patientFileId: string;
}

const Header = ({ patientFileId }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useQuery<Query>();

  const patientFile = query.PatientFile.firstWhere(
    `(patientFile) => patientFile.id == "${patientFileId}"`
  )
    .project({ patient: { name: true, avatar: true } })
    .exec();

  return (
    <View
      align='stretch'
      width='100%'
      position='sticky'
      insetTop={0}
      zIndex={50}
      backgroundColor='white'
    >
      <View
        direction='row'
        align='center'
        paddingTop={2}
        paddingBottom={2}
        paddingEnd={4}
        paddingStart={4}
      >
        <View.Item columns={6}>
          <View gap={2} direction='row' align='center'>
            {/* Back Button */}
            <View align='center'>
              <Button
                icon={<BackwardIcon />}
                variant='ghost'
                size='small'
                onClick={() => router.back()}
              ></Button>
            </View>

            {/* Patient Indicator */}
            <MenuItem
              roundedCorners
              size='small'
              startSlot={
                <Avatar
                  src={patientFile.patient.avatar || '/defaultAvatar.svg'}
                  size={8}
                />
              }
            >
              <Text variant='body-2'>{patientFile.patient.name}</Text>
            </MenuItem>
          </View>
        </View.Item>

        <View.Item columns={6}>
          <View direction='row' align='center' justify='end' gap={4} divided>
            <MenuItem size='small' roundedCorners>
              Order History
            </MenuItem>

            <View direction='row' align='center' gap={4}>
              <CartPopoverButton />
              <Button
                icon={<CostEst />}
                variant='ghost'
                size='small'
                color='neutral'
                highlighted={pathname === '/costestimation'}
                onClick={() => router.push('/costestimation')}
              >
                Cost Est. 0.00 €
              </Button>
            </View>
          </View>
        </View.Item>
      </View>
      <Divider />
    </View>
  );
};

export default Header;
