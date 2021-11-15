import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";
import usersRedurer from "./usersReducer";

const rootReducer = combineReducers({
  user: registerReducer,
  stateUser: userReducer,
  users: usersRedurer,
});

export default rootReducer;
