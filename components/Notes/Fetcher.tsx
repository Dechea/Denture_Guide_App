import { QueryBuilder, QueryRequest } from 'fauna';
import React from 'react';
import { client } from '../../src/fauna';

export default async function Fetcher({
  children,
  query,
}: {
  children: React.ReactNode;
  query: QueryRequest | QueryBuilder;
}) {
  const data = (await client.query(query)).data?.data;
  const newProps = {
    data,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, newProps);
    }
    return child;
  });
  return childrenWithProps;
}
