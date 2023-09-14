'use client';

import { View, TextField, Checkbox, Text, Hidden } from 'reshaped';
import { AddressType } from './constants';
import FormHelperText from '../FormHelperText';
import { Address } from '../../fqlx-generated/typedefs';

interface AddressFormProps {
  values: Address;
  initialAddress: Address;
  addressType: string;
  isBillingSameAsShippingAddress?: boolean;
  errors: any;
  touched: any;
  handleChange: (event: any) => void;
}

const AddressForm = ({
  values,
  initialAddress,
  addressType,
  isBillingSameAsShippingAddress = false,
  errors,
  touched,
  handleChange,
}: AddressFormProps) => {
  return (
    <View gap={6} direction='row'>
      <View.Item columns={12}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          Full Name
        </Text>
        <TextField
          name={`${addressType}.name`}
          variant={'outline'}
          placeholder={'John Doe Jr. III'}
          className={'!rounded-medium'}
          value={values.name}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.name && touched?.name && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <View.Item columns={12}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          Street Address
        </Text>
        <TextField
          name={`${addressType}.street`}
          variant={'outline'}
          placeholder={'Mozart 3 strasse'}
          className={'!rounded-medium'}
          value={values.street}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.street && touched?.street && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <View.Item columns={12}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          {'Building number, apartment, suite etc. (optional)'}
        </Text>
        <TextField
          name={`${addressType}.streetNo`}
          variant={'outline'}
          placeholder={'1A...'}
          className={'!rounded-medium'}
          value={values.streetNo}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.streetNo && touched?.streetNo && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <View.Item columns={{ s: 12, l: 6 }}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          Postal Code
        </Text>
        <TextField
          name={`${addressType}.zip`}
          variant={'outline'}
          placeholder={'XXX XXX'}
          className={'!rounded-medium'}
          value={values.zip}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.zip && touched?.zip && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <View.Item columns={{ s: 12, l: 6 }}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          City
        </Text>
        <TextField
          name={`${addressType}.city`}
          variant={'outline'}
          placeholder={'Berlin'}
          className={'!rounded-medium'}
          value={values.city}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.city && touched?.city && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <View.Item columns={{ s: 12, l: 6 }}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          State
        </Text>
        <TextField
          name={`${addressType}.state`}
          variant={'outline'}
          placeholder={'Bavaria'}
          className={'!rounded-medium'}
          value={values.state}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.state && touched?.state && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <View.Item columns={{ s: 12, l: 6 }}>
        <Text
          variant={'body-3'}
          weight={'medium'}
          className={`${addressType}.pb-x1`}
        >
          Country
        </Text>
        <TextField
          name={`${addressType}.country`}
          variant={'outline'}
          className={'!rounded-medium'}
          value={values.country}
          onChange={({ event }) => {
            handleChange(event);
          }}
        />
        {errors?.country && touched?.country && (
          <FormHelperText
            message={'This field is required'}
            variant={'error'}
          />
        )}
      </View.Item>
      <Hidden hide={Boolean(initialAddress.type !== AddressType.SHIPPING)}>
        <View.Item columns={12}>
          <Checkbox
            name={`${addressType}.isBillingSameAsShippingAddress`}
            value={`${isBillingSameAsShippingAddress}`}
            checked={isBillingSameAsShippingAddress}
            onChange={({ event }) => handleChange(event)}
          >
            My billing address is same as shipping address
          </Checkbox>
        </View.Item>
      </Hidden>
    </View>
  );
};

export default AddressForm;
