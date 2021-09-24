import { combineReducers } from "redux";
import Imanager from "./Imanager";

const rootReducer  =  combineReducers({

    apirequest :Imanager,
});

export default rootReducer;