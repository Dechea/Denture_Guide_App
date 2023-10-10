import './globals.css';
import '../themes/dechea/theme.css';
import { Reshaped } from 'reshaped';
import { ClerkProvider } from '@clerk/nextjs';
import FqlxClientProvider from './FqlxClientProvider';
import { Analytics } from '@vercel/analytics/react';

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
  return (
    <html lang='en'>
      <ClerkProvider>
        <body>
          <Reshaped theme='dechea'>
            <FqlxClientProvider>
              {children}
              <Analytics />
            </FqlxClientProvider>
          </Reshaped>
        </body>
      </ClerkProvider>
    </html>
  );
}
