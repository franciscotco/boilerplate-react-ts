import { lazy } from "react";

import { withLazyLoading } from "@src/components/hoc/withLazyLoading";
import type { Page } from "@src/router";

export const HOME_CONFIG: Page = {
  id: "home",
  name: "home",
  path: "/home",
  component: withLazyLoading(
    lazy(
      () =>
        import(
          /* webpackChunkName: "home" */
          "./Home"
        )
    )
  ),
  order: 0
};
