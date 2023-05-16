import {
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_START,
  FETCH_COCKTAIL_FAILURE,
  GET_SINGLE_COCKTAIL_START,
  GET_SINGLE_COCKTAIL_SUCCESS,
  GET_SINGLE_COCKTAIL_FAILURE,
  SEARCH_COCKTAIL_START,
  SEARCH_COCKTAIL_SUCCESS,
  SEARCH_COCKTAIL_FAILURE,
} from "./actionType.js";
import axios from "axios";

const fetchCockTailStart = () => ({
  type: FETCH_COCKTAIL_START,
});

const fetchCockTailSuccess = (cocktails) => ({
  type: FETCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchCockTailFail = (error) => ({
  type: FETCH_COCKTAIL_FAILURE,
  payload: error,
});

const fetchSearchCockTailStart = () => ({
  type: SEARCH_COCKTAIL_START,
});

const fetchSearchCockTailSuccess = (cocktails) => ({
  type: SEARCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchSearchCockTailFail = (error) => ({
  type: SEARCH_COCKTAIL_FAILURE,
  payload: error,
});

const getSingleCockTailStart = () => ({
  type: GET_SINGLE_COCKTAIL_START,
});

const getSingleCockTailSuccess = (cocktails) => ({
  type: GET_SINGLE_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const getSingleCockTailFail = (error) => ({
  type: GET_SINGLE_COCKTAIL_FAILURE,
  payload: error,
});

export default function fetchCocktail() {
  return function (dispatch) {
    dispatch(fetchCockTailStart());
    setTimeout(() => {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((response) => {
          const cocktails = response.data.drinks;
          dispatch(fetchCockTailSuccess(cocktails));
        })
        .catch((error) => dispatch(fetchCockTailFail(error)));
    }, 2000);
  };
}

export  function fetchSingleCocktail(id) {
  return function (dispatch) {
    dispatch(getSingleCockTailStart());
    setTimeout(() => {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => {
          const cocktails = response.data.drinks;
          dispatch(getSingleCockTailSuccess(cocktails));
        })
        .catch((error) => dispatch(getSingleCockTailFail(error)));
    }, 2000);
  };
}
export  function fetchSearchCocktail(searchText) {
  return function (dispatch) {
    dispatch(fetchSearchCockTailStart());
    setTimeout(() => {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then((response) => {
          const cocktails = response.data.drinks;
          dispatch(fetchSearchCockTailSuccess(cocktails));
        })
        .catch((error) => dispatch(fetchSearchCockTailFail(error)));
    }, 2000);
  };
}
