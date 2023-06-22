'use client';

import { useToggle, View } from 'reshaped';
import { useQuery } from 'fqlx-client';
import OrderDashboardHeader from '../OrderDashboardHeader';
import PatientList from '../PatientList';
import NoOrder from '../NoPatientOrder';
import CreateOrder from '../CreateOrder';
import { Query } from '../../fqlx-generated/typedefs';

export default function OrderDashboard(): JSX.Element {
  const query = useQuery<Query>();

  const {
    active: activeNewOrderModal,
    activate: activateNewOrderModal,
    deactivate: deactivateNewOrderModal,
  } = useToggle();

  const patientFilesCount = query.PatientFile.all()
    .where((product) => true)
    .count()
    .exec();

  return (
    <View direction='column' width='100%' height='100%' divided>
      <View.Item>
        <OrderDashboardHeader activateNewOrderModal={activateNewOrderModal} />
      </View.Item>

      <View.Item grow>
        {patientFilesCount ? (
          <PatientList />
        ) : (
          <NoOrder activateNewOrderModal={activateNewOrderModal} />
        )}
      </View.Item>

      <CreateOrder
        activeModal={activeNewOrderModal}
        deactivateModal={deactivateNewOrderModal}
      />
    </View>
  );
}
