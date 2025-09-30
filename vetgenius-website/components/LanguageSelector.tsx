'use client';

import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';
import {useRouter} from '../i18n/routing';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    
    // Get the pathname without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    // Navigate to the same page in the new locale
    router.replace(pathWithoutLocale, {locale: newLocale});
  };

  const languageNames: Record<string, string> = {
    nl: 'Nederlands',
    en: 'English',
    fr: 'Français'
  };

  const flagEmojis: Record<string, string> = {
    nl: '🇳🇱',
    en: '🇬🇧',
    fr: '🇫🇷'
  };

  const locales = ['nl', 'en', 'fr'] as const;

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg focus:outline-none focus:border-purple-500 cursor-pointer"
      aria-label="Language selector"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {flagEmojis[loc]} {languageNames[loc]}
        </option>
      ))}
    </select>
  );
}