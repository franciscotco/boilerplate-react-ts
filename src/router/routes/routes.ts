import { HOME } from "./home";

import type { Route } from "./routes.types";

type RouteKeys = "home";

export const ROUTES: Record<RouteKeys, Route> = {
  home: HOME
};

export const routes = Object.values(ROUTES).sort((a, b) => a.order - b.order);
