import "styled-components";

import { Theme } from "./styles.theme";

declare module "styled-components" {
  /* eslint-disable */
  export interface DefaultTheme extends Theme {}
  /* eslint-enable */
}

export { default } from "./StyleProvider";
