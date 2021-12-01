import React from "react";
import type { ReactElement } from "react";

import LoadElement from "@src/components/LoadElement";

export const withLazyLoading = <ComponentProps,>(
  Component: (_: unknown) => ReactElement | null
): ((props?: ComponentProps) => ReactElement) => {
  const WrappedComponentwithLazyLoading = (props?: ComponentProps): ReactElement => (
    <LoadElement>
      <Component {...props} />
    </LoadElement>
  );

  return WrappedComponentwithLazyLoading;
};
