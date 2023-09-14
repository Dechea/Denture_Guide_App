'use client';

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { View, Divider, Button, Text } from 'reshaped';
import { useUserStore } from '../../zustand/user';
import { useQuery } from 'fqlx-client';
import { Query, Address } from '../../fqlx-generated/typedefs';
import { addressFormValidationSchema } from './validationSchema';
import { AddressType, initialAddress, initialFormData } from './constants';
import AddressList from './AddressList';
import AddressForm from './AddressForm';
import NewAddressButton from './NewAddressButton';

const ShippingForm = ({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) => {
  const { organizationId, addressFormData, setAddressFormData } =
    useUserStore();
  const query = useQuery<Query>();
  const { values, handleChange, handleSubmit, errors, touched, setValues } =
    useFormik({
      validationSchema: addressFormValidationSchema,
      initialValues: initialFormData,
      onSubmit: (values) =>
        submitFormData(
          values.shipping,
          values.billing,
          values.isBillingSameAsShippingAddress
        ),
    });

  const [isShippingSaved, setIsShippingSaved] = useState(0);
  const [isBillingSaved, setIsBillingSaved] = useState(0);
  const [mount, setMount] = useState(true);

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

    setIsShippingSaved(0);
    setIsBillingSaved(0);

    organizationAddresses?.forEach((address, index) => {
      if (address.type === AddressType.SHIPPING && address.default === true) {
        shippingAddress = address;
        setIsShippingSaved(index + 1);
      } else if (
        address.type === AddressType.BILLING &&
        address.default === true
      ) {
        billingAddress = address;
        setIsBillingSaved(index + 1);
      }
    });

    setValues({
      ...values,
      shipping: setShipping ? shippingAddress : values.shipping,
      billing: setBilling ? billingAddress : values.billing,
    });
  };

  useEffect(() => {
    const updatedValues = { ...values, isBillingSameAsShippingAddress: false };
    let setShipping = false,
      setBilling = false;
    console.log(addressFormData, organizationAddresses, mount);

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

    console.log(mount, setShipping, setBilling, updatedValues);

    if (mount) {
      setValues(updatedValues);
      setMount(false);
    }

    setInitialAddressData(!mount || setShipping, !mount || setBilling);
  }, [organizationAddresses]);

  useEffect(() => {
    console.log(values);
    setAddressFormData(values);
  }, [values]);

  const submitFormData = async (
    shipping: Address,
    billing: Address,
    isBillingSameAsShippingAddress: boolean
  ) => {
    console.log(shipping, billing, isBillingSameAsShippingAddress);

    const localAddresses = [...(organizationAddresses ?? [])];

    if (isBillingSameAsShippingAddress) {
      billing = {
        ...shipping,
        default: !isBillingSaved,
        type: AddressType.BILLING,
      };
    }

    if (!isShippingSaved) {
      localAddresses.push(shipping);
    }
    if (!isBillingSaved || isBillingSameAsShippingAddress) {
      localAddresses.push(billing);
    }

    setAddressFormData({ isBillingSameAsShippingAddress, shipping, billing });

    await query.Organization.byId(organizationId)
      .update(`{addresses: ${JSON.stringify(localAddresses)}}`)
      .exec();

    setActiveTab('3');
  };

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
      console.log(event.target.value, typeof event.target.value);
      const updatedValues = { ...values };
      if (event.target.value === 'true' && isBillingSaved) {
        updatedValues.isBillingSameAsShippingAddress = false;
        updatedValues.billing = {
          ...organizationAddresses?.[isBillingSaved - 1],
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
        width='100%'
      >
        <View grow gap={16} paddingInline={6} paddingBottom={6}>
          <View width={'100%'} gap={4}>
            <Text variant={'featured-3'} weight={'medium'}>
              Shipping Addresses
            </Text>
            {isShippingSaved ? (
              <AddressList
                organizationAddresses={organizationAddresses ?? []}
                selectedAddress={JSON.stringify(values.shipping)}
                setSelectedAddress={(address) =>
                  setValues({ ...values, shipping: JSON.parse(address) })
                }
                addressType={AddressType.SHIPPING}
                handleEdit={handleEditAddress}
                handleDefault={handleSetDefaultAddress}
                handleDelete={handleDeleteAddress}
              />
            ) : (
              <AddressForm
                addressType={AddressType.SHIPPING.toLowerCase()}
                handleChange={handleShippingChange}
                errors={errors.shipping}
                touched={touched.shipping}
                isBillingSameAsShippingAddress={
                  values.isBillingSameAsShippingAddress
                }
                values={values.shipping}
              />
            )}
            {isShippingSaved && (
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
            {isBillingSaved ? (
              <AddressList
                organizationAddresses={organizationAddresses ?? []}
                selectedAddress={JSON.stringify(addressFormData?.billing)}
                setSelectedAddress={(address) =>
                  setValues({ ...values, billing: JSON.parse(address) })
                }
                addressType={AddressType.BILLING}
                handleEdit={handleEditAddress}
                handleDefault={handleSetDefaultAddress}
                handleDelete={handleDeleteAddress}
              />
            ) : (
              <AddressForm
                addressType={AddressType.BILLING.toLowerCase()}
                handleChange={handleChange}
                errors={errors.billing}
                touched={touched.billing}
                values={values.billing}
              />
            )}
            {isBillingSaved && (
              <NewAddressButton
                addressType={AddressType.BILLING}
                handleNewAddress={handleAddNewAddress}
              />
            )}
          </View>
        </View>
        <View.Item className={'sticky bottom-0'}>
          <View
            backgroundColor={'page'}
            padding={4}
            gap={6}
            borderRadius={{ s: 'none', xl: 'large' }}
            borderColor={'neutral-faded'}
            width={{ s: '100%', xl: 78 }}
          >
            <View gap={4}>
              <View direction='row' className='!justify-between'>
                <Text variant={'body-3'}>SubTotal</Text>
                <Text variant={'body-3'}>370 €</Text>
              </View>
              <Divider />
              <View gap={1}>
                <View direction='row' className='!justify-between'>
                  <Text variant={'body-3'} weight={'bold'}>
                    Total Cost estimation
                  </Text>
                  <Text variant={'body-3'} weight={'bold'}>
                    400 €
                  </Text>
                </View>
                <Text color={'neutral-faded'} variant={'caption-1'}>
                  7% Tax Included
                </Text>
              </View>
            </View>
            <Button type='submit' color='primary' className='!rounded-medium'>
              <View padding={1}>
                <Text variant={'body-2'} weight={'medium'}>
                  Review Order
                </Text>
              </View>
            </Button>
          </View>
        </View.Item>
      </View>
    </form>
  );
};

export default ShippingForm;
