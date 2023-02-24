import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

const createDomNode = (): HTMLElement => {
  const domNode = document.createElement("div");

  domNode.setAttribute("id", "root");
  document.body.appendChild(domNode);
  return domNode;
};

const root = createRoot(document.getElementById("root") ?? createDomNode());

root.render(<App />);
