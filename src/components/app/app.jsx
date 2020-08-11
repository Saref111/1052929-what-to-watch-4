import React from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "@components/main/main.jsx";
import SignIn from "@components/sign-in/sign-in.jsx";
import DetailedMovieInfo from "@components/detailed-movie-info/detailed-movie-info.jsx";
import {actionCreator as movieActionCreator} from "@reducer/movie/movie.js";
import {getMovieId} from "@reducer/movie/selectors.js";
import {getCurrentFilter} from "@reducer/data/selectors.js";
import {getAuthorizationStatus} from "@reducer/user/selectors.js";
import {Operation as UserOperation} from "@reducer/user/user.js";
import {connect} from "react-redux";
import {getSigningInStatus} from "@reducer/user/selectors";
import NewReviewPage from "@components/new-review-page/new-review-page.jsx";
import FavoritesList from "@components/favorites-list/favorites-list.jsx";
import PrivateRoute from "@components/private-route/private-route.jsx";
import {Routes} from "../../const.js";

const App = (appProps) => {
  const {onHeaderClickHandler, filterGenre} = appProps;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.ROOT} render={(props) => {
          return <Main
            {...props}
            onHeaderClickHandler={onHeaderClickHandler}
            filterGenre={filterGenre}
          />;
        }}>
        </Route>
        <Route exact path={Routes.LOGIN} render={(props) => {
          return <SignIn {...props} />;
        }} />
        <Route exact path={Routes.MOVIE} render={(props) => {
          return <DetailedMovieInfo {...props} onHeaderClickHandler={onHeaderClickHandler}/>;
        }} />
        <PrivateRoute exact path={Routes.FAVORITES} render={(props) => {
          return <FavoritesList {...props} onHeaderClickHandler={onHeaderClickHandler}/>;
        }} />
        <PrivateRoute exact path={Routes.REVIEW} render={(props) => {
          return <NewReviewPage {...props} />;
        }} />
        <PrivateRoute exact path={Routes.PLAYER} render={(props) => {
          return <DetailedMovieInfo {...props} onHeaderClickHandler={onHeaderClickHandler}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  movieID: PropTypes.number.isRequired,
  filterGenre: PropTypes.string.isRequired,
  // isSigningIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filterGenre: getCurrentFilter(state),
    movieID: getMovieId(state),
    authorizationStatus: getAuthorizationStatus(state),
    isSigningIn: getSigningInStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onHeaderClickHandler(id) {
    dispatch(movieActionCreator.setMovieId(id));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
