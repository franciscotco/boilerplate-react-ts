import React, { ReactElement } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppContainer from "@src/components/AppContainer";

import { routes } from "./pages";

const Router = (): ReactElement => (
  <BrowserRouter>
    <AppContainer>
      <Routes>
        {routes.map(({ component: Component, path, id }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route element={<Navigate to="/home" />} />
      </Routes>
    </AppContainer>
  </BrowserRouter>
);

export default Router;
