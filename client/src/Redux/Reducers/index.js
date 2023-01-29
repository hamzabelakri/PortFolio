import { combineReducers } from "redux";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  messageReducer: messageReducer,
});

export default rootReducer;
