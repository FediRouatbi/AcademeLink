import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { AuthProvider, ReactQueryProvider, ThemeProvider } from '@/providers';
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartLearn',
  description: 'SmartLearn Platform',
};
const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: 'en' | 'fr' };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#63e6be" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>

            <Toaster richColors position="bottom-left" />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
