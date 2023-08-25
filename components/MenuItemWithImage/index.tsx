import { DropdownMenu, Image, Text, View } from 'reshaped';

interface MenuItemWithImageProps {
  image?: string;
  title: string;
  description?: string;
  onClick: () => void;
}

export default function MenuItemWithImage({
  description,
  image,
  title,
  onClick,
}: MenuItemWithImageProps) {
  return (
    <DropdownMenu.Item onClick={onClick}>
      <View direction="row" gap={2} wrap={false}>
        <Image
          src={image}
          alt={title}
          height="40px"
          width="40px"
          borderRadius="medium"
        />
        <View gap={1}>
          <Text variant="caption-1" weight="medium">
            {title}
          </Text>
          <Text variant="body-3" weight="regular">
            {description}
          </Text>
        </View>
      </View>
    </DropdownMenu.Item>
  );
}
