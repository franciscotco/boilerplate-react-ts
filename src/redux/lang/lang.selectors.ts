import { createSelector } from "@reduxjs/toolkit";
import { Selector } from "react-redux";

import { LangCode } from "@src/locales";

import store from "../redux.store";

import { LangState } from "./lang.slice";

export interface LangSelectors {
  selectCode: Selector<ReturnType<typeof store.getState>, LangCode>;
}

export const langSelectors = (slicer: Selector<ReturnType<typeof store.getState>, LangState>): LangSelectors => ({
  selectCode: createSelector(slicer, (state) => state.code)
});
