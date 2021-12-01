import React, { ReactElement } from "react";

import LocaleProvider from "./locales";
import ReduxProvider from "./redux";
import Router from "./routes";
import StyleProvider from "./styles";

const App = (): ReactElement => (
  <ReduxProvider>
    <StyleProvider>
      <LocaleProvider>
        <Router />
      </LocaleProvider>
    </StyleProvider>
  </ReduxProvider>
);

export default App;
