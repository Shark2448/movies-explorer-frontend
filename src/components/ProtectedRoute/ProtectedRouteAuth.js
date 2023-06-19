import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRouteAuth = ({ component: Component, ...props }) => {
  return (
      <Route>
        {() =>
          props.loggedIn === null ? (
            <Component {...props} />
          ) : (
            <Redirect to='/movies' />
          )
        }
      </Route>
  );
};

export default ProtectedRouteAuth;