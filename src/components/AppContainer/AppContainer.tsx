import React, { ReactElement, PropsWithChildren } from "react";

import NavBar from "@src/components/NavBar";

import { App as Root, Body } from "./AppContainer.styles";

const AppContainer = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <Root>
    <NavBar />
    <Body>{children}</Body>
  </Root>
);

export default AppContainer;
