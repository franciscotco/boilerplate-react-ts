import React, { ReactElement } from "react";

import LocalesProvider from "./locales";
import ReduxProvider from "./redux/ReduxProvider";
import Router from "./router";
import StyleProvider from "./style/StyleProvider";

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
