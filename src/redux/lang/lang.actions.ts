import { LangCode } from "@src/locales";
import { AppDispatch } from "@src/redux";

import { setLangCode } from "./lang.slice";

export const switchLang =
  (langCode: LangCode) =>
  (dispatch: AppDispatch): void => {
    dispatch(setLangCode(langCode));
  };
