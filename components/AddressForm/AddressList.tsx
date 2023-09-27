'use client';

import { RadioGroup, Radio, View } from 'reshaped';
import AddressCard from './AddressCard';
import { Address } from '../../fqlx-generated/typedefs';

interface AddressListProps {
  organizationAddresses: Address[];
  addressType: string;
  selectedAddress: string;
  setSelectedAddress: (value: string) => void;
  onEdit: (index: number, address: Address) => void;
  makeDefault: (index: number, addressType: string) => void;
  onDelete: (index: number, addressType: string) => void;
}

const AddressList = ({
  organizationAddresses,
  addressType,
  selectedAddress,
  setSelectedAddress,
  onEdit,
  makeDefault,
  onDelete,
}: AddressListProps) => {
  return (
    <RadioGroup
      name={`${addressType}Addresses`}
      value={selectedAddress}
      onChange={({ value }) => setSelectedAddress(value)}
    >
      {organizationAddresses?.map((address, index) => {
        if (address.type === addressType) {
          return (
            <View
              borderRadius='medium'
              borderColor='neutral-faded'
              padding={6}
              key={`${JSON.stringify(address)}`}
            >
              <Radio
                name={JSON.stringify(address)}
                value={JSON.stringify(address)}
                className='w-full !items-start [&>*:nth-child(even)]:!w-full'
              >
                <AddressCard
                  address={address}
                  onEdit={(address) => onEdit(index, address)}
                  makeDefault={(addressType) => makeDefault(index, addressType)}
                  onDelete={(addressType) => onDelete(index, addressType)}
                />
              </Radio>
            </View>
          );
        }
      })}
    </RadioGroup>
  );
};

export default AddressList;
