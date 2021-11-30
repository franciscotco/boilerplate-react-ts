import { langSelectors } from "./lang";

import type { AppState } from "./redux.types";

export const selectors = {
  lang: langSelectors((state: AppState) => state.lang)
};
