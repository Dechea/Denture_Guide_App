import { Text } from 'reshaped';

const FormHelperText = ({
  message,
  variant,
}: {
  message: string;
  variant?: string;
}) => {
  return (
    <Text
      variant={'body-3'}
      color={variant === 'error' ? 'critical' : undefined}
    >
      {message}
    </Text>
  );
};

export default FormHelperText;
