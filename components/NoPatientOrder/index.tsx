'use client';

import { View, Icon, Text, Button, Skeleton } from 'reshaped';
import PlusIcon from '../Icons/Plus';
import AvatarIcon from '../Icons/Avatar';

interface NoPatientOrderProps {
  activateNewPatientModal: () => void;
}

const NoPatientOrder = ({
  activateNewPatientModal,
}: NoPatientOrderProps) => {
  return (
    <View height='100%' justify='center' align='center' gap={6} >
      <View
        paddingBlock={2}
        paddingInline={3}
        direction='row' gap={3} align='center' justify='center'
        className='!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)] !rounded-[8px]'
      >
        <Icon svg={AvatarIcon} color='disabled' size={8} />
        <Skeleton width={26} borderRadius="large" className="!min-h-[9px]" />
      </View>

      <View width='315px' textAlign='center' gap={2}>
        <Text variant='featured-2' weight='medium' color="neutral">Create Order for Patient</Text>
        <Text variant='body-2' color='neutral-faded'>Here you will store and manage all your patient's orders</Text>
      </View>

      <View paddingTop={6}>
        <Button
          icon={<PlusIcon />}
          color='primary'
          size='large'
          onClick={activateNewPatientModal}
        >
          Create Order
        </Button>
      </View>
    </View>
  );
};

export default NoPatientOrder;
