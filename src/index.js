import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";

import "./css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />{" "}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
