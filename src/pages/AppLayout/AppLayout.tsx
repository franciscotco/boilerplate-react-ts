import React, { type ReactElement } from "react";

import { Outlet } from "react-router-dom";

import SuspenseLoader from "@src/components/SuspenseLoader";

import { App as Root, Body } from "./AppLayout.styles";
import NavBar from "./NavBar";

const AppLayout = (): ReactElement => (
  <Root>
    <NavBar />
    <Body>
      <SuspenseLoader>
        <Outlet />
      </SuspenseLoader>
    </Body>
  </Root>
);

export default AppLayout;
