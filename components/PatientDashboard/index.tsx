'use client';

import { useState, useEffect } from 'react';
import { ChangeHandler } from 'reshaped/types/global';
import { useToggle, View } from 'reshaped';
import PatientDashboardHeader from '../PatientDashboardHeader';
import PatientList from '../PatientList';
import NoResult from '../NoResult';
import NoPatientOrder from '../NoPatientOrder';
import CreatePatient from '../CreatePatient';

interface Patient {
  id: number;
  avatar: string;
  name: string;
  status: string;
  date: string;
}

export default function PatientDashboard({
  initialPatientOrders,
}: {
  initialPatientOrders: Patient[];
}): JSX.Element {
  const [patientOrders, setPatientOrders] =
    useState<Patient[]>(initialPatientOrders);
  const [isSearchingPatientOrder, setisSearchingPatientOrder] = useState(false);
  const {
    active: activeNewPatientModal,
    activate: activateNewPatientModal,
    deactivate: deactivateNewPatientModal,
  } = useToggle();

  const onSearchPatientOrder: ChangeHandler<string> = ({
    value,
  }: {
    value: string;
  }) => {
    let filteredData;
    if (value) {
      setisSearchingPatientOrder(true);
      filteredData = patientOrders.filter((data) =>
        data.name.toLowerCase().includes(value.toLowerCase())
      );
      setPatientOrders(filteredData);
    } else {
      setisSearchingPatientOrder(false);
      setPatientOrders(initialPatientOrders);
    }
  };

  useEffect(() => {
    setPatientOrders(initialPatientOrders);
  }, [initialPatientOrders]);

  return (
    <View direction='column' width='100%' height='100%' divided>
      <View.Item>
        <PatientDashboardHeader
          onSearchPatientOrder={onSearchPatientOrder}
          disableSearch={!initialPatientOrders.length}
          activateNewPatientModal={activateNewPatientModal}
        />
      </View.Item>

      <View.Item grow>
        {!!patientOrders.length && (
          <PatientList patientOrders={patientOrders} />
        )}

        {!patientOrders.length && isSearchingPatientOrder && <NoResult />}

        {!initialPatientOrders.length && (
          <NoPatientOrder activateNewPatientModal={activateNewPatientModal} />
        )}
      </View.Item>

      <CreatePatient
        activeModal={activeNewPatientModal}
        deactivateModal={deactivateNewPatientModal}
      />
    </View>
  );
}
