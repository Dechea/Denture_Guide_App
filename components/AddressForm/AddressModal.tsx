import { Modal, View, Text, Button } from 'reshaped';
import UnionIcon from '../Icons/Union';
import { Address } from '../../fqlx-generated/typedefs';
import AddressForm from './AddressForm';
import { useFormik } from 'formik';
import { addressModalValidationSchema } from './validationSchema';

function titleCase(text: string) {
  return text
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

interface AddressModalProps {
  key?: string;
  active: boolean;
  deactivate: () => void;
  initialAddress: Address;
  formSubmit: (formAddress: Address) => void;
}

const AddressModal = ({
  key,
  active,
  deactivate,
  initialAddress,
  formSubmit,
}: AddressModalProps) => {
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    validationSchema: addressModalValidationSchema,
    initialValues: { address: initialAddress },
    onSubmit: (values) => formSubmit(values.address),
  });

  return (
    <Modal active={active} onClose={deactivate} padding={6} className={'!pb-0'}>
      <View width='100%'>
        <View direction='row' className='!justify-between'>
          <Text variant='featured-3' weight='bold'>
            {titleCase(initialAddress.type ?? '')} Address
          </Text>
          <Button
            size={'medium'}
            variant={'ghost'}
            icon={<UnionIcon />}
            onClick={deactivate}
          />
        </View>

        <form onSubmit={handleSubmit}>
          <View paddingTop={11} paddingBottom={9}>
            <AddressForm
              values={values.address}
              addressType='address'
              errors={errors.address}
              touched={touched.address}
              handleChange={handleChange}
            />
          </View>
          <View
            width='100%'
            direction='row'
            justify='end'
            paddingBlock={3}
            gap={2}
          >
            <Button
              variant='outline'
              color='neutral'
              size='medium'
              onClick={deactivate}
            >
              Cancel
            </Button>
            <Button type='submit' variant='solid' color='primary' size='medium'>
              Save
            </Button>
          </View>
        </form>
      </View>
    </Modal>
  );
};

export default AddressModal;
