import React, { type ReactElement, type PropsWithChildren } from "react";

import { Provider } from "react-redux";

import store from "./redux.store";

const ReduxProvider = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
