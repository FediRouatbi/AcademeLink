'use client';
import LangSelector from '@/components/common/langSelector/LangSelector';
import { useTranslations } from 'next-intl';
import React from 'react';

const SwitchLanguage = () => {
  const t = useTranslations('Preferences.Language');

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium leading-none  peer-disabled:opacity-70">
        {t('title')}
      </label>
      <p className="text-sm text-muted-foreground">{t('description')}</p>
      <div className="pt-2">
        <LangSelector />
      </div>
    </div>
  );
};

export default SwitchLanguage;
