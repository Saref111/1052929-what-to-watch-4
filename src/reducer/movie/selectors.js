import NameSpace from "../name-space.js";

export const getMovieId = (state) => {
  return state[NameSpace.MOVIE].movieID;
};
