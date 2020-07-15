import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailedMovieInfo from "../detailed-movie-info/detailed-movie-info.jsx";
import SameGenreMovies from "../same-genre-movies/same-genre-movies.jsx";
import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {name, genre, year, films, movieID, filterGenre, onHeaderClickHandler, onFilterChangeHandler, allFilms} = this.props;

    if (movieID === -1 || movieID >= films.length) {
      return (
        <Main
          name={name}
          genre={genre}
          year={year}

          onHeaderClickHandler={onHeaderClickHandler}
          onFilterChangeHandler={onFilterChangeHandler}
          films={films}
          filterGenre={filterGenre}
          allFilms={allFilms}
        />
      );
    } else {
      return (
        <DetailedMovieInfo movie={this.props.films[movieID]}>
          <SameGenreMovies genre={this.props.films[movieID].details.genre} films={films} onHeaderClickHandler={onHeaderClickHandler}/>
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
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  allFilms: PropTypes.array.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  movieID: PropTypes.number.isRequired,
  filterGenre: PropTypes.string.isRequired,
  onFilterChangeHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    allFilms: state.allFilms,
    filterGenre: state.filterGenre,
    films: state.films,
    movieID: state.movieID,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onHeaderClickHandler(id) {
    dispatch(ActionCreator.setMovieId(id));
  },

  onFilterChangeHandler(filter, films) {
    dispatch(ActionCreator.changeFilter(filter));
    dispatch(ActionCreator.getFilmsByType(films, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
