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
    <View direction="column" width="100%" height="100%" divided>
      <View.Item>
        <OrderDashboardHeader activateNewOrderModal={activateNewOrderModal} />
      </View.Item>

      <View direction="column" width="100%" align="center">
        <View direction="column" align="center" maxWidth="1280px" width="100%">
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
