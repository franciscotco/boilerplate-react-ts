import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithRef } from "react";

import { Option as Root } from "./Option.styles";

export type OptionProps = ComponentPropsWithRef<typeof Root>;

const Option = ({ children, ...props }: OptionProps, ref: ForwardedRef<HTMLOptionElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Option);
