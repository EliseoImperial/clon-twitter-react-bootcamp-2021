import registerStyles from "../register/register.module.css";

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function registerUser(ev) {
    ev.preventDefault();

    const response = await axios({
      method: "POST",
      url: "http://localhost:3100/user",
      headers: { "Content-Type": "application/json" },
      data: { firstname, lastname, email, username, password },
    });
    console.log(response);
    history.push("/home");
  }

  return (
    <div className="container">
      <div
        className={`${registerStyles.registerFormContainer} bg-light
        rounded
        shadow-lg
        m-2
        mt-5
        mx-auto`}
      >
        <form className="p-4" onSubmit={(ev) => registerUser(ev)}>
          <img
            className={registerStyles.iconoTwitterIndex}
            src="../img/logo.png"
            alt="icono"
          />
          <h3 className="text-center pb-3">Crea tu cuenta</h3>
          <label className="form-label mt-2 mb-1" htmlFor="firstname">
            Nombre
          </label>
          <input
            className="w-100 form-control rounded"
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(ev) => setFirstname(ev.target.value)}
            required
          />
          <label className="form-label mt-2 mb-1" htmlFor="lastname">
            Apellido
          </label>
          <input
            className="w-100 form-control rounded"
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(ev) => setLastname(ev.target.value)}
            required
          />
          <label className="form-label mt-2 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-100 form-control rounded"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <label className="form-label mt-2 mb-1" htmlFor="username">
            Username
          </label>
          <input
            className="w-100 form-control rounded"
            type="username"
            name="username"
            id="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
          <label className="form-label mt-2 mb-1" htmlFor="password">
            Contraseña
          </label>
          <input
            className="w-100 form-control rounded"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary mt-4 rounded-lg w-100"
          >
            Registrarte
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
