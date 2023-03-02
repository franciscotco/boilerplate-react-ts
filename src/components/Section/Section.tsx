import React, { type ReactElement, type PropsWithChildren } from "react";

import { Section as Root, Title, Content } from "./Section.styles";

export interface SectionProps {
  title: string;
}

const Section = ({ children, title }: PropsWithChildren<SectionProps>): ReactElement => (
  <Root>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Root>
);

export default Section;
