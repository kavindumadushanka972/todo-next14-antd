import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.css'; // add bootstrap css
import StyledComponentsRegistry from '../lib/AntdRegistry';
import MainLayout from '@/components/MainLayout';
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';
import ReduxProvider from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'Created Using Next.js 14 and Ant Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
              <MainLayout>{children}</MainLayout>
            </ConfigProvider>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
