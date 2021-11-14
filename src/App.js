import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import useUser from "./hooks/useUser";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";

function App() {
  const { userRegistered, stateUser } = useUser();
  const isAuth = stateUser.isAuth;

  useEffect(() => {
    userRegistered();
    if (isAuth) {
      //
    }
  }, [isAuth, userRegistered]);
  return (
    <>
      <Login />
    </>
  );
}

export default App;
