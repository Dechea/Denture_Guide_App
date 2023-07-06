import { Image, Text, View } from 'reshaped';

interface ImageWithDetailsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export default function ImageWithDetailsCard({
  description,
  imageUrl,
  price,
  title,
}: ImageWithDetailsCardProps) {
  return (
    <View direction='row' align='stretch' gap={4}>
      <Image
        src={imageUrl}
        alt={title}
        width='72px'
        height='72px'
        borderRadius='medium'
      />

      <View.Item grow>
        <View align='stretch' height='100%' className='!justify-between'>
          <View align='start' gap={0.25}>
            <Text variant='body-3' weight='medium'>
              {title}
            </Text>
            <Text variant='caption-1' weight='regular' color='neutral-faded'>
              {description}
            </Text>
          </View>

          <View direction='row' justify='start' align='center' gap={4}>
            <Text variant='caption-1' weight='regular'>
              {isNaN(price) ? 0 : price}
            </Text>
          </View>
        </View>
      </View.Item>
    </View>
  );
}
