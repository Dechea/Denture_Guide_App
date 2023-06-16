'use client';

import { useAuth } from '@clerk/nextjs';
import { FqlxProvider } from 'fqlx-client';
import { useEffect, useState } from 'react';
import { View } from 'reshaped';
import { useRouter, usePathname } from 'next/navigation';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

const FAUNA_ENDPOINT = 'https://db.fauna.com';

interface FqlxClientProviderProps {
  children: React.ReactNode;
}

export default function FqlxClientProvider({
  children,
}: FqlxClientProviderProps) {
  const [token, setToken] = useState('');
  const { userId, getToken } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const fetchToken = async () => {
    const localToken = await getToken({ template: 'fauna' });
    if (localToken !== token) {
      console.log('new token ', localToken);
      setToken(localToken || 'invalid');
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
  }, [userId]);

  useEffect(() => {
    // Redirect to sign-in screen, If clerk token has invalid
    if (token === 'invalid') {
      router.push('/sign-in');
    }
  }, [token]);

  return (
    <>
      {!token && <Loader />}

      {/* Only render children when sign-in route active */}
      {pathname === '/sign-in' && children}

      {token && token !== 'invalid' && (
        <FqlxProvider
          config={{
            fqlxSecret: token,
            endpoint: new URL(FAUNA_ENDPOINT),
          }}
          loader={<Loader />}
        >
          <View direction='row' height='100vh' align='stretch'>
            <View.Item>
              <Navbar />
            </View.Item>
            <View.Item grow>{children}</View.Item>
          </View>
        </FqlxProvider>
      )}
    </>
  );
}
