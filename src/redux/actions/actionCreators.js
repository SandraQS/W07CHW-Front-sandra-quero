import actionTypes from "./actionTypes";

export const userCreateAction = (user) => ({
  type: actionTypes.userCreate,
  user,
});

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userRegisteredAction = (user) => ({
  type: actionTypes.userRegistered,
  user,
});

export const getUsersAction = (users) => ({
  type: actionTypes.getUsers,
  users,
});
