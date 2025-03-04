import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { navModalSlice } from "./navModal";
import { worldMapApi } from "../api/endpoints/worldMap";

const rootReducer = combineReducers({
  [navModalSlice.name]: navModalSlice.reducer,
  [worldMapApi.reducerPath]: worldMapApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(worldMapApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
