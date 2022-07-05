import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./reducers/favourites";
import jobsReducer from "./reducers/jobs";
import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Naveen9698",
    }),
  ],
};

const bigReducer = combineReducers({
  favouritesReducer,
  jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

/* const store = configureStore({
  reducer: bigReducer,
});
 */
