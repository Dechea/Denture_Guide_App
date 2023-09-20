import { Button, Divider, Text, View } from 'reshaped';
import { useProductCalculations } from '../../hooks/useProductCalculations';

interface CartCostCardProps {
  params: { patientFileId: string };
  onClick?: any;
  buttonText: string;
  icon?: any;
  color?: 'primary' | undefined;
  type?: 'submit' | undefined;
}

export default function CartCostCard({
  params,
  onClick,
  buttonText,
  icon,
  color,
  type,
}: CartCostCardProps) {
  const { totalCostOfProductsInCart } = useProductCalculations(
    params.patientFileId
  );
  const subtotal = (100 / 107) * totalCostOfProductsInCart;

  return (
    <View
      backgroundColor='page'
      padding={4}
      paddingBottom={{ s: 8, xl: 4 }}
      gap={6}
      borderRadius={{ s: 'none', xl: 'large' }}
      borderColor={'neutral-faded'}
      width={{ s: '100%', xl: 78 }}
    >
      <View gap={4}>
        <View
          direction='row'
          width='100%'
          align='center'
          className='!justify-between'
        >
          <Text variant='body-3' weight='regular' color='neutral'>
            Subtotal
          </Text>

          <Text variant='body-3' weight='regular'>
            {`${subtotal.toFixed(2)} €`}
          </Text>
        </View>
        <Divider />
        <View direction='row' width='100%' className='!justify-between'>
          <View direction='row' align='center' gap={1}>
            <View gap={1}>
              <Text variant='body-3' weight='bold'>
                Total
              </Text>
              <Text variant='caption-1' weight='regular'>
                Tax Included
              </Text>
            </View>
          </View>
          <Text variant='body-3' weight='bold'>
            {totalCostOfProductsInCart} €
          </Text>
        </View>
      </View>
      <Button
        variant='solid'
        size='large'
        icon={icon}
        className='!rounded-lg'
        onClick={onClick}
        color={color}
        type={type}
      >
        <Text variant='body-2' weight='medium'>
          {buttonText}
        </Text>
      </Button>
    </View>
  );
}
