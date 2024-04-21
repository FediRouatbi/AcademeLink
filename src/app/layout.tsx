import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "sonner";
import { AuthProvider, ReactQueryProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AcademeLink",
  description: "AcademeLink Platform",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: "en" | "fr" };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AuthProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster richColors position="bottom-left" />
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
