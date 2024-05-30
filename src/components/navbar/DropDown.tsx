'use client';
import React, { useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useRouter } from '@/navigation';
import * as NProgress from 'nprogress';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import useGetMyProfile from '@/hooks/useGetMyProfile';

const DropDown = () => {
  const session = useSession();

  const { data: queryData } = useGetMyProfile();

  const t = useTranslations('Navbar.DropDown');
  const { push, replace } = useRouter();
  useEffect(() => {
    NProgress.done();
  }, []);

  if (session.status === 'unauthenticated') {
    replace('/login');
  }

  const userName = queryData?.getCurrentUser?.user_name;
  const userImage = queryData?.getCurrentUser?.image_url || '/user.svg';
  return (
    <>
      <div>{userName}</div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
            size="icon"
            variant="ghost"
          >
            <Image
              alt="Avatar"
              className="rounded-full"
              height="32"
              src={userImage}
              style={{
                aspectRatio: '32/32',
                objectFit: 'cover',
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t('account')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              NProgress.start();
              push('/settings');
            }}
          >
            {t('settings')}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={async () => {
              await signOut({ redirect: false });
              NProgress.start();
              push('/login');
            }}
          >
            {t('logout')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDown;
