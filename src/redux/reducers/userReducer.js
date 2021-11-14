import actionTypes from "../actions/actionTypes";

const userReducer = (stateUser = { isAuth: false, user: {} }, action) => {
  let newStateUser;

  switch (action.type) {
    case actionTypes.userLogin:
      newStateUser = { isAuth: true, user: { ...action.user } };
      break;

    default:
      newStateUser = stateUser;
  }

  return newStateUser;
};

export default userReducer;
