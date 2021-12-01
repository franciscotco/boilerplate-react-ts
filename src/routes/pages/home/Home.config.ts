import { lazy } from "react";

import { withLoader } from "@src/components/hoc/withLoader";
import type { Page } from "@src/routes";

export const HOME_CONFIG: Page = {
  id: "home",
  name: "home",
  path: "/home",
  component: withLoader(
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
