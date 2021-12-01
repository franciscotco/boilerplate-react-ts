import React, { ReactElement, PropsWithChildren } from "react";

import { Ellipsis as Root } from "./Ellipsis.styles";

const Ellipsis = ({ children }: PropsWithChildren<unknown>): ReactElement => <Root>{children}</Root>;

export default Ellipsis;
