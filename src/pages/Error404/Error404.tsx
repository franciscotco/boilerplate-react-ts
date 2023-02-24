import React, { type ReactElement } from "react";

import { Error404 as Root, Content } from "./Error404.styles";

const Error404 = (): ReactElement => (
  <Root>
    <Content>Error404. Page not found</Content>
  </Root>
);

export default Error404;
