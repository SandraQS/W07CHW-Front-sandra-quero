import { useEffect } from "react";
import Login from "../../components/Login/Login";
import useUser from "../../hooks/useUser";
import useUsers from "../../hooks/useUsers";

const LoginPage = () => {
  const { userRegistered, stateUser } = useUser();
  const { getUsers } = useUsers();
  const isAuth = stateUser.isAuth;

  useEffect(() => {
    userRegistered();
    if (isAuth) {
      getUsers();
    }
  }, [isAuth, userRegistered, getUsers]);
  return <Login />;
};
export default LoginPage;
