import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import App from "./components/App";
import {store, persistor} from "./redux/store";

import "./css/styles.css";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
