import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers"
import combineReducers from "./reducers/index"


const middleware = [thunk];

const initialState = {}

const store = createStore(
    combineReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),

    ));

export default store;