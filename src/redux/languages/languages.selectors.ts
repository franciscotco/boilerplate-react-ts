import { createSelector } from "@reduxjs/toolkit";

import { type LanguageCode } from "@src/intl";
import { type AppSelector } from "@src/redux/redux.types";

import { type LanguagesState } from "./languages.slice";

export interface LanguagesSelectors {
  selectCode: AppSelector<LanguageCode>;
}

export const languagesSelectors = (slicer: AppSelector<LanguagesState>): LanguagesSelectors => ({
  selectCode: createSelector(slicer, ({ code }) => code)
});
