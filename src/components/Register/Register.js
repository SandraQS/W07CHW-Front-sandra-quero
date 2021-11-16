import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useRegister from "../../hooks/useRegister";
import paths from "../../paths/paths";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { userCreate } = useRegister();
  const initialData = {
    name: "",
    username: "",
    age: "",
    password: "",
  };

  const [newUser, setNewUser] = useState(initialData);
  const [created, setCreated] = useState(false);
  const [isdisabled, setIsdisabled] = useState(true);

  const clickRegister = (event) => {
    event.preventDefault();
    if (created) {
      userCreate(newUser);
      setNewUser(initialData);
      setCreated(false);
      setIsdisabled(true);
      navigate(paths.login);
    }
  };

  const userData = (event) => {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
    setCreated(true);
  };

  useEffect(() => {
    if (
      newUser.name !== "" &&
      newUser.username !== "" &&
      newUser.age !== "" &&
      newUser.password !== ""
    ) {
      setIsdisabled(false);
    }
  }, [newUser]);

  return (
    <>
      <section className="section-register row justify-content-center">
        <form
          onSubmit={(event) => {
            clickRegister(event);
          }}
          className="section-register__form col-md-6 col-10"
        >
          <h1>Registro</h1>
          <div className="form-group col-12">
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              onChange={userData}
              autoComplete="off"
              value={newUser.name}
            />
          </div>

          <div className="form-group col-12">
            <label htmlFor="age">Edad: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="age"
              autoComplete="off"
              placeholder="Edad"
              onChange={userData}
              value={newUser.age}
            />
          </div>

          <div className="form-group col-12">
            <label htmlFor="username">Nombre de usuario: </label>
            <input
              type="text"
              className="form-control"
              id="username"
              autoComplete="off"
              placeholder="Nombre de usuario"
              onChange={userData}
              value={newUser.username}
            />
          </div>

          <div className="form-group col-12">
            <label htmlFor="password">Contraseña: </label>
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              onChange={userData}
              value={newUser.password}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-light col-12 mt-3"
            disabled={isdisabled}
          >
            Registrarse
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
