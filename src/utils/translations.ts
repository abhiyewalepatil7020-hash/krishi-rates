import { supabase } from "@/integrations/supabase/client";

export type Language = 'en' | 'mr' | 'hi' | 'gu' | 'te';
export type TranslationKey = string;

type TranslationMap = Record<string, string>;

const inMemoryCache: Partial<Record<Language, TranslationMap>> = {};
const inFlightLoads: Partial<Record<Language, Promise<void>>> = {};

async function fetchTranslations(language: Language): Promise<void> {
  try {
    const { data, error } = await supabase
      .from('translations')
      .select('key,value')
      .eq('lang', language);

    if (error) {
      console.error('Failed to load translations:', error);
      inMemoryCache[language] = inMemoryCache[language] || {};
      return;
    }

    const map: TranslationMap = {};
    (data || []).forEach((row: any) => {
      if (row && typeof row.key === 'string' && typeof row.value === 'string') {
        map[row.key] = row.value;
      }
    });
    inMemoryCache[language] = map;
  } catch (e) {
    console.error('Unexpected error loading translations', e);
    inMemoryCache[language] = inMemoryCache[language] || {};
  }
}

export async function preloadTranslations(language: Language): Promise<void> {
  if (inMemoryCache[language]) return;
  if (!inFlightLoads[language]) {
    inFlightLoads[language] = fetchTranslations(language).finally(() => {
      delete inFlightLoads[language];
    });
  }
  await inFlightLoads[language];
}

export const getTranslation = (key: TranslationKey, language: Language = 'en'): string => {
  const primary = inMemoryCache[language]?.[key];
  if (primary !== undefined) return primary;
  const fallback = inMemoryCache['en' as Language]?.[key];
  if (fallback !== undefined) return fallback;
  return String(key);
};