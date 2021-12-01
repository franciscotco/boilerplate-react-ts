import React, { ReactElement, PropsWithChildren } from "react";

import NavBar from "@src/components/NavBar";
import type { NavBarProps } from "@src/components/NavBar";

import { App as Root, Body } from "./AppContainer.styles";

const AppContainer = ({ children, ...navBarProps }: PropsWithChildren<NavBarProps>): ReactElement => (
  <Root>
    <NavBar {...navBarProps} />
    <Body>{children}</Body>
  </Root>
);

export default AppContainer;
