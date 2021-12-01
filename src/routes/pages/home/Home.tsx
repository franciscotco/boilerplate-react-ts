import React, { ReactElement } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import Section from "@src/components/Section";

const Home = (): ReactElement => {
  const intl = useIntl();

  return (
    <Section title={intl.formatMessage({ id: "ROUTES.HOME.TITLE" })}>
      <FormattedMessage id="ROUTES.HOME.DESC" />
    </Section>
  );
};

export default Home;
