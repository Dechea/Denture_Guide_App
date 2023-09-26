'use client';

import { useQuery } from 'fauna-typed';
import { useEffect, useState } from 'react';
import { Text, View } from 'reshaped';
import { Address, Query } from '../../fqlx-generated/typedefs';
import { useUserStore } from '../../zustand/user';
import CartCostCard from '../CartCostCard';
import AddressForm from './AddressForm';
import AddressList from './AddressList';
import NewAddressButton from './NewAddressButton';
import { AddressType, initialAddress } from './constants';

interface ShippingFormProps {
  params: { patientFileId: string };
  formik: any;
  organizationId: string;
}

const ShippingForm = ({
  params,
  formik,
  organizationId,
}: ShippingFormProps) => {
  const {
    addressFormData,
    setAddressFormData,
    savedShippingIndex,
    savedBillingIndex,
    setSavedShippingIndex,
    setSavedBillingIndex,
  } = useUserStore();
  const query = useQuery<Query>();
  const [mount, setMount] = useState(true);
  const { values, handleChange, handleSubmit, errors, touched, setValues } =
    formik;

  const organizationAddresses = query.Organization.byId(organizationId)
    .project({ addresses: true })
    .exec().addresses;

  const setInitialAddressData = async (
    setShipping: boolean,
    setBilling: boolean
  ) => {
    let shippingAddress = {
        ...initialAddress,
        default: true,
        type: AddressType.SHIPPING,
      } as Address,
      billingAddress = {
        ...initialAddress,
        default: true,
        type: AddressType.BILLING,
      } as Address;

    setSavedShippingIndex(0);
    setSavedBillingIndex(0);

    organizationAddresses?.forEach((address, index) => {
      if (address.type === AddressType.SHIPPING && address.default === true) {
        shippingAddress = address;
        setSavedShippingIndex(index + 1);
      } else if (
        address.type === AddressType.BILLING &&
        address.default === true
      ) {
        billingAddress = address;
        setSavedBillingIndex(index + 1);
      }
    });

    if (!setBilling && !setShipping) {
      return;
    }

    setValues({
      isBillingSameAsShippingAddress: false,
      shipping: setShipping ? shippingAddress : values.shipping,
      billing: setBilling ? billingAddress : values.billing,
    });
  };

  useEffect(() => {
    const updatedValues = { ...values, isBillingSameAsShippingAddress: false };
    let setShipping = false,
      setBilling = false;

    if (addressFormData?.shipping !== undefined && mount) {
      updatedValues.shipping = addressFormData?.shipping;
    } else if (organizationId) {
      setShipping = true;
    }

    if (addressFormData?.billing !== undefined && mount) {
      updatedValues.billing = addressFormData?.billing;
    } else if (organizationId) {
      setBilling = true;
    }

    if (mount) {
      setValues(updatedValues);
      setMount(false);
    }

    setInitialAddressData(!mount || setShipping, !mount || setBilling);
  }, [organizationAddresses]);

  useEffect(() => {
    setAddressFormData(values);
  }, [values]);

  const handleEditAddress = async (index: number, address: Address) => {
    const localAddresses = [...(organizationAddresses ?? [])];
    localAddresses[index] = address;

    await query.Organization.byId(organizationId)
      .update(`{addresses: ${JSON.stringify(localAddresses)}}`)
      .exec();
  };

  const handleSetDefaultAddress = async (
    defaultIndex: number,
    addressType: string
  ) => {
    const localAddresses = (organizationAddresses ?? []).map(
      (address, index) => {
        if (index === defaultIndex) {
          return { ...address, default: true };
        } else if (address.type === addressType) {
          return { ...address, default: false };
        }
        return address;
      }
    );

    await query.Organization.byId(organizationId)
      .update(`{addresses: ${JSON.stringify(localAddresses)}}`)
      .exec();

    setValues({
      ...values,
      [addressType.toLowerCase()]: localAddresses[defaultIndex],
    });
  };

  const handleAddNewAddress = async (newAddress: Address) => {
    const localAddresses = [...(organizationAddresses ?? [])];

    localAddresses.forEach((address) => {
      if (address.type === newAddress.type) {
        return { ...address, default: false };
      }
      return address;
    });

    await query.Organization.byId(organizationId)
      .update(`{addresses: ${JSON.stringify([...localAddresses, newAddress])}}`)
      .exec();
  };

  const handleDeleteAddress = async (index: number, addressType: string) => {
    let localAddresses = [...(organizationAddresses ?? [])];

    if (localAddresses[index].default === true) {
      let isUpdated = false;
      localAddresses = localAddresses.map((address, localIndex) => {
        if (
          localIndex !== index &&
          address.type === addressType &&
          !isUpdated
        ) {
          isUpdated = true;
          return { ...address, default: true };
        }
        return address;
      });
    }

    localAddresses.splice(index, 1);

    await query.Organization.byId(organizationId)
      .update(`{addresses: ${JSON.stringify(localAddresses)}}`)
      .exec();
  };

  const handleShippingChange = (event: any) => {
    if (event.target.name === 'isBillingSameAsShippingAddress') {
      const updatedValues = { ...values };
      if (event.target.value === 'true' && savedBillingIndex) {
        updatedValues.isBillingSameAsShippingAddress = false;
        updatedValues.billing = {
          ...organizationAddresses?.[savedBillingIndex - 1],
        };
      } else {
        updatedValues.isBillingSameAsShippingAddress = true;
        updatedValues.billing = { ...updatedValues.shipping };
      }

      setValues(updatedValues);
      return;
    }

    if (values.isBillingSameAsShippingAddress) {
      const [_, key] = event.target.name.split('.');

      setValues({
        ...values,
        shipping: { ...values.shipping, [key]: event.target.value },
        billing: { ...values.billing, [key]: event.target.value },
      });
    } else {
      handleChange(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <View
        direction={{ s: 'column', xl: 'row' }}
        gap={{ xl: 26 }}
        paddingTop={{ s: 11, l: 0 }}
        width='100%'
      >
        <View grow gap={16} paddingInline={6} paddingBottom={{ s: 11, xl: 32 }}>
          <View width={'100%'} gap={4}>
            <Text variant={'featured-3'} weight={'medium'}>
              Shipping Addresses
            </Text>
            {savedShippingIndex ? (
              <AddressList
                organizationAddresses={organizationAddresses ?? []}
                selectedAddress={JSON.stringify(values.shipping)}
                setSelectedAddress={(address) =>
                  setValues({ ...values, shipping: JSON.parse(address) })
                }
                addressType={AddressType.SHIPPING}
                onEdit={handleEditAddress}
                makeDefault={handleSetDefaultAddress}
                onDelete={handleDeleteAddress}
              />
            ) : (
              <AddressForm
                addressType={AddressType.SHIPPING.toLowerCase()}
                onChange={handleShippingChange}
                errors={errors.shipping}
                touched={touched.shipping}
                isBillingSameAsShippingAddress={
                  values.isBillingSameAsShippingAddress
                }
                values={values.shipping}
              />
            )}
            {!!savedShippingIndex && (
              <NewAddressButton
                addressType={AddressType.SHIPPING}
                handleNewAddress={handleAddNewAddress}
              />
            )}
          </View>
          <View width={'100%'} gap={4}>
            <Text variant={'featured-3'} weight={'medium'}>
              Billing Addresses
            </Text>
            {savedBillingIndex ? (
              <AddressList
                organizationAddresses={organizationAddresses ?? []}
                selectedAddress={JSON.stringify(addressFormData?.billing)}
                setSelectedAddress={(address) =>
                  setValues({ ...values, billing: JSON.parse(address) })
                }
                addressType={AddressType.BILLING}
                onEdit={handleEditAddress}
                makeDefault={handleSetDefaultAddress}
                onDelete={handleDeleteAddress}
              />
            ) : (
              <AddressForm
                addressType={AddressType.BILLING.toLowerCase()}
                onChange={handleChange}
                errors={errors.billing}
                touched={touched.billing}
                values={values.billing}
              />
            )}
            {!!savedBillingIndex && (
              <NewAddressButton
                addressType={AddressType.BILLING}
                handleNewAddress={handleAddNewAddress}
              />
            )}
          </View>
        </View>

        <View.Item className={'sticky bottom-0 top-0'}>
          <CartCostCard
            params={params}
            buttonText='Review Order'
            color='primary'
            type='submit'
          />
        </View.Item>
      </View>
    </form>
  );
};

export default ShippingForm;
