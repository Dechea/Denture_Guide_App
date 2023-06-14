'use client';

import { MenuItem, Text } from 'reshaped';

const MenuItemWithBadge = ({
  startIcon,
  text,
  endIcon,
  clicked,
  textColor = 'neutral',
}: {
  startIcon?: JSX.Element;
  text?: string;
  endIcon?: JSX.Element;
  clicked?: any;
  textColor?: string;
}) => {
  return (
    <MenuItem
      startSlot={startIcon}
      roundedCorners
      size='small'
      endSlot={endIcon}
      onClick={clicked}
    >
      <Text color='neutral' variant='body-3' weight='medium' attributes={{ style: { color: textColor } }}>
        {text}
      </Text>
    </MenuItem>
  );
};

export default MenuItemWithBadge;
