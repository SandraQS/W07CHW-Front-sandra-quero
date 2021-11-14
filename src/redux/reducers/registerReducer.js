import actionTypes from "../actions/actionTypes";

const registerReducer = (user = {}, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.userCreate:
      newUser = { ...action.user };
      break;

    default:
      newUser = user;
  }

  return newUser;
};

export default registerReducer;
