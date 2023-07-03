'use client';

import React from 'react';
import { Button, Icon } from 'reshaped';
import BinIcon from '../Icons/Bin';

interface FunctDeleteButtonProps {
  onClick: (
    event:
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}

export default function DeleteButton({ onClick }: FunctDeleteButtonProps) {
  return (
    <Button
      icon={<Icon svg={BinIcon} size={4} />}
      variant='ghost'
      size='small'
      onClick={onClick}
    />
  );
}
