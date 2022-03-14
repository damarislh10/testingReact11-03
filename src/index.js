import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AmazonApp from "./AmazonApp";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <AmazonApp />
  </Provider>,
  document.getElementById("root")
);
