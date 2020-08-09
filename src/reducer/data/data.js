import {extend} from "../../helpers/helpers.js";
import {filmsAdapter} from "./adapters.js";

const initialState = {
  allFilms: [],
  filterGenre: `All genres`,
  films: [],
  comments: null,
  favorites: null,
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  ADD_NEW_COMMENT: `ADD_NEW_COMMENT`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
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

  loadFavorites: (favorites) => {
    return {
      type: Actions.LOAD_FAVORITES,
      payload: favorites,
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
  },

  toggleFavorite: (id) => (dispatch, getState, api) => {
    const {DATA} = getState();
    const {allFilms} = DATA;
    const current = allFilms.find((it) => String(it.id) === String(id));

    return api.post(`/favorite/${id}/${current.isFavorite ? 0 : 1}`).then(() => {
      current.isFavorite = !current.isFavorite;
      dispatch(actionCreator.loadFavorites(allFilms.slice().filter((it) => it.isFavorite)));
      dispatch(actionCreator.loadFilms(allFilms.slice()));
    }).catch((err) => {
      throw err;
    });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`).then((response) => {
      const {data} = response;

      dispatch(actionCreator.loadFavorites(data));
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

    case Actions.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
  }

  return state;
};

export {reducer, Actions, actionCreator, Operation};
