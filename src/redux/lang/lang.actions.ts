import { type LangCode } from "@src/locales";
import { type AppDispatch } from "@src/redux/redux.types";

import { setLangCode } from "./lang.slice";

export const switchLang =
  (langCode: LangCode) =>
  (dispatch: AppDispatch): void => {
    dispatch(setLangCode(langCode));
  };
