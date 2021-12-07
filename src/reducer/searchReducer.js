import { ADD_SEARCH_RESULT } from "../action";

const initalSearchState = {
  result: null,
};

export function search(state = initalSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        result: action.payload,
      };

    default:
      return state;
  }
}
