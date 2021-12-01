import React, { ReactElement, PropsWithChildren } from "react";

import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

import { Section as Root, Link, Title, Content, Back } from "./Section.styles";

export interface SectionProps {
  title: React.ReactNode;
  backUrl?: string;
}

const Section = ({ children, title, backUrl }: PropsWithChildren<SectionProps>): ReactElement => (
  <Root>
    {backUrl && (
      <Back>
        <Link as={NavLink} to={backUrl}>
          <FormattedMessage id="COMPONENTS.SECTION.BACK_URL.TITLE" />
        </Link>
      </Back>
    )}
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Root>
);

export default Section;
