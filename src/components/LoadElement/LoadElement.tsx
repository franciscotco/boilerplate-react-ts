import React, { Suspense } from "react";
import type { PropsWithChildren, ReactElement, SuspenseProps } from "react";

import Spinner from "@src/components/spinner";

export interface LoadElementProps {
  fallback?: SuspenseProps["fallback"];
}

const LoadElement = ({ children, fallback = <Spinner /> }: PropsWithChildren<LoadElementProps>): ReactElement => (
  <Suspense fallback={fallback}>{children}</Suspense>
);

export default LoadElement;
