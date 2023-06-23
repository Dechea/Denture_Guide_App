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
      <View.Item>
        <OrderDashboardHeader activateNewOrderModal={activateNewOrderModal} />
      </View.Item>

      <View.Item grow>
        <PatientList activateNewOrderModal={activateNewOrderModal} />
      </View.Item>

      <CreateOrder
        activeModal={activeNewOrderModal}
        deactivateModal={deactivateNewOrderModal}
      />
    </View>
  );
}
