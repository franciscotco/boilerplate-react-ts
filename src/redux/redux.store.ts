import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./redux.reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: webpackDevServer
});

export default store;
