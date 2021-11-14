import { useEffect } from "react";
import Login from "../../components/Login/Login";
import useUser from "../../hooks/useUser";

const LoginPage = () => {
  const { userRegistered, stateUser } = useUser();
  const isAuth = stateUser.isAuth;

  useEffect(() => {
    userRegistered();
    if (isAuth) {
      //
    }
  }, [isAuth, userRegistered]);
  return <Login />;
};
export default LoginPage;
