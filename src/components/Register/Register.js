import { useEffect, useState } from "react";
import useRegister from "../../hooks/useRegister";

const Register = () => {
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
      <h1>Registro</h1>
      <form
        onSubmit={(event) => {
          clickRegister(event);
        }}
        className="row"
      >
        <div className="form-group col-8">
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre"
            onChange={userData}
            value={newUser.name}
          />
        </div>

        <div className="form-group col-8">
          <label htmlFor="age">Edad: </label>
          <input
            type="number"
            min="0"
            className="form-control"
            id="age"
            placeholder="Edad"
            onChange={userData}
            value={newUser.age}
          />
        </div>

        <div className="form-group col-8">
          <label htmlFor="username">Nombre de usuario: </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Nombre de usuario"
            onChange={userData}
            value={newUser.username}
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
            value={newUser.password}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark col-7 mt-3"
          disabled={isdisabled}
        >
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Register;
