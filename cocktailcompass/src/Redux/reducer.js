import * as types from "./actionType";

const initalstate = {
  cocktails: [],
  loading: false,
  error: null,
};

const cockTailReducer = (state = initalstate, action) => {
  switch (action.type) {
    case types.FETCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: true,
        cocktails: action.payload,
      };
    case types.FETCH_COCKTAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default cockTailReducer;
