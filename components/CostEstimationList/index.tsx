import { Divider, Text, View } from 'reshaped';
import { UniqueProduct } from '../../app/[patientFileId]/cost-estimation/page';

interface CostEstimationListProps {
  products: UniqueProduct;
}

export default function CostEstimationList({
  products,
}: CostEstimationListProps) {
  return (
    <>
      <View direction='row' width='100%'>
        <View.Item columns={2}>
          <Text color='neutral-faded' variant='caption-1'>
            Quantity
          </Text>
        </View.Item>

        <View.Item columns={3}>
          <Text color='neutral-faded' variant='caption-1'>
            Product
          </Text>
        </View.Item>

        <View.Item columns={6} gapBefore={10}>
          <Text color='neutral-faded' variant='caption-1'>
            Details
          </Text>
        </View.Item>

        <View.Item columns={1}>
          <Text color='neutral-faded' variant='caption-1' align='end'>
            Price
          </Text>
        </View.Item>
      </View>

      {Object.entries(products).map(([productId, productInfo]) => {
        const product =
          productInfo.details['implant'] ??
          productInfo.details['abutment'] ??
          productInfo.details['healingAbutment'] ??
          productInfo.details['temporaryAbutment'] ??
          productInfo.details['impression'] ??
          productInfo.details['labScrew'] ??
          productInfo.details['implantReplica'] ??
          productInfo.details['clampingAid'] ??
          productInfo.details['orientationAid'] ??
          productInfo.details['protectionAid'] ??
          productInfo.details['screwdriver'] ??
          {};

        const productName =
          productInfo.details.localizations
            ?.find((item: { locale: string }) => item.locale === 'EN')
            ?.name?.split(',')?.[0] ?? '-';

        const price = productInfo.details?.localizations?.[1]?.price
          ?.amount as number;

        const productPrice = isNaN(price) ? 0 : price;

        return (
          <View key={productId}>
            <View paddingTop={3} paddingBottom={4}>
              <Divider className='print:!border print:!border-solid print:!border-[--rs-color-border-neutral-faded]' />
            </View>

            <View gap={4} divided>
              <View direction='row' width='100%' key={productId}>
                <View.Item columns={2}>
                  <Text color='neutral-faded' variant='body-3' weight='regular'>
                    {productInfo.count}
                  </Text>
                </View.Item>
                <View.Item columns={3}>
                  <Text variant='body-3' weight='medium'>
                    {productName}
                  </Text>
                </View.Item>

                <View.Item columns={6} gapBefore={10}>
                  <View gap={2}>
                    {Object.entries(product).map(
                      ([productKey, productValue]) => {
                        return (
                          <Text
                            key={productKey}
                            color='neutral-faded'
                            variant='body-3'
                            weight='regular'
                            className='break-words'
                          >
                            {productValue
                              ? `${productKey}: ${productValue}`
                              : productKey}
                          </Text>
                        );
                      }
                    )}
                  </View>
                </View.Item>

                <View.Item columns={1}>
                  <Text
                    color='neutral-faded'
                    variant='body-3'
                    weight='medium'
                    align='end'
                  >
                    {productPrice * productInfo.count} €
                  </Text>
                </View.Item>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
}
