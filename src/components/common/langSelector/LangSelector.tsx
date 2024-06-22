import React from 'react';
import { English, Frensh } from '@/assets/svg';
import { Button } from '@/components/ui/button';
require('dayjs/locale/fr');
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import dayjs from 'dayjs';
const LangSelector = () => {
  const locale = useLocale();
  const t = useTranslations('Preferences.Language');

  const pathname = usePathname();
  const router = useRouter();
  return (
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
            dayjs.locale('en');
            router?.replace(pathname, { locale: 'en' });
          }}
        >
          <English /> {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-5"
          onClick={() => {
            dayjs.locale('fr');
            router?.replace(pathname, { locale: 'fr' });
          }}
        >
          <Frensh />
          {t('frensh')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSelector;
