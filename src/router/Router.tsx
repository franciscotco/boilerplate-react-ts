import React, { ReactElement } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppContainer from "@src/pages/AppContainer";

import { ROUTES } from "./routes";

const Router = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route path={ROUTES.home.path} element={<ROUTES.home.component />} />
        {/* {routes.map(({ component: Component, path, id }) => (
          <Route key={id} path={path} element={<Component />} />
        ))} */}
        <Route element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
