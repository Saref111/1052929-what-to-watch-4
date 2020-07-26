import extend from "../../helpers/helpers.js";

const initialState = {
  allFilms: [],
};

const Actions = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const actionCreator = {
  loadFilms(films) {
    return {
      type: Actions.LOAD_FILMS,
      payload: films,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_FILMS:
      return extend(state, {
        allFilms: action.payload,
      });
  }

  return state;
};

export {reducer, Actions, actionCreator};
