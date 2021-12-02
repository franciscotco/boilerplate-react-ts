import React, { ReactElement } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContainer from "@src/pages/AppContainer";
import Error404 from "@src/pages/Error404";

import { ROUTES } from "./routes";

const Router = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route path={ROUTES.home.path} element={<ROUTES.home.component />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
