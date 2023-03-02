import { useCallback } from "react";

import { useIntl } from "react-intl";

import { type TranslationKeys } from "@src/intl/messages";

interface FormattedMessageParams {
  id: TranslationKeys;
}

export const useFormattedMessage = (): ((args: FormattedMessageParams) => string) => {
  const intl = useIntl();

  return useCallback(({ id }: FormattedMessageParams) => intl.formatMessage({ id }), [intl]);
};
