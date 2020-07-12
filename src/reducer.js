import {extend} from "./helpers/helpers.js";
import FILMS from "./mock/films.js";

const initialState = {
  filterGenre: `all genres`,
  films: FILMS,
  movieID: -1,
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SET_MOVIE_ID: `SET_MOVIE_ID`,
};

const filterMovies = (genre, films) => {
  if (genre === initialState.filterGenre) {
    return films;
  }
  return [...films.filter((film) => film.details.genre === genre)];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_FILTER:
      return extend(state, {
        filterGenre: action.payload
      });

    case Actions.GET_FILMS_BY_GENRE:
      return extend(state, {
        films: action.payload
      });

    case Actions.SET_MOVIE_ID:
      return extend(state, {
        movieID: action.payload
      });
  }

  return state;
};

const ActionCreator = {
  changeFilter: (filterType) => {
    return {
      type: Actions.CHANGE_FILTER,
      payload: filterType,
    };
  },

  getFilmsByType: (films, filter) => {
    return {
      type: Actions.GET_FILMS_BY_GENRE,
      payload: filterMovies(filter, films),
    };
  },

  setMovieId: (id) => {
    return {
      type: Actions.SET_MOVIE_ID,
      payload: id,
    };
  },
};

export {reducer, Actions, ActionCreator};
