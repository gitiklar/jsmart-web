import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import './utils/firebaseConfig';
import { RecaptchaContainer } from "utils/recaptchaContainer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecaptchaContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();