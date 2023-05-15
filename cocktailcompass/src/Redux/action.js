import {FETCH_COCKTAIL_SUCCESS,FETCH_COCKTAIL_START,FETCH_COCKTAIL_FAILURE} from "./actionType.js"
import axios from 'axios';

const fetchCockTailStart = () => ({
    type: FETCH_COCKTAIL_START
})
const fetchCockTailSuccess = (cocktails) => ({
    type: FETCH_COCKTAIL_SUCCESS,
    payload: cocktails,
})
const fetchCockTailFail = (error) => ({
    type: FETCH_COCKTAIL_FAILURE,
    payload: error,
})

export default function fetchCocktail() {
    return function (dispatch){
        dispatch(fetchCockTailStart());
        setTimeout(()=>{

            axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((response)=>{
                const cocktails = response.data.drinks
                dispatch(fetchCockTailSuccess(cocktails))
            }).catch(error=>dispatch(fetchCockTailFail(error)))
        },2000)
    }
}
