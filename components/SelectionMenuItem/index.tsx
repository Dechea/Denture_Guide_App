'use client';

import { useState } from 'react';
import {
  Actionable,
  Badge,
  Icon,
  MenuItem,
  Text,
  Tooltip,
  View,
} from 'reshaped';
import ToothIcon from '../Icons/Tooth';
import StorageIcon from '../Icons/Storage';

export interface SelectionMenuItemProps {
  localStorageCount: number;
  selectedTeeth: number;
  id: number;
  onClick: Function;
}

const SelectionMenuItem = ({
  id,
  localStorageCount,
  selectedTeeth,
  onClick,
}: SelectionMenuItemProps) => {
  const [selectedItemId, setSelectedItemId] = useState<boolean>(false);
  const handleMenuItemClick = (selectedItemId: boolean) => {
    onClick();
    setSelectedItemId(selectedItemId);
  };

  return (
    <View direction='row' align='center' width='285px'>
      <View.Item grow>
        <MenuItem
          selected={selectedItemId}
          startSlot={
            <Icon
              svg={<ToothIcon />}
              size={'20px'}
              color={selectedItemId ? 'primary' : 'neutral-faded'}
            />
          }
          roundedCorners
          size='small'
          fullWidth
          onClick={() => handleMenuItemClick(!selectedItemId)}
        >
          <View direction='row' align='center'>
            <View.Item grow>
              <Text variant='body-3' weight='medium'>{selectedTeeth}</Text>
            </View.Item>

            {localStorageCount && (
              <Tooltip text='In Local Storage' position='top'>
                {(attributes) => (
                  <Actionable attributes={attributes} as='div'>
                    <View direction='row' paddingEnd={1} gap={1} align='center'>
                      <Icon
                        size={5}
                        svg={<StorageIcon />}
                        color={selectedItemId ? 'primary' : 'neutral-faded'}
                      />
                      <Badge
                        color={selectedItemId ? 'primary' : undefined}
                        size='small'
                      >
                        {localStorageCount}
                      </Badge>
                    </View>
                  </Actionable>
                )}
              </Tooltip>
            )}
          </View>
        </MenuItem>
      </View.Item>
    </View>
  );
};

export default SelectionMenuItem;
