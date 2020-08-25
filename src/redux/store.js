import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducers
import DataReducers from "./DataReducers";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  data: DataReducers,
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
