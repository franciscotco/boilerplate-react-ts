import React, { type ReactElement, useCallback, ChangeEvent } from "react";

import FormattedMessage from "@src/components/FormattedMessage";
import Option from "@src/components/controls/Option";
import Select from "@src/components/controls/Select";
import { SUPPORTED_LANGUAGES, isSupportedLanguage } from "@src/intl/messages";
import { switchLanguage } from "@src/redux/languages";
import { useAppDispatch, useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

const SelectLanguages = (): ReactElement => {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(selectors.languages.selectCode);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>): void => {
      const { value } = event.target;

      if (isSupportedLanguage(value)) {
        dispatch(switchLanguage(value));
      } else {
        dispatch(switchLanguage("en"));
      }
    },
    [dispatch]
  );

  return (
    <Select onChange={handleChange} defaultValue={languageCode}>
      {SUPPORTED_LANGUAGES.map((code) => (
        <Option key={code} value={code}>
          <FormattedMessage id={`NAVBAR.SELECT.LANGUAGES.${code}`} />
        </Option>
      ))}
    </Select>
  );
};

export default SelectLanguages;
