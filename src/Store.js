import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";

export default createStore(
    combineReducers({
        app: AppReducer
    }),
    applyMiddleware(thunk)
);
