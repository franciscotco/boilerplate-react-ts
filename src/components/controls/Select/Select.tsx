import React, {
  type ReactElement,
  type PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithRef
} from "react";

import { Select as Root } from "./Select.styles";

export type SelectProps = ComponentPropsWithRef<typeof Root>;

const Select = (
  { children, ...props }: PropsWithChildren<SelectProps>,
  ref: ForwardedRef<HTMLSelectElement>
): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Select);
