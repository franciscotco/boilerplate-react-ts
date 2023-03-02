import { languagesSelectors } from "./languages";

export const selectors = {
  languages: languagesSelectors(({ languages }) => languages)
};
