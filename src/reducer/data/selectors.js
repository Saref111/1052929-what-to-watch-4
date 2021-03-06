import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].allFilms;
};

export const getCurrentFilter = (state) => {
  return state[NameSpace.DATA].filterGenre;
};

export const getFilteredFilms = createSelector(
    getAllFilms,
    getCurrentFilter,
    (films, genre) => {
      if (genre === `All genres`) {
        return films;
      }
      return films.filter((film) => film.details.genre === genre);
    }
);

export const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

export const getFavorites = (state) => {
  return state[NameSpace.DATA].favorites;
};

export const getPromo = (state) => {
  return state[NameSpace.DATA].promo;
};
