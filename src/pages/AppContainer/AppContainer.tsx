import React, { type ReactElement } from "react";

import { Outlet } from "react-router-dom";

import NavBar from "@src/components/NavBar";

import { App as Root, Body } from "./AppContainer.styles";

const AppContainer = (): ReactElement => (
  <Root>
    <NavBar />
    <Body>
      <Outlet />
    </Body>
  </Root>
);

export default AppContainer;
