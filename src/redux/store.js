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
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
