import {FETCH_COCKTAIL_SUCCESS,FETCH_COCKTAIL_START,FETCH_COCKTAIL_FAILURE, GET_SINGLE_COCKTAIL_START, GET_SINGLE_COCKTAIL_SUCCESS, GET_SINGLE_COCKTAIL_FAILURE, SEARCH_COCKTAIL_START, SEARCH_COCKTAIL_SUCCESS, SEARCH_COCKTAIL_FAILURE} from "./actionType.js"


const initalstate = {
  cocktails: [],
  cocktail:[],
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
    case SEARCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: action.payload,
      };
    case SEARCH_COCKTAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktail: action.payload,
      };
    case GET_SINGLE_COCKTAIL_FAILURE:
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
