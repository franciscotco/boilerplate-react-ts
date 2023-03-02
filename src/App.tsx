import React, { ReactElement } from "react";

import IntlProvider from "./intl/IntlProvider";
import ReduxProvider from "./redux/ReduxProvider";
import Router from "./routes/Router";
import StyleProvider from "./style/StyleProvider";

const App = (): ReactElement => (
  <ReduxProvider>
    <StyleProvider>
      <IntlProvider>
        <Router />
      </IntlProvider>
    </StyleProvider>
  </ReduxProvider>
);

export default App;
