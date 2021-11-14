import actionTypes from "../actions/actionTypes";

const userReducer = (stateUser = [], action) => {
  let newStateUser;

  switch (actionTypes.type) {
    case actionTypes.userCreate:
      newStateUser = [];
      break;

    case actionTypes.userLogin:
      newStateUser = "";
      break;

    default:
      newStateUser = stateUser;
  }

  return newStateUser;
};

export default userReducer;
