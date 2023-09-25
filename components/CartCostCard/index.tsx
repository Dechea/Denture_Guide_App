import { Button, Divider, Text, View } from 'reshaped';
import { useProductCalculations } from '../../hooks/useProductCalculations';

interface CartCostCardProps {
  params: { patientFileId: string };
  onClick?: any;
  buttonText: string;
  icon?: any;
  color?: 'primary';
  type?: 'submit';
}

export default function CartCostCard({
  params,
  onClick,
  buttonText,
  icon,
  color,
  type,
}: CartCostCardProps) {
  const { totalCostOfProductsInCart, totalCostOfProductsInCartWithTax } =
    useProductCalculations(params.patientFileId);

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
            {`${totalCostOfProductsInCart.toFixed(2)} €`}
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
            {`${totalCostOfProductsInCartWithTax.toFixed(2)}`} €
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
