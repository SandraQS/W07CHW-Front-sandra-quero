import { combineReducers } from "redux";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
  user: registerReducer,
});

export default rootReducer;
