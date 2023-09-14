'use client'

import { Button, View, Text, useToggle } from 'reshaped';
import PlusIcon from '../Icons/Plus';
import AddressModal from './AddressModal';
import { initialAddress } from './constants';
import { Address } from '../../fqlx-generated/typedefs';

interface NewAddressButtonProps {
  addressType: string;
  handleNewAddress: (address: Address) => void;
}

const NewAddressButton = ({
  addressType,
  handleNewAddress,
}: NewAddressButtonProps) => {
  const { active, activate, deactivate } = useToggle(false);

  const handleSubmit = (address: Address) => {
    handleNewAddress(address);

    deactivate();
  };

  return (
    <>
      <Button variant='outline' color='neutral' fullWidth onClick={activate}>
        <View direction={'row'} align={'center'} gap={1} padding={4}>
          <PlusIcon />
          <Text variant='body-3'>
            Add new {addressType.toLowerCase()} address
          </Text>
        </View>
      </Button>
      <AddressModal
        active={active}
        deactivate={deactivate}
        initialAddress={{ ...initialAddress, type: addressType }}
        formSubmit={handleSubmit}
      />
    </>
  );
};

export default NewAddressButton;
