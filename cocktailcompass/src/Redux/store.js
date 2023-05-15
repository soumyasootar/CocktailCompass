import logger from "redux-logger"
import thunk from "redux-thunk"
import {createStore,applyMiddleware} from "redux"
import rootReducer from "./root-reducer"

const middleware =[thunk]

if (import.meta.env.VITE_USER_NODE_ENV=="development"){
    middleware.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store