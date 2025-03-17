import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { navModalSlice } from "./navModal";
import { worldMapApi } from "../api/endpoints/worldMap";
import { usersApi } from "../api/endpoints/user";

const rootReducer = combineReducers({
  [navModalSlice.name]: navModalSlice.reducer,
  [worldMapApi.reducerPath]: worldMapApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(worldMapApi.middleware, usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
