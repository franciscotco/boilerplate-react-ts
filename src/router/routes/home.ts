import { lazy } from "react";

import { withLazyLoading } from "@src/components/hoc/withLazyLoading";

import type { Route } from "./routes.types";

export const HOME: Route = {
  id: "home",
  name: "home",
  path: "/home",
  component: withLazyLoading(
    lazy(
      () =>
        import(
          /* webpackChunkName: "home" */
          "@src/pages/Home"
        )
    )
  ),
  order: 0
};
