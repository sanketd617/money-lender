import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";
import PredictorReducer from "./reducers/PredictorReducer";
import ApplicationReducer from "./reducers/ApplicationReducer";

export default createStore(
    combineReducers({
        app: AppReducer,
        predictor: PredictorReducer,
        application: ApplicationReducer
    }),
    applyMiddleware(thunk)
);
