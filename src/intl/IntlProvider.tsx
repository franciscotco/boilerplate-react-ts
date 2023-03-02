import React, { type ReactElement, type PropsWithChildren } from "react";

import { IntlProvider as Provider } from "react-intl";

import { useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import { MESSAGES } from "./messages";

const IntlProvider = ({ children }: PropsWithChildren<unknown>): ReactElement => {
  const languageCode = useAppSelector(selectors.languages.selectCode);

  return (
    <Provider locale={languageCode} messages={MESSAGES[languageCode]}>
      {children}
    </Provider>
  );
};

export default IntlProvider;
