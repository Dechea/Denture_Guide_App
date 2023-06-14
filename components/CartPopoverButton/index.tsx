'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Badge, Button, Popover, Text, View } from 'reshaped';
import CartIcon from '../Icons/Cart';

const CartPopoverButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Popover>
      <Popover.Trigger>
        {(attributes) => (
          <Button
            icon={<CartIcon />}
            endIcon={<Badge size='small'>0</Badge>}
            variant='ghost'
            size='small'
            color='neutral'
            attributes={attributes}
            highlighted={pathname === '/cart'}
          >
            0.00€
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <View gap={4}>
          <Text variant='body-2' color='neutral'>
            Here you can order selected items that are not in your Local Storage
          </Text>
          <Button
            icon={<CartIcon />}
            fullWidth
            onClick={() => {
              router.push('/cart');
            }}
            color='neutral'
          >
            Open Cart
          </Button>
        </View>
      </Popover.Content>
    </Popover>
  );
};

export default CartPopoverButton;
