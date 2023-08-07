import { Divider, Text, View, Image } from 'reshaped';
import ComposedTeethDiagram from '../TeethDiagram/composedTeethDiagram';
import { useQuery } from 'fqlx-client';
import { Query } from '../../fqlx-generated/typedefs';
import { useProductCalculations } from '../../hooks/useProductCalculations';

interface PrintCostEstimationHeaderProps {
  patientFileId: string;
}

export default function PrintCostEstimationHeader({
  patientFileId,
}: PrintCostEstimationHeaderProps) {
  const query = useQuery<Query>();
  const { totalCostOfProductsInCart } = useProductCalculations(patientFileId);

  const PatientFile = query.PatientFile.byId(patientFileId)
    .project({ patient: true })
    .exec();

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');

  return (
    <View className='hidden print:block print:px-x12'>
      <View gap={18}>
        <View gap={4} direction='row'>
          <Image src='/decheaLogo.svg' alt='Dechea' height='100%' width={5} />

          <Text variant='body-1' weight='medium' color='neutral-faded'>
            Cost Estimation
          </Text>
        </View>

        <View gap={16}>
          <View gap={3}>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              Total / Inc. 7% VAT
            </Text>

            <View direction='row' align='center'>
              <View.Item columns={9}>
                <Text variant='title-5' className='print:pt-x4'>
                  {totalCostOfProductsInCart} €
                </Text>
              </View.Item>

              <View.Item columns={3}>
                <View className='flex justify-between'>
                  <Text variant='body-3' weight='regular' color='neutral-faded'>
                    Date:
                  </Text>
                  <Text variant='body-3' weight='regular'>
                    {formattedDate}
                  </Text>
                </View>
                <View className='flex justify-between'>
                  <Text variant='body-3' weight='regular' color='neutral-faded'>
                    Patient:
                  </Text>
                  <Text variant='body-3' weight='regular'>
                    {PatientFile?.patient?.name}
                  </Text>
                </View>
              </View.Item>
            </View>
          </View>

          <View gap={10}>
            <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
            <ComposedTeethDiagram />
            <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
          </View>
        </View>

        <Text
          className='hidden print:block'
          variant='featured-3'
          weight='medium'
        >
          Details
        </Text>
      </View>
    </View>
  );
}
