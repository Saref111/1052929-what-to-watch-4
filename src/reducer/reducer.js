import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as filter} from "./filter/filter.js";
import {reducer as user} from "./user/user.js";
import {reducer as movie} from "./movie/movie.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
  [NameSpace.USER]: user,
  [NameSpace.MOVIE]: movie,
});
