import { type LanguageCode } from "@src/intl";
import { type AppDispatch } from "@src/redux/redux.types";

import { setLanguageCode } from "./languages.slice";

export const switchLanguage =
  (languageCode: LanguageCode) =>
  (dispatch: AppDispatch): void => {
    dispatch(setLanguageCode(languageCode));
  };
