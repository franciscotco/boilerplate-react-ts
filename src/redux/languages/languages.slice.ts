import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type LanguageCode } from "@src/intl";

export interface LanguagesState {
  code: LanguageCode;
}

const initialState: LanguagesState = {
  code: "en"
};

const slice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguageCode(state, action: PayloadAction<LanguageCode>) {
      state.code = action.payload;
    }
  }
});

export const { setLanguageCode } = slice.actions;
export default slice.reducer;
