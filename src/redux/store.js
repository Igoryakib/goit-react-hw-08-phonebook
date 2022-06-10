import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "./authurization/auth-reducers";
import contactsReducers from "./contacts/contacts-reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"]
}

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducers),
    contacts: persistReducer(contactsPersistConfig, contactsReducers)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export {store, persistor};
