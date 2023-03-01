import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { type AppDispatch, type AppState } from "./redux.types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
