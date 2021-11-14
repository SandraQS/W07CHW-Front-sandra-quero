import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: registerReducer,
  stateUser: userReducer,
});

export default rootReducer;
