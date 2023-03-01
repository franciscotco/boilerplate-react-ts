import { type Selector } from "react-redux";
import store from "./redux.store";

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppSelector<T> = Selector<AppState, T>;
