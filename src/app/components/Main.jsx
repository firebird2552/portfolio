import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component="" />
      </Switch>
    </Router>
  );
};
