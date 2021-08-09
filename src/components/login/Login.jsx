import { Link } from "react-router-dom";
import loginStyles from "../login/login.module.css";

const Login = () => {
  return (
    <div>
      <div className={`${loginStyles.containerTotalLogin}text-center`}>
        <img
          className={loginStyles.iconoTwitterIndex}
          src="../img/logo.png"
          alt="icono"
        />
        <h2 className={`${loginStyles.login}`}>
          Iniciar sesión en <br />
          Twitter
        </h2>
      </div>
      <div
        className={`${loginStyles.loginFormContainer} container mt-3 shadow rounded`}
      >
        <form action="/login" method="POST">
          <div class="mb-3">
            <label htmlFor="username" className="form-label mt-3">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
              placeholder="Ingrese username..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label mt-2">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              placeholder="Ingrese contraseña"
            />
          </div>

          <button className="btn btn-primary mt-2 mb-2 rounded-lg w-100">
            Iniciar sesión
          </button>
          <div className={`${loginStyles.colorLetter}pt-4 pb-1 text-center`}>
            <p>
              Olvidaste tu contraseña?
              <Link to="/"> Regístrate en Twitter</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
