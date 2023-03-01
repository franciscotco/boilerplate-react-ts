import React, { type ReactElement, type PropsWithChildren, type ReactNode } from "react";

import { Section as Root, Title, Content } from "./Section.styles";

export interface SectionProps {
  title: ReactNode;
}

const Section = ({ children, title }: PropsWithChildren<SectionProps>): ReactElement => (
  <Root>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Root>
);

export default Section;
