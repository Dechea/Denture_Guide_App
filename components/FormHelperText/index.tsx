import { Text } from 'reshaped';

const FormHelperText = ({ message }: { message: string }) => {
  return (
    <Text variant={'body-3'} color={'critical'}>
      {message}
    </Text>
  );
};

export default FormHelperText;
