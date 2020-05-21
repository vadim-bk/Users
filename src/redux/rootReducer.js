import { combineReducers } from "redux";
import getUsersReducer from "./getUsersReducer";
import appReducers from "./appReducers";
import removeUserReducer from "./removeUserReducer";

export default combineReducers({
  getUsersReducer,
  appReducers,
  removeUserReducer,
});
