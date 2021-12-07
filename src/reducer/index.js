import { combineReducers } from "redux";
import { movies } from "./movieReducer";
import { search } from "./searchReducer";

const rootReducer = combineReducers({
  movie: movies,
  search: search,
});

export default rootReducer;
