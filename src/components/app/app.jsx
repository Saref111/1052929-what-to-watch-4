import React, {PureComponent} from "react";
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
import history from "../../history.js";
import NewReviewPage from "@components/new-review-page/new-review-page";
import { Routes } from "../../const.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {
      promo,
      movieID,
      filterGenre,
      onHeaderClickHandler,
      // login,
      // authorizationStatus,
      isSigningIn,
    } = this.props;

    if (isSigningIn) {
      return (
        <SignIn />
      );
    } else if (movieID < 0) {
      return (
        <Main
          promo={promo}

          onHeaderClickHandler={onHeaderClickHandler}
          filterGenre={filterGenre}
        />
      );
    } else {
      return (
        <DetailedMovieInfo movieID={movieID} onHeaderClickHandler={onHeaderClickHandler}/>
      );
    }


  }

  render() {
    const {onHeaderClickHandler} = this.props;

    return (
      <BrowserRouter
        history={history}
      >
        <Switch>
          <Route exact path={Routes.ROOT}>
            {this._renderApp()}
          </Route>
          <Route exact path={Routes.LOGIN}>
            <SignIn/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  promo: PropTypes.object.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  movieID: PropTypes.number.isRequired,
  filterGenre: PropTypes.string.isRequired,
  isSigningIn: PropTypes.bool.isRequired,
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
