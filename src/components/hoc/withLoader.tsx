import React from "react";
import type { ReactElement } from "react";

import LoadElement from "@src/components/LoadElement";

export const withLoader = <ComponentProps extends object>(
  Component: (_: unknown) => ReactElement | null
): ((props: ComponentProps) => ReactElement) => {
  const WrappedComponentWithLoader = (props: ComponentProps): ReactElement => (
    <LoadElement>
      <Component {...props} />
    </LoadElement>
  );

  return WrappedComponentWithLoader;
};
