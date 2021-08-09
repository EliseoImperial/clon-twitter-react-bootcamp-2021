import { Link } from "react-router-dom";
import indexStyles from "../index/index.module.css";

const Index = () => {
  return (
    <div>
      <div className={`${indexStyles.generalContainer} rounded-lg`}>
        <div className="row h-100 g-0">
          <div className={`${indexStyles.imgBackgroundIndex} col-md-6`}></div>

          <div className="col-md-6 ps-5 d-flex align-items-center">
            <div>
              <img
                className={indexStyles.iconoTwitterIndex}
                src="../img/logo.png"
                alt="icono"
              />
              <h1 className={indexStyles.tituloIndex}>
                Lo que está <br />
                pasando ahora
              </h1>
              <h2 className={`${indexStyles.h2Index} mt-5`}>
                Únete a Twitter hoy mismo.
              </h2>
              <div className="mt-5">
                <Link
                  className={`${indexStyles.btnRegister} btn btn-primary rounded-lg`}
                  to="/registro"
                >
                  Registrarse
                </Link>
              </div>
              <div className="mt-4">
                <Link
                  className={`${indexStyles.btnLogin} btn btn-light rounded-lg`}
                  to="/login"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="d-flex justify-content-around">
          <p>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Acerca de
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Centro de ayuda
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Condiciones de servicios
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Política de Privacidad
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Politica de cookies
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Info de anuncios
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Blog
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Estado
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Empleos
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Recursos para marcas
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Publicidad
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Marketing
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Twitter para empresas
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Desarrolladores
            </Link>
            <Link className={`${indexStyles.linksFooter} form-text`} to="/">
              Configuración
            </Link>
            <span>© 2021 Twitter, Inc.</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
