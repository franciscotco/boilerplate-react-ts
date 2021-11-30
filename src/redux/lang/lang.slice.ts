import { createSlice } from "@reduxjs/toolkit";

import type { LangCode } from "@src/locales";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface LangState {
  code: LangCode;
}

const initialState: LangState = {
  code: "en"
};

const slice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLangCode(state, action: PayloadAction<LangCode>) {
      state.code = action.payload;
    }
  }
});

export const { setLangCode } = slice.actions;
export default slice.reducer;
