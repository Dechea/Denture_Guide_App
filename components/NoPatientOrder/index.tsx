'use client';

import { View, Icon, Text, Button } from 'reshaped';
import AddFileIcon from '../Icons/AddFile';
import PlusIcon from '../Icons/Plus';

const NoPatientOrder = ({
  activateNewPatientModal,
}: {
  activateNewPatientModal: () => void;
}) => {
  return (
    <View gap={10} align='center' height='100%' justify='center'>
      <View gap={6} align='center'>
        <View padding={4} backgroundColor='neutral-faded' borderRadius='small'>
          <Icon svg={<AddFileIcon />} size={8} color='neutral-faded' />
        </View>
        <Text variant='featured-2'>No patient&apos;s orders created</Text>
      </View>
      <Button
        icon={<PlusIcon />}
        color='primary'
        size='large'
        onClick={activateNewPatientModal}
      >
        New Patient
      </Button>
    </View>
  );
};

export default NoPatientOrder;
