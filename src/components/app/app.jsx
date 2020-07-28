import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailedMovieInfo from "../detailed-movie-info/detailed-movie-info.jsx";
import SameGenreMovies from "../same-genre-movies/same-genre-movies.jsx";
import {actionCreator as dataActionCreator} from "../../reducer/data/data.js";
import {actionCreator as movieActionCreator} from "../../reducer/movie/movie.js";
import {getMovieId} from "../../reducer/movie/selectors.js";
import {getAllFilms, getCurrentFilter, getFilteredFilms} from "../../reducer/data/selectors.js";
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
      films,
      movieID,
      filterGenre,
      onHeaderClickHandler,
      onFilterChangeHandler,
      allFilms,
      login,
      authorizationStatus,
    } = this.props;
    const film = films.find((it) => it.id === movieID);

    if (movieID === -1 || film === undefined) {
      return (
        <Main
          promo={promo}

          onHeaderClickHandler={onHeaderClickHandler}
          onFilterChangeHandler={onFilterChangeHandler}
          films={films}
          filterGenre={filterGenre}
          allFilms={allFilms}
        />
      );
    } else {
      return (
        <DetailedMovieInfo movie={film}>
          <SameGenreMovies genre={film.details.genre} films={films} onHeaderClickHandler={onHeaderClickHandler}/>
        </DetailedMovieInfo>
      );
    }


  }

  render() {
    const {films, onHeaderClickHandler} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <DetailedMovieInfo movie={this.props.films[0]}>
              <SameGenreMovies genre={this.props.films[0].details.genre} films={films} onHeaderClickHandler={onHeaderClickHandler}/>
            </DetailedMovieInfo>
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
  films: PropTypes.array.isRequired,
  allFilms: PropTypes.array.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  movieID: PropTypes.number.isRequired,
  filterGenre: PropTypes.string.isRequired,
  onFilterChangeHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    allFilms: getAllFilms(state),
    filterGenre: getCurrentFilter(state),
    films: getFilteredFilms(state),
    movieID: getMovieId(state),
    authorizationStatus: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onHeaderClickHandler(id) {
    dispatch(movieActionCreator.setMovieId(id));
  },

  onFilterChangeHandler(filter, films) {
    dispatch(dataActionCreator.changeFilter(filter));
    dispatch(dataActionCreator.getFilmsByType(films, filter));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
