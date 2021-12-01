import type { ReactElement } from "react";

import { HOME_CONFIG } from "./home";

export interface Page {
  id: string;
  name: string;
  path: string;
  component: (_: object) => ReactElement;
  order: number;
}

const PAGES = [HOME_CONFIG];

export const routes = PAGES.sort((a, b) => a.order - b.order);
