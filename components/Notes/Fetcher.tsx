'use client';

import React, { useEffect, useState } from 'react';

type dataType =
  | string
  | object
  | number
  | string[]
  | number[]
  | object[]
  | boolean
  | boolean[];

type childPropsState = {
  data: dataType;
  addData: Function;
  resetData: Function;
};

export default function Fetcher({
  children,
  query,
}: {
  children: React.ReactNode;
  query: string;
}) {
  const addData = (newData: dataType) => {
    console.log('Adding data');
    setChildProps({ ...childProps, data: newData });
  };

  const resetData = (
    latestData: dataType,
    dataToCompare: string | number,
    comparisionKey?: string
  ) => {
    console.log('Reseting data');

    if (Array.isArray(latestData) && comparisionKey) {
      const filteredData = latestData?.filter(
        (ele) => ele[comparisionKey] !== dataToCompare
      );

      setChildProps({ ...childProps, data: filteredData });
    }
  };

  const [childProps, setChildProps] = useState<childPropsState>({
    data: [],
    addData,
    resetData,
  });

  const fetchData = async () => {
    try {
      const fetchedData = await fetch('/api/getData', {
        method: 'POST',
        body: JSON.stringify({ query }),
      });
      const res = await fetchedData.json();
      let data = [];

      if (res?.data) {
        data = res.data;
      } else {
        data = res;
      }

      setChildProps({ ...childProps, data });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  return childrenWithProps;
}
