import { createSelector } from "@reduxjs/toolkit";
import { Selector } from "react-redux";

import { LangCode } from "@src/locales";

import { LangState } from "./lang.slice";

export interface LangSelectors<T> {
  selectCode: Selector<T, LangCode>;
}

export const langSelectors = <T>(slicer: Selector<T, LangState>): LangSelectors<T> => ({
  selectCode: createSelector(slicer, (state) => state.code)
});
