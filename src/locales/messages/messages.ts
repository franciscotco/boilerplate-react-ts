import en from "./en";
import fr from "./fr";

export type LangCode = "en" | "fr";

export type EnglishKeys = keyof typeof en;
export type English = Record<EnglishKeys, string>;
export type FrenchKeys = keyof typeof fr;
export type French = Record<FrenchKeys, string>;

export const SUPPORTED_LANGUAGES: LangCode[] = ["en", "fr"];

const MESSAGES: Record<LangCode, English | French> = {
  en,
  fr
};

export default MESSAGES;
