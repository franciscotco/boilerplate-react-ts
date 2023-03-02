import React, { type ReactElement } from "react";

import FormattedMessage, { useFormattedMessage } from "@src/components/FormattedMessage";
import Section from "@src/components/Section";

const Home = (): ReactElement => {
  const formattedMessage = useFormattedMessage();

  return (
    <Section title={formattedMessage({ id: "ROUTES.HOME.TITLE" })}>
      <FormattedMessage id="ROUTES.HOME.DESC" />
    </Section>
  );
};

export default Home;
