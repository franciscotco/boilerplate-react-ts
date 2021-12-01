import React, { ReactElement, PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import BaseGlobalStyles from "./styles.base";
import { THEME } from "./styles.theme";

const StyleProvider = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <ThemeProvider theme={THEME}>
    {children}
    <BaseGlobalStyles />
  </ThemeProvider>
);

export default StyleProvider;
