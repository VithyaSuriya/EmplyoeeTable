import { rootReducer } from "./index";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import{ persistReducer,persistStore} from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["employees"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
