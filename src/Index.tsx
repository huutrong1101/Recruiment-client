import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ApplicationStore } from "./redux/Store";
import "./Index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const appElement = document.getElementById("app");
if (appElement === null) {
  throw new Error(`Unable to find #app element.`);
}

createRoot(appElement).render(
  <React.StrictMode>
    <Provider store={ApplicationStore}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
