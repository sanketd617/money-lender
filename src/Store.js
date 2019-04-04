import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";
import PredictorReducer from "./reducers/PredictorReducer";

export default createStore(
    combineReducers({
        app: AppReducer,
        predictor: PredictorReducer
    }),
    applyMiddleware(thunk)
);
