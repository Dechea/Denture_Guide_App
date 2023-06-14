'use client';

import { useAuth } from '@clerk/nextjs';
import { FqlxProvider } from 'fqlx-client';
import { useEffect, useState } from 'react';

const FAUNA_ENDPOINT = 'https://db.fauna.com';

interface FqlxClientProviderProps {
  children: React.ReactNode;
}

export default function FqlxClientProvider({
  children,
}: FqlxClientProviderProps) {
  const [token, setToken] = useState('');
  const { userId, getToken } = useAuth();

  const fetchToken = async () => {
    const localToken = await getToken({ template: 'fauna' });
    if (localToken !== token) {
      console.log('new token ', localToken);
      setToken(localToken || 'failed');
    }
  };

  useEffect(() => {
    let intervalId: any = null;

    const startInterval = () => {
      intervalId = setInterval(fetchToken, 60000);
    };

    const stopInterval = () => {
      clearInterval(intervalId);
    };

    startInterval();

    return () => {
      stopInterval();
    };
  }, []);

  useEffect(() => {
    fetchToken();
  }, [userId])

  return (
    <>
      {token ? (
        <FqlxProvider
          config={{
            fqlxSecret: token,
            endpoint: new URL(FAUNA_ENDPOINT),
          }}
          loader={<div>Loading...</div>}
        >
          <>{children}</>
        </FqlxProvider>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
