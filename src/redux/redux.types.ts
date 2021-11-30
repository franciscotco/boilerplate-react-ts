import reducers from "./redux.reducers";
import store from "./redux.store";

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof reducers>;
