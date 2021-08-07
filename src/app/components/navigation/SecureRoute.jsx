import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../../Auth/AuthContext";

export const SecureRoute = ({ component: Component, scopes, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated()) {
          return <Redirect to="/404" />;
        }

        if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          return (
            <h1>
              Unauthorized - You need the following scope(s) to view this page:{" "}
              {scopes.join(",")}
            </h1>
          );
        }

        return <Component auth={auth} {...props} />;
      }}
    />
  );
};

SecureRoute.propTypes = {
  component: PropTypes.object.isRequired,
  scopes: PropTypes.array,
};

SecureRoute.defaultProps = {
  scopes: [],
};
