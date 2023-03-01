import React, {
  type DetailedHTMLProps,
  type PropsWithChildren,
  type ReactElement,
  type SelectHTMLAttributes
} from "react";

import { List as Root } from "./List.styles";

export type ListProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLUListElement>, HTMLUListElement>;

const List = ({ children }: PropsWithChildren<ListProps>): ReactElement => <Root>{children}</Root>;

export default List;
