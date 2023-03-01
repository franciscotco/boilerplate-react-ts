import { lazy } from "react";

const Error404 = lazy(
  () =>
    import(
      /* webpackChunkName: "error-404" */
      "./Error404"
    )
);

export default Error404;
