'use client';

import { Button, Text, View } from 'reshaped';
import PlusIcon from '../Icons/Plus';

interface PatientDashboardHeaderProps {
  activateNewPatientModal: () => void;
}

export default function PatientDashboardHeader({
  activateNewPatientModal,
}: PatientDashboardHeaderProps) {
  return (
    <View>
      <View
        direction='row'
        align='center'
        backgroundColor='neutral-faded'
        paddingInline={10}
        
      >
        <View.Item columns={6}>
          <View paddingBlock={8}>
            <Text color='neutral' variant='featured-2' weight='bold'>
               Orders
            </Text>
          </View>
        </View.Item>
        <View.Item columns={6}>
          <View
            direction='row'
            justify='end'
            align='center'
            paddingBlock={8}
            wrap={false}
            height='48px'
          >
            
            <Button
              icon={<PlusIcon />}
              color='primary'
              size='large'
              onClick={activateNewPatientModal}
            >
              Create Order
            </Button>
          </View>
        </View.Item>
      </View>
    </View>
  );
}
