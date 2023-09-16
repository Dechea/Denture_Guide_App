import './globals.css';
import '@/themes/dechea/theme.css';
import { Reshaped } from 'reshaped';
import { ClerkProvider } from '@clerk/nextjs';
import FqlxClientProvider from './FqlxClientProvider';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Material Planner',
  description: 'Implant and prothetics guided buy and cost estimations',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const CrispWithNoSSR = dynamic(
    () => import('@/components/operation/chat/crisp.js')
  )

  return (
    <html lang='en'>
      <ClerkProvider>
        <body>
          <Reshaped theme='dechea'>
            <FqlxClientProvider>{children}</FqlxClientProvider>
          </Reshaped>
        </body>
        <CrispWithNoSSR />
      </ClerkProvider>
    </html>
  );
}
