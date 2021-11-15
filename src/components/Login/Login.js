import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import paths from "../../paths/paths";
const Login = () => {
  const { userLogin, stateUser } = useUser();
  const navigate = useNavigate();
  const initialUser = {
    username: "",
    password: "",
  };
  const [loginData, setloginData] = useState(initialUser);
  const [isdisabled, setIsdisabled] = useState(true);

  const clickLogin = (event) => {
    event.preventDefault();
    userLogin(loginData);
    setloginData(initialUser);
    setIsdisabled(true);
    navigate(paths.profile);
  };

  useEffect(() => {
    if (stateUser.isAuth) {
      navigate(paths.profile);
    }
  });

  const userData = (event) => {
    setloginData({ ...loginData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (loginData.username !== "" && loginData.password !== "") {
      setIsdisabled(false);
    }
  }, [loginData]);

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          clickLogin(event);
        }}
        className="form-login row"
      >
        <div className="form-group col-8">
          <label htmlFor="username">Nombre de usuario: </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Nombre de usuario"
            onChange={userData}
            value={loginData.username}
          />
        </div>

        <div className="form-group col-8">
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            onChange={userData}
            value={loginData.password}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark col-7 mt-3"
          disabled={isdisabled}
        >
          Login
        </button>

        <Link to={paths.register}>
          <button type="button" className="btn btn-primary col-7 mt-3">
            Registrarme
          </button>
        </Link>
      </form>
    </>
  );
};

export default Login;
