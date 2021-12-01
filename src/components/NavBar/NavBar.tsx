import React, { ReactElement, useCallback } from "react";

import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

import { LangCode, supportedLanguages } from "@src/locales";
import { Page } from "@src/routes";

import {
  Root,
  Bar,
  Part,
  RouteList,
  RouteLink,
  RouteItem,
  Heading3,
  LangList,
  LangItem,
  LangLink
} from "./NavBar.styles";

export interface NavBarProps {
  langCode: LangCode;
  switchLang: (langCode: LangCode) => unknown;
  routes: Page[];
}

const NavBar = ({ langCode, routes, switchLang }: NavBarProps): ReactElement => {
  const onClick = useCallback((lang: LangCode) => (): unknown => switchLang(lang), [switchLang]);

  return (
    <Root>
      <Bar>
        <Part>
          <RouteList>
            {routes.map((route) => (
              <RouteItem key={route.id}>
                <RouteLink as={NavLink} to={route.path}>
                  <Heading3>
                    <FormattedMessage id={`ROUTES.${route.name.toUpperCase()}.NAME`} />
                  </Heading3>
                </RouteLink>
              </RouteItem>
            ))}
          </RouteList>
        </Part>
        <Part>
          <LangList>
            {supportedLanguages.map((code) => (
              <LangItem key={code}>
                <LangLink onClick={onClick(code)} isActive={code === langCode}>
                  {code.toUpperCase()}
                </LangLink>
              </LangItem>
            ))}
          </LangList>
        </Part>
      </Bar>
    </Root>
  );
};

export default NavBar;
