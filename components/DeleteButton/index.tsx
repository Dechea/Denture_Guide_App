'use client';

import { Button, Icon } from 'reshaped';
import BinIcon from '../Icons/Bin';

interface DeleteButtonProps {
  onClick: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <Button
      icon={<Icon svg={BinIcon} size={4} />}
      variant='ghost'
      size='small'
      onClick={onClick}
    />
  );
}
