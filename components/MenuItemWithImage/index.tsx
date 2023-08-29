import React from 'react';
import { Autocomplete, Image, View } from 'reshaped';

interface MenuItemWithImageProps {
  value: string;
  image?: string;
  imageAlt: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function MenuItemWithImage({
  value,
  image,
  imageAlt,
  onClick,
  children,
}: MenuItemWithImageProps) {
  return (
    <Autocomplete.Item value={value} onClick={onClick}>
      <View direction="row" gap={2} wrap={false}>
        <Image
          src={image}
          alt={imageAlt}
          height="40px"
          width="40px"
          borderRadius="medium"
        />
        <View gap={1}>{children}</View>
      </View>
    </Autocomplete.Item>
  );
}
