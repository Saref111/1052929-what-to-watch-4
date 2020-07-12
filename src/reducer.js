import {extend} from "./helpers/helpers.js";
import {FILMS} from "./mock/films.js";

const initialState = {
  filterGenre: `all`,
  films: FILMS,
};

const Actions = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_FILTER:
      return extend(state, {
        genre: action.payload
      });

    case Actions.GET_FILMS_BY_GENRE:
      return extend(state, {
        films: action.payload
      });
  }

  return state;
};

export {reducer, Actions};
