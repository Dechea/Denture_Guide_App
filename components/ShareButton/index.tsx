'use client';

import {
  View,
  Text,
  Button,
  Divider,
  Popover,
  TextField,
  Icon,
  MenuItem,
} from 'reshaped';
import Sharecon from '../../components/Icons/Share';
import LinkIcon from '../../components/Icons/Link';
import EnvelopeIcon from '../../components/Icons/Envelope';
import FlaskIcon from '../../components/Icons/Flask';
import PlusIcon from '../../components/Icons/Plus';

const data = [
  { id: 0, icon: <FlaskIcon />, text: 'Kempten Laboratory' },
  { id: 1, icon: <FlaskIcon />, text: 'External Chinese Laboratory' },
  { id: 2, icon: <PlusIcon />, text: 'Add Laboratory' },
  { id: 3, icon: <LinkIcon />, text: 'Copy Link' },
];

const ShareButton = () => {
  return (
    <Popover width='400px' padding={1}>
      <Popover.Trigger>
        {(attributes) => (
          <Button
            attributes={attributes}
            variant='outline'
            icon={<Sharecon />}
          >
            Share
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <View gap={1}>
          <TextField
            startSlot={<EnvelopeIcon />}
            name='email'
            placeholder='Share via email...'
          />

          <View gap={1}>
            <Divider />
            {data.map((item, index) => (
              <View gap={1} key={item.id}>
                <MenuItem
                  size='small'
                  startSlot={<Icon size={'20px'} svg={item.icon} />}
                >
                  <Text variant='body-3' weight="medium">{item.text}</Text>
                </MenuItem>
                {index == 1 && <Divider />}
              </View>
            ))}
          </View>
        </View>
      </Popover.Content>
    </Popover>
  );
};

export default ShareButton;
