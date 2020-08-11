import {extend} from "../../helpers/helpers.js";
import {filmsAdapter} from "./adapters.js";

const initialState = {
  allFilms: [],
  filterGenre: `All genres`,
  films: [],
  comments: null,
  favorites: null,
  promo: null,
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  ADD_NEW_COMMENT: `ADD_NEW_COMMENT`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_PROMO: `LOAD_PROMO`,
  TOGGLE_PROMO_FAVORITE: `TOGGLE_PROMO_FAVORITE`,
};


const actionCreator = {
  togglePromoFavorite: (promo) => {
    return {
      type: Actions.TOGGLE_PROMO_FAVORITE,
      payload: promo,
    };
  },

  loadPromo: ([promo]) => {
    return {
      type: Actions.LOAD_PROMO,
      payload: promo,
    };
  },

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
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      const {data} = response;

      dispatch(actionCreator.loadPromo(filmsAdapter([data])));
    }).catch((err) => err);
  },

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

    if (String(DATA.promo.id) === String(id)) {
      const toggledPromo = DATA.promo;
      toggledPromo.isFavorite = !DATA.promo.isFavorite;
      dispatch(actionCreator.togglePromoFavorite(toggledPromo));
    }

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

      dispatch(actionCreator.loadFavorites(filmsAdapter(data)));
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
    case Actions.TOGGLE_PROMO_FAVORITE:
      return extend(state, {
        promo: action.payload
      });

    case Actions.LOAD_PROMO:
      return extend(state, {
        promo: action.payload,
      });

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
