import {FETCH_COCKTAIL_SUCCESS,FETCH_COCKTAIL_START,FETCH_COCKTAIL_FAILURE} from "./actionType.js"


const initalstate = {
  cocktails: [],
  loading: false,
  error: null,
};

const cockTailReducer = (state = initalstate, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: action.payload,
      };
    case FETCH_COCKTAIL_FAILURE:
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
