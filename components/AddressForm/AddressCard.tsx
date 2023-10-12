'use client';

import { View, Text, Button, Badge, Divider, useToggle } from 'reshaped';
import { Address } from '../../fqlx-generated/typedefs';
import { AddressFormData, AddressType } from './constants';
import { useUserStore } from '../../zustand/user';
import AddressModal from './AddressModal';

interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  makeDefault: (addressType: string) => void;
  onDelete: (addressType: string) => void;
}

const AddressCard = ({
  address,
  onEdit,
  makeDefault,
  onDelete,
}: AddressCardProps) => {
  const { active, activate, deactivate } = useToggle(false);
  const { addressFormData, setAddressFormData } = useUserStore();

  const handleSubmit = (formAddress: Address) => {
    if (address.type === AddressType.SHIPPING) {
      setAddressFormData({
        ...addressFormData,
        shipping: formAddress,
      } as AddressFormData);
    } else if (address.type === AddressType.BILLING) {
      setAddressFormData({
        ...addressFormData,
        billing: formAddress,
      } as AddressFormData);
    }

    onEdit(formAddress);
    deactivate();
  };

  return (
    <View paddingStart={1} direction='column' width={'100%'} gap={11}>
      <View direction='column' gap={1} width={'100%'} className='items-stretch'>
        <View direction='row' width={'100%'} align='center'>
          <View grow paddingBlock={0.5}>
            <Text variant='body-3' weight='medium'>
              {address.name}
            </Text>
          </View>
          {address.default && (
            <Badge color='primary' variant='faded' size='medium'>
              Default
            </Badge>
          )}
        </View>
        <Text>
          {address.street} {address.streetNo}, {address.zip} {address.city},{' '}
          {address.state}, {address.country}
        </Text>
      </View>
      <View direction='row' gap={2} height={'100%'}>
        <Button
          onClick={activate}
          variant='outline'
          color='neutral'
          size='small'
        >
          Edit
        </Button>
        <Divider vertical className='!h-7' />
        <Button
          variant='ghost'
          color='neutral'
          size='small'
          onClick={() => onDelete(address.type as string)}
        >
          Delete
        </Button>
        {!address.default && <Divider vertical className='!h-7' />}
        {!address.default && (
          <Button
            variant='ghost'
            color='neutral'
            size='small'
            onClick={() => makeDefault(address.type as string)}
          >
            Set as Default
          </Button>
        )}
      </View>
      <AddressModal
        active={active}
        deactivate={deactivate}
        initialAddress={address}
        formSubmit={handleSubmit}
      />
    </View>
  );
};

export default AddressCard;
