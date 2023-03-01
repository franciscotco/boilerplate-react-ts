import { langSelectors } from "./lang";

export const selectors = {
  lang: langSelectors(({ lang }) => lang)
};
