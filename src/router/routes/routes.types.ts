import type { ReactElement } from "react";

export interface Route {
  id: string;
  name: string;
  path: string;
  component: (_?: unknown) => ReactElement;
  order: number;
}
