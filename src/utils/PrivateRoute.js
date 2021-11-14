import useUser from "../hooks/useUser";
import LoginPage from "../pages/LoginPage/LoginPage";

const PrivateRoute = ({ children }) => {
  const { stateUser } = useUser();
  return stateUser.isAuth ? children : <LoginPage />;
};

export default PrivateRoute;
