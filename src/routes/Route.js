import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

import { store } from "~/store";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  layout: Layout,
  ...rest
}) {
  const dispatch = useDispatch();

  if (isPrivate) {
    return <Redirect to="/" />;
  }

  /*if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }*/

  //const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
