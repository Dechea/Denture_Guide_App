'use client';

import { ChangeHandler } from 'reshaped/types/global';
import { Button, Text, TextField, View } from 'reshaped';
import PlusIcon from '../Icons/Plus';
import SearchIcon from '../Icons/Search';

export default function PatientDashboardHeader({
  onSearchPatientOrder,
  disableSearch,
  activateNewPatientModal,
}: {
  onSearchPatientOrder: ChangeHandler<string>;
  disableSearch: boolean;
  activateNewPatientModal: () => void;
}) {
  return (
    <View>
      <View
        direction='row'
        align='center'
        backgroundColor='neutral'
        padding={10}
      >
        <View.Item columns={6}>
          <View>
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
            gap={4}
            wrap={false}
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
