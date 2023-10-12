import { Suspense } from 'react';
import Loader from '../../../components/Loader';
import { View } from 'reshaped';

export default function UserSyncLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense
        fallback={
          <View height='99vh' justify='center' align='center'>
            <Loader />
          </View>
        }
      >
        {children}
      </Suspense>
    </section>
  );
}
