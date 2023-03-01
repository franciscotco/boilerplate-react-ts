import { createSelector } from "@reduxjs/toolkit";

import { type LangCode } from "@src/locales";
import { type AppSelector } from "@src/redux/redux.types";

import { type LangState } from "./lang.slice";

export interface LangSelectors {
  selectCode: AppSelector<LangCode>;
}

export const langSelectors = (slicer: AppSelector<LangState>): LangSelectors => ({
  selectCode: createSelector(slicer, ({ code }) => code)
});
