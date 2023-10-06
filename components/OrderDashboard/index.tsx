'use client';

import { useToggle, View } from 'reshaped';
import OrderDashboardHeader from '../OrderDashboardHeader';
import PatientList from '../PatientList';
import CreateOrder from '../CreateOrder';
import { useLocalStorage } from 'fauna-typed';
import { useEffect } from 'react';
import { DISCOVERYMODE } from '../../__mocks__/flow';

export default function OrderDashboard(): React.JSX.Element {
  const {
    active: activeNewOrderModal,
    activate: activateNewOrderModal,
    deactivate: deactivateNewOrderModal,
  } = useToggle();
  const { value: discoveryModePatientFile } = useLocalStorage(
    `${DISCOVERYMODE}`,
    'PatientFile'
  );

  useEffect(() => {
    if (discoveryModePatientFile.teeth.length > 1) {
      activateNewOrderModal();
    }
  }, []);

  return (
    <View direction='column' width='100%' height='100%' divided>
      <View
        width='100%'
        gap={10}
        backgroundColor='neutral-faded'
        paddingBottom={10}
      >
        <OrderDashboardHeader />
        <View align='center' paddingInline={{ s: 4, m: 35 }} width='100%'>
          <PatientList activateNewOrderModal={activateNewOrderModal} />
        </View>
      </View>

      <CreateOrder
        activeModal={activeNewOrderModal}
        deactivateModal={deactivateNewOrderModal}
        isDiscoveryMode={discoveryModePatientFile != null}
      />
    </View>
  );
}
