import { combineReducers } from "redux";
import posts from "./post";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
