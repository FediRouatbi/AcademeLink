'use client';

import { English, Frensh } from '@/assets/svg';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

const SwitchLanguage = () => {
  const t = useTranslations('Preferences.Language');
  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium leading-none  peer-disabled:opacity-70">
        {t('title')}
      </label>
      <p className="text-sm text-muted-foreground">{t('description')}</p>
      <div className="pt-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="">
            <Button variant="outline" size="icon">
              {locale.toUpperCase()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex gap-5"
              onClick={() => {
                router?.replace(pathname, { locale: 'en' });
              }}
            >
              <English /> {t('english')}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-5"
              onClick={() => {
                router?.replace(pathname, { locale: 'fr' });
              }}
            >
              <Frensh />
              {t('frensh')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SwitchLanguage;
