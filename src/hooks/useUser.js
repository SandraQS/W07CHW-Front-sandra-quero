import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisteredAction } from "../redux/actions/actionCreators";
import { userLoginActionThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const { stateUser } = useSelector((store) => store);
  const dispatch = useDispatch();

  const userLogin = (user) => {
    dispatch(userLoginActionThunk(user));
  };

  const userRegistered = useCallback(() => {
    const registeredUser = JSON.parse(localStorage.getItem("user"));
    if (registeredUser) {
      const infoUser = jwtDecode(registeredUser.token);
      dispatch(userRegisteredAction(infoUser));
    }
  }, [dispatch]);

  return {
    stateUser,
    userLogin,
    userRegistered,
  };
};

export default useUser;
