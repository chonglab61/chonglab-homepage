export const locales = ['en', 'ja', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localizedPath = (locale: Locale, path: string) => {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  if (locale === 'en') return normalized;
  return normalized === '/' ? `/${locale}/` : `/${locale}${normalized}`;
};

export const stripLocalePrefix = (pathname: string) => {
  const match = pathname.match(/^\/(ja|zh)(\/.*)?$/);
  if (!match) return pathname.endsWith('/') ? pathname : `${pathname}/`;
  return match[2] ? (match[2].endsWith('/') ? match[2] : `${match[2]}/`) : '/';
};

export const localeFromPath = (pathname: string): Locale => inferLocale(pathname);

export const inferLocale = (pathname: string): Locale => {
  if (pathname.startsWith('/ja/')) return 'ja';
  if (pathname.startsWith('/zh/')) return 'zh';
  return 'en';
};
