import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailedMovieInfo from "../detailed-movie-info/detailed-movie-info.jsx";
import {actionCreator as movieActionCreator} from "../../reducer/movie/movie.js";
import {getMovieId} from "../../reducer/movie/selectors.js";
import {getCurrentFilter} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {connect} from "react-redux";

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
      login,
      authorizationStatus,
    } = this.props;

    if (movieID < 0) {
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <DetailedMovieInfo onHeaderClickHandler={onHeaderClickHandler}/>
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
};

const mapStateToProps = (state) => {
  return {
    filterGenre: getCurrentFilter(state),
    movieID: getMovieId(state),
    authorizationStatus: getAuthorizationStatus(state),
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
