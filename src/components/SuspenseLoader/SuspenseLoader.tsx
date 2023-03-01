import React, { Suspense, type PropsWithChildren, type ReactElement, type SuspenseProps } from "react";

import Spinner from "@src/components/Spinner";

export interface SuspenseLoaderProps {
  fallback?: SuspenseProps["fallback"];
}

const SuspenseLoader = ({ children, fallback = <Spinner /> }: PropsWithChildren<SuspenseLoaderProps>): ReactElement => (
  <Suspense fallback={fallback}>{children}</Suspense>
);

export default SuspenseLoader;
