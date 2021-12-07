import {
  ADD_MOVIE,
  ADD_MOVIE_TO_LIST,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SHOW_FAVOURITE,
} from "../action";

import { data } from "../data";
const intialMovieState = {
  list: data,
  favourite: [],
  showFavourite: false,
};

export function movies(state = intialMovieState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };

    case REMOVE_FROM_FAVOURITE:
      const filterMovies = state.favourite.filter(
        (movie) => movie !== action.payload
      );
      console.log("filter", filterMovies, action.payload);

      return {
        ...state,
        favourite: filterMovies,
      };
    case SHOW_FAVOURITE:
      return {
        ...state,
        showFavourite: action.payload,
      };
    default:
      return state;
  }
}
