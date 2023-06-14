'use client';

import React, { useEffect } from 'react';
import PatientDashboard from '../components/PatientDashboard';

const initialPatientOrders = [
  {
    id: 1,
    avatar: '/defaultAvatar.svg',
    name: 'Simon Petersen',
    status: 'Waiting for Lab',
    date: 'March 12, 2023',
  },
  {
    id: 2,
    avatar: '/defaultAvatar.svg',
    name: 'Ashley Muller',
    status: 'Shipping',
    date: 'March 31, 2023',
  },
  {
    id: 3,
    avatar: '/defaultAvatar.svg',
    name: 'Samantha Lehmann',
    status: 'Arriving Today',
    date: 'March 11, 2023',
  },
];

export default function Home() {
  const sortPatientOrdersByDate = () => {
    initialPatientOrders.sort((firstPatient, secondPatient) => {
      return (
        new Date(firstPatient.date).getTime() -
        new Date(secondPatient.date).getTime()
      );
    });
  };

  useEffect(() => {
    sortPatientOrdersByDate();
  }, []);

  return <PatientDashboard initialPatientOrders={initialPatientOrders} />;
}
