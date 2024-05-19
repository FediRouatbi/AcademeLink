'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

const SwitchLanguage = () => {
  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            router?.replace(pathname, { locale: 'en' });
          }}
        >
          En
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router?.replace(pathname, { locale: 'fr' });
          }}
        >
          Fr
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchLanguage;
