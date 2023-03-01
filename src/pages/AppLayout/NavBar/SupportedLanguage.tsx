import React, { type ReactElement, useCallback } from "react";

import { type LangCode } from "@src/locales";
import { switchLang } from "@src/redux/lang";
import { useAppDispatch, useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import { SupportedLanguage as Root } from "./NavBar.styles";

export interface SupportedLanguageProps {
  code: LangCode;
}

const SupportedLanguage = ({ code }: SupportedLanguageProps): ReactElement => {
  const dispatch = useAppDispatch();
  const langCode = useAppSelector(selectors.lang.selectCode);
  const handleClick = useCallback(() => dispatch(switchLang(code)), [code, dispatch]);

  return (
    <Root key={code} onClick={handleClick} isActive={code === langCode}>
      {code}
    </Root>
  );
};

export default SupportedLanguage;
