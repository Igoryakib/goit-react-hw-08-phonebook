import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import App from "./components/App";

import "./css/styles.css";

ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
{/* <Provider> */}
<App/>
{/* // </Provider> */}
</BrowserRouter>
</React.StrictMode>
, document.querySelector('#root'));