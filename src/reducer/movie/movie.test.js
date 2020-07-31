import {reducer, Actions} from "./movie.js";


test(`Expect new movieID`, () => {
  expect(reducer({
    filterGenre: `1`,
    films: [],
    movieID: -1,
  }, {
    type: Actions.SET_MOVIE_ID,
    payload: 1,
  })).toStrictEqual({
    filterGenre: `1`,
    films: [],
    movieID: 1,
  });
});
