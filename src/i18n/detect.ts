import type { Lang } from './translations';

export function detectLang(acceptLanguage: string): Lang {
  const raw = acceptLanguage.toLowerCase();
  if (raw.startsWith('fr')) return 'fr';
  if (raw.startsWith('es')) return 'es';
  if (raw.startsWith('de')) return 'de';
  return 'en';
}
