import React, { ReactElement } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@src/pages/AppLayout";
import Error404 from "@src/pages/Error404";
import Home from "@src/pages/Home";

const Router = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
