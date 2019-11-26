import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Login from "./Reducers/Login";

import Foods from "./Reducers/foods";
import logger from "redux-logger"

const midderwires=[thunk,logger]

const store = createStore(
  combineReducers({
    Login,
    Foods,
  }),
  applyMiddleware(...midderwires)
);

export default store;
