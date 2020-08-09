import {extend} from "../../helpers/helpers.js";
import {filmsAdapter} from "./adapters.js";

const initialState = {
  allFilms: [],
  filterGenre: `All genres`,
  films: [],
  comments: null,
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};


const actionCreator = {
  loadComments: (comments) => {
    return {
      type: Actions.LOAD_COMMENTS,
      payload: comments,
    };
  },

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
      payload: filterMovies(films, filter),
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      const films = filmsAdapter(response.data);

      dispatch(actionCreator.loadFilms(films));
      dispatch(actionCreator.getFilmsByType(films, `All genres`));
    }).catch((err) => {
      throw err;
    });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`).then((response) => {
      const {data} = response;

      dispatch(actionCreator.loadComments(data));
    }).catch((err) => {
      throw err;
    });
  }
};

const filterMovies = (films, genre) => {
  if (genre === `All genres`) {
    return films;
  }

  const rep = [...films.filter((film) => film.details.genre === genre)];

  return rep;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_FILMS:
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

    case Actions.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export {reducer, Actions, actionCreator, Operation};
