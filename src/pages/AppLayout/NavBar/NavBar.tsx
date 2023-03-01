import React, { type ReactElement } from "react";

import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

import List from "@src/components/List";
import { SUPPORTED_LANGUAGES } from "@src/locales/messages";

import { Root, Header, RouteLink } from "./NavBar.styles";
import SupportedLanguage from "./SupportedLanguage";

const NavBar = (): ReactElement => (
  <Root>
    <Header>
      <List>
        <li>
          <RouteLink as={NavLink} to="/home">
            <FormattedMessage id="ROUTES.HOME.NAME" />
          </RouteLink>
        </li>
      </List>
      <List>
        {SUPPORTED_LANGUAGES.map((code) => (
          <SupportedLanguage key={code} code={code} />
        ))}
      </List>
    </Header>
  </Root>
);

export default NavBar;
