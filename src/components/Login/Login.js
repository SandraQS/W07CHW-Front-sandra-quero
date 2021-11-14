import { useEffect, useState } from "react";

const Login = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [loginData, setloginData] = useState(initialUser);
  const [login, setLogin] = useState(false);
  const [isdisabled, setIsdisabled] = useState(true);

  const clickLogin = (event) => {
    event.preventDefault();
    if (login) {
      //crear --> accion
      setloginData(initialUser);
      setLogin(false);
      setIsdisabled(false);
    }
  };

  const userData = (event) => {
    setloginData({ ...loginData, [event.target.id]: event.target.value });
    console.log(loginData);
    setLogin(true);
  };

  useEffect(() => {
    if (loginData.username !== "" && loginData.password !== "") {
      setIsdisabled(false);
    }
  }, [loginData]);

  return (
    <>
      <h1>Registro</h1>
      <form
        onSubmit={(event) => {
          clickLogin(event);
        }}
        className="row"
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
      </form>
    </>
  );
};

export default Login;
