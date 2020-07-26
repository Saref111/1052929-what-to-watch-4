import extend from "../../helpers/helpers.js";

const initialState = {
  filterGenre: `all genres`,
  films: [],
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const filterMovies = (genre, films) => {
  if (genre === `all genres`) {
    return initialState.allFilms;
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
};

export {reducer, Actions, ActionCreator};
