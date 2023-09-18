import { Button, Divider, Text, View } from 'reshaped';
import { useProductCalculations } from '../../hooks/useProductCalculations';
import PrintIcon from '../Icons/Print';

interface CartPrintProps {
  params: { patientFileId: string };
}

export default function CartPrint({ params }: CartPrintProps) {
  const { totalCostOfProductsInCart } = useProductCalculations(
    params.patientFileId
  );
  const subtotal = (100 / 107) * totalCostOfProductsInCart;

  return (
    <View
      backgroundColor='page'
      borderRadius={{ s: 'none', xl: 'large' }}
      borderColor={'neutral-faded'}
      width={{ s: '100%', xl: 78 }}
      gap={6}
      padding={3}
      paddingTop={4}
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
        icon={<PrintIcon />}
        className='!rounded-lg'
        onClick={() => window.print()}
      >
        <Text variant='body-2' weight='medium'>
          Print
        </Text>
      </Button>
    </View>
  );
}
