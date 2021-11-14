import actionTypes from "./actionTypes";

export const userCreateAction = (user) => ({
  type: actionTypes.userCreate,
  user,
});

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});
