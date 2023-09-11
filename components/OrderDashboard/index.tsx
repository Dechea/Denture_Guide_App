'use client';

import { useToggle, View } from 'reshaped';
import OrderDashboardHeader from '../OrderDashboardHeader';
import PatientList from '../PatientList';
import CreateOrder from '../CreateOrder';

export default function OrderDashboard(): JSX.Element {
  const {
    active: activeNewOrderModal,
    activate: activateNewOrderModal,
    deactivate: deactivateNewOrderModal,
  } = useToggle();

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
      />
    </View>
  );
}
