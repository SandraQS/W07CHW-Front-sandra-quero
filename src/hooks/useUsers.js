import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersRedurerActionThunk } from "../redux/thunks/usersThunk";

const useUsers = () => {
  const { users } = useSelector((store) => store);
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    dispatch(usersRedurerActionThunk());
  }, [dispatch]);

  return {
    users,
    getUsers,
  };
};

export default useUsers;
