import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);

if (module.hot) {
  module.hot.accept(["./App.tsx"], (): void => {
    ReactDOM.render(require("./App.tsx").router, container);
  });
}
