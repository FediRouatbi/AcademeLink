'use client';
import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react';
import { DropdownMenuItem } from './ui/dropdown-menu';
import * as NProgress from 'nprogress';
import { useRouter } from '@/navigation';

const LogoutButton = () => {
  const { push } = useRouter();
  useEffect(() => {
    NProgress.done();
  }, []);
  return (
    <DropdownMenuItem asChild>
      <button
        className="w-full"
        onClick={async () => {
          await signOut({ redirect: false });
          NProgress.start();
          push('/login');
        }}
      >
        Logout
      </button>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
