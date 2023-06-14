import './globals.css';
import '../themes/dechea/theme.css';
import { Reshaped, View } from 'reshaped';
import Navbar from '../components/Navbar';
import FqlxClientProvider from './FqlxClientProvider';
import { ClerkProvider } from '@clerk/nextjs';

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
              <View direction='row' height='100vh' align='stretch'>
                <View.Item>
                  <Navbar />
                </View.Item>
                <View.Item grow>{children}</View.Item>
              </View>
            </FqlxClientProvider>
          </Reshaped>
        </body>
      </ClerkProvider>
    </html>
  );
}
