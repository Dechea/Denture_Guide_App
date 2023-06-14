'use client';

import { Card, Icon, Text, View } from 'reshaped';
import NoteIcon from '../Icons/Note';

const CheckoutEditCard = () => {
  return (
    <View.Item columns={8}>
      <Card padding={6}>
        <View direction='row'>
          <View.Item grow>
            <Text variant='body-2' weight="bold">Address</Text>
            <Text variant='body-1' color='neutral-faded'>
              Spitalhofstraße 6, 87437 Kempten
            </Text>
          </View.Item>
          <View direction='row' gap={1}>
            <Icon svg={<NoteIcon />} size={4} />
            <Text color='primary' variant='body-3' weight="medium">
              Edit
            </Text>
          </View>
        </View>
      </Card>
    </View.Item>
  );
};

export default CheckoutEditCard;
