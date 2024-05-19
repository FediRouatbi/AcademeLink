import { useTranslations } from 'next-intl';
import React from 'react';

const Header = () => {
  const t = useTranslations('Login');
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-left">
        {t('description')}
      </p>
    </div>
  );
};

export default Header;
