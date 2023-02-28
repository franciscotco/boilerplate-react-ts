import "styled-components";

import { THEME } from "@src/style/style.theme";

type Theme = typeof THEME;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
