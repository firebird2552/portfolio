import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Main } from "./components/Main";
import { store } from "./redux/config";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={Main} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
