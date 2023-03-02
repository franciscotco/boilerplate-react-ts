import en from "./en.json";
import fr from "./fr.json";

export type TranslationKeys = keyof typeof fr;

export const SUPPORTED_LANGUAGES = ["en", "fr"] as const;
export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number];

export const isSupportedLanguage = (languageCode: string): languageCode is LanguageCode =>
  Boolean(SUPPORTED_LANGUAGES.find((supportedLanguage) => supportedLanguage === languageCode));

export const MESSAGES: Record<LanguageCode, Record<TranslationKeys, string>> = {
  en,
  fr
} as const;
