// import logger from "redux-logger"
// import thunk from "redux-thunk"
// import {createStore,applyMiddleware} from "redux"
// import rootReducer from "./root-reducer"

// const middleware =[thunk]

// if (import.meta.env.VITE_USER_NODE_ENV=="development"){
//     console.log("yo");
//     middleware.push(logger)
// }

// const store = createStore(rootReducer,applyMiddleware(...middleware))

// export default store

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";

const middleware = [thunk];

if (import.meta.env.VITE_USER_NODE_ENV === "development") {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
