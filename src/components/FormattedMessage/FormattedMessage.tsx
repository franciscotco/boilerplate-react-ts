import React, { type ReactElement, memo } from "react";

import { FormattedMessage as FormattedMessageIntl } from "react-intl";

import { type TranslationKeys } from "@src/intl/messages";

export interface FormattedMessageProps {
  id: TranslationKeys;
}

const FormattedMessage = ({ id }: FormattedMessageProps): ReactElement => <FormattedMessageIntl id={id} />;

export default memo(FormattedMessage);
