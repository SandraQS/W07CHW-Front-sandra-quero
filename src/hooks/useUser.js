import { useDispatch, useSelector } from "react-redux";
import { userLoginActionThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const { stateUser } = useSelector(({ stateUser }) => ({ stateUser }));
  const dispatch = useDispatch();

  const userLogin = (user) => {
    dispatch(userLoginActionThunk(user));
  };
  return {
    stateUser,
    userLogin,
  };
};

export default useUser;
