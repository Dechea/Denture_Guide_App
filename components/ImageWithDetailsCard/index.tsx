import { Image, Text, View } from 'reshaped';

interface ImageWithDetailsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  children: React.ReactNode;
}

export default function ImageWithDetailsCard({
  description,
  imageUrl,
  price,
  title,
  children,
}: ImageWithDetailsCardProps) {
  return (
    <View direction="row" align="stretch" gap={4} width="100%">
      <Image
        src={imageUrl}
        alt={title}
        width="48px"
        height="48px"
        borderRadius="medium"
      />

      <View.Item grow>
        <View gap={8}>
          <View align="stretch" height="100%" className="!justify-between">
            <View align="start" gap={0.25}>
              <Text variant="body-3" weight="medium">
                {title}
              </Text>
              <Text variant="caption-1" weight="regular" color="neutral-faded">
                {description}
              </Text>
            </View>

            <View gap={4} paddingTop={4}>
              <Text variant="body-3" weight="medium">
                {isNaN(price) ? 0 : price} €
              </Text>
            </View>
          </View>
          <View>{children}</View>
        </View>
      </View.Item>
    </View>
  );
}
