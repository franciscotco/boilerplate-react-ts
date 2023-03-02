import React, {
  ForwardedRef,
  forwardRef,
  type ComponentPropsWithRef,
  type PropsWithChildren,
  type ReactElement
} from "react";

import { List as Root } from "./List.styles";

export type ListProps = ComponentPropsWithRef<typeof Root>;

const List = (
  { children, ...props }: PropsWithChildren<ListProps>,
  ref: ForwardedRef<HTMLUListElement>
): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(List);
