// action types

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";

// action creaters

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    payload: movie,
  };
}

export function addFav(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    payload: movie,
  };
}

export function removeFav(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: movie,
  };
}

export function addSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    payload: movie,
  };
}

export function showFavourite(value) {
  return {
    type: SHOW_FAVOURITE,
    payload: value,
  };
}

export function handleMovieSearch(movie) {
  return async function (dispatch) {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=891a9115`
    );
    const data = await res.json();
    dispatch(addSearchResult(data));
  };
}
