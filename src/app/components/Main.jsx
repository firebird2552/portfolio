import React, { useEffect, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "../styles/GeneralStyle.css";

import { Header } from "./Header";
import { LandingPage } from "./LandingPage";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { ConnectedProjectDetails as ProjectDetails } from "./projects/ProjectDetails";
import { ConnectedPostDetails as PostDetails } from "./Blog/PostDetails";
import Login from "./Login";
import Auth from "../../Auth/Auth";
import Callback from "../../Callback";
import { ConnectedAdmin as Admin } from "./admin/Admin";
import FourOhFour from "./FourOhFour";
import AuthContext from "../../Auth/AuthContext";
import { SecureRoute } from "./navigation/SecureRoute";

export const Main = (props) => {
  let auth = new Auth(props.history);
  return (
    <AuthContext.Provider value={auth}>
      <Header auth={auth} {...props} />
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route
            exact
            path="/project/details/:title"
            component={ProjectDetails}
          />
          <Route
            exact
            path="/blog/post/:title"
            render={(props) => <PostDetails auth={auth} {...props} />}
          />
          <Route exact path="/Login" component={Login} />
          <Route
            path="/callback"
            render={(props) => <Callback auth={auth} {...props} />}
          />
          <SecureRoute path="/admin" component={Admin} />

          <Route path="/404" component={FourOhFour} />
          <Redirect to="/404" />
        </Switch>
      </main>
    </AuthContext.Provider>
  );
};
