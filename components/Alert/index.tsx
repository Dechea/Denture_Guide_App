'use client';

import { Alert, View } from 'reshaped';
import LightningBoltIcon from '../Icons/LightningBolt';

const AlertCard = () => {
  return (
    <View>
      <Alert
        title=' Why do you need to select implants? '
        icon={<LightningBoltIcon />}
      >
        Alerts display a prominent message related to the whole page or its
        specific area.
      </Alert>
    </View>
  );
};
export default AlertCard;
