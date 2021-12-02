import React, { ReactElement, PropsWithChildren } from "react";

import { IntlProvider } from "react-intl";

import MESSAGES, { LangCode } from "./messages";

export interface LocalesProviderProps {
  langCode: LangCode;
}

const LocalesProvider = ({ children, langCode }: PropsWithChildren<LocalesProviderProps>): ReactElement => (
  <IntlProvider locale={langCode} messages={MESSAGES[langCode]}>
    {children}
  </IntlProvider>
);

export default LocalesProvider;
