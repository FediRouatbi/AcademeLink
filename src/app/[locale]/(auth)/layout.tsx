import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/fr');
  }
  return (
    <div className="w-full lg:grid  lg:grid-cols-2 min-h-svh overflow-hidden">
      {children}
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <Image
          alt="Image"
          className="h-full w-full object-cover"
          height="1080"
          src="/study.jpg"
          style={{
            aspectRatio: '1920/1080',
            objectFit: 'cover',
          }}
          width="1920"
          priority
        />
      </div>
    </div>
  );
}
