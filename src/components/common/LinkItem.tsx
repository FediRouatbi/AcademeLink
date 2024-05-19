'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type Props = { href: string; icon: ReactNode; text: string; isActive: string };

const LinkItem = ({ href, icon, text, isActive }: Props) => {
  const t = useTranslations('Sidebar');

  const { data: session } = useSession();
  const role = session?.user?.role;
  const activeStyle = 'bg-gray-100 text-gray-900';
  const pathname = usePathname();
  const isHomePage = pathname?.length === 3 && isActive === 'home';

  const className = cn(
    'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
    (pathname?.includes(isActive) || isHomePage) && activeStyle
  );

  if (role !== 'ADMIN' && href.includes('subjects')) return null;

  return (
    <Link className={className} href={href} prefetch>
      {icon}
      {t(text)}
    </Link>
  );
};

export default LinkItem;
