import React from "react";

import { render } from "react-dom";

import App from "./App";

const container = document.getElementById("app");

render(<App />, container);

if (module.hot) {
  module.hot.accept(["./App.tsx"], (): void => {
    render(require("./App.tsx").router, container);
  });
}
