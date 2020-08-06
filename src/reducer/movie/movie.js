import {extend} from "../../helpers/helpers.js";

const initialState = {
  movieID: 1,
};

const Actions = {
  SET_MOVIE_ID: `SET_MOVIE_ID`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_MOVIE_ID:
      return extend(state, {
        movieID: action.payload
      });
  }

  return state;
};

const actionCreator = {
  setMovieId: (id) => {
    return {
      type: Actions.SET_MOVIE_ID,
      payload: id,
    };
  },
};

export {reducer, Actions, actionCreator};
