import React, { ReactElement } from "react";

import LocalesProvider from "./locales";
import ReduxProvider from "./redux";
import Router from "./router";
import StyleProvider from "./styles";

const App = (): ReactElement => (
  <ReduxProvider>
    <StyleProvider>
      <LocalesProvider>
        <Router />
      </LocalesProvider>
    </StyleProvider>
  </ReduxProvider>
);

export default App;
