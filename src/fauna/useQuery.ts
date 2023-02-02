"use client";

import { useEffect, useState } from "react";

type dataType =
  | string
  | object
  | number
  | string[]
  | number[]
  | object[]
  | boolean
  | boolean[];

type useQueryPropsType = {
  query: string;
};

export interface useQueryReturnType {
  data: dataType;
  isLoading: boolean;
  addData: Function;
  resetData: Function;
}

export default function useQuery({ query }: useQueryPropsType) {
  const [data, setData] = useState<dataType>();
  const [isLoading, setLoading] = useState(true);

  const addData = (newData: dataType) => {
    console.log("Adding data");
    setData(newData);
  };

  const resetData = (
    latestData: dataType,
    dataToCompare: string | number,
    comparisionKey?: string
  ) => {
    console.log("Reseting data");

    if (Array.isArray(latestData) && comparisionKey) {
      const filteredData = latestData?.filter(
        (ele) => ele[comparisionKey] !== dataToCompare
      );

      setData(filteredData);
    }
  };

  const fetchData = async () => {
    try {
      const fetchedData = await fetch("/api/getData", {
        method: "POST",
        body: JSON.stringify({ query }),
      });
      const res = await fetchedData.json();
      let resData = [];

      if (res?.data) {
        resData = res.data;
      } else {
        resData = res;
      }

      setData(resData);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, addData, resetData };
}
