import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./Header";
import { LandingPage } from "./LandingPage";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Main = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};
