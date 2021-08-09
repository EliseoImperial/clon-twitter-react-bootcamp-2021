import registerStyles from "../register/register.module.css";

const Register = () => {
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
        <form action="/registro" method="POST" className="p-4">
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
