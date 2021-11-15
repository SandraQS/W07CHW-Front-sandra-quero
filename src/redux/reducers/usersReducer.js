import actionTypes from "../actions/actionTypes";

const usersRedurer = (users = [], action) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.getUsers:
      newUsers = [...action.users];
      break;

    default:
      newUsers = users;
  }
  return newUsers;
};

export default usersRedurer;
