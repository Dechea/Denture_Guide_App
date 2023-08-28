import React from 'react';
import { DropdownMenu, Image, Text, View } from 'reshaped';

interface MenuItemWithImageProps {
  image?: string;
  imageAlt: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function MenuItemWithImage({
  image,
  imageAlt,
  onClick,
  children,
}: MenuItemWithImageProps) {
  return (
    <DropdownMenu.Item onClick={onClick}>
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
    </DropdownMenu.Item>
  );
}
