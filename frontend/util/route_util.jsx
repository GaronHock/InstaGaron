import { withRouter, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/welcome" />
    }
  />
};

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
