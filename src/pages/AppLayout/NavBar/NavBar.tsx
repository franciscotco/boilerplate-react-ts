import React, { type ReactElement } from "react";

import { NavLink } from "react-router-dom";

import FormattedMessage from "@src/components/FormattedMessage";
import List from "@src/components/List";

import { Root, Header, RouteLink } from "./NavBar.styles";
import SelectLanguages from "./SelectLanguages";

const NavBar = (): ReactElement => (
  <Root>
    <Header>
      <List>
        <li>
          <RouteLink as={NavLink} to="/home" id="cy-home-link">
            <FormattedMessage id="ROUTES.HOME.NAME" />
          </RouteLink>
        </li>
      </List>
      <SelectLanguages />
    </Header>
  </Root>
);

export default NavBar;
