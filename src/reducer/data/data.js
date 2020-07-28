import {extend} from "../../helpers/helpers.js";

const initialState = {
  allFilms: [],
  filterGenre: `all genres`,
  films: [],
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};


const actionCreator = {
  loadFilms: (films) => {
    return {
      type: Actions.LOAD_FILMS,
      payload: films,
    };
  },

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

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(actionCreator.loadFilms(response.data));
    }).catch((err) => console.log(err));
  }
};

const filterMovies = (genre, films) => {
  if (genre === `all genres`) {
    return initialState.allFilms;
  }
  return [...films.filter((film) => film.details.genre === genre)];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_FILMS:
      console.log(111);
      return extend(state, {
        allFilms: action.payload,
      });

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

export {reducer, Actions, actionCreator, Operation};
