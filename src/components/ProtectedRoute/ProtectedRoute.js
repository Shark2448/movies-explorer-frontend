import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
      <Route>
        {() =>
          props.loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to='/movies' />
          )
        }
      </Route>
  );
};

export default ProtectedRoute;