import { useDispatch, useSelector } from "react-redux";
import { userCreateActionThunk } from "../redux/thunks/registerThunk";

const useRegister = () => {
  const { user } = useSelector(({ user }) => ({ user }));
  const dispatch = useDispatch();

  const userCreate = (user) => {
    dispatch(userCreateActionThunk(user));
  };
  return {
    user,
    userCreate,
  };
};

export default useRegister;
