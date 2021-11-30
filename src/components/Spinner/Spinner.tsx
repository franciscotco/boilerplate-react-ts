import React, { ReactElement } from "react";

import { Spinner as Root, Segment } from "./Spinner.styles";

const Spinner = (): ReactElement => (
  <Root>
    {Array.from(Array(12)).map((_: unknown, index) => (
      <Segment key={index} />
    ))}
  </Root>
);

export default Spinner;
