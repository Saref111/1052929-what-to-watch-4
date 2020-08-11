import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Routes, Authorization} from "../../const.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";


const PrivateRoute = (props) => {
  console.log(`provate route props`, props);
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === Authorization.AUTH
            ? render()
            : <Redirect to={Routes.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
