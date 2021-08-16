import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logout from "../Logout/Logout";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {}, [user]);

  return (
    <div className="mt-5">
      <span className="p-3 fs-6 fw-bold hover">
        <img
          className={styles.iconoTwitterSidebar}
          src="../img/logo.png"
          alt="icono"
        />
      </span>
      <ul className="mt-2 list-goup">
        <li className="list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="/home" className={styles.aLineColor}>
            <span>
              <i className="fas fa-home"></i>
            </span>{" "}
            Inicio
          </Link>
        </li>
        <li className="list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="" className={styles.aLineColor}>
            <span>
              <i className="fas fa-hashtag"></i>
            </span>{" "}
            Explorar
          </Link>
        </li>
        <li className="list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="" className={styles.aLineColor}>
            <span>
              <i className="far fa-bell"></i>
            </span>{" "}
            Notificaciones
          </Link>
        </li>
        <li className="list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="" className={styles.aLineColor}>
            <span>
              <i className="far fa-envelope"></i>
            </span>{" "}
            Mensajes
          </Link>
        </li>
        <li className="list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="" className={styles.aLineColor}>
            <span>
              <i className="far fa-bookmark"></i>
            </span>{" "}
            Guardados
          </Link>
        </li>
        <li className=" list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="" className={styles.aLineColor}>
            <span>
              <i className="far fa-list-alt"></i>
            </span>{" "}
            Listas
          </Link>
        </li>
        <li className="list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to={`/perfil/${user.username}`} className={styles.aLineColor}>
            <span>
              <i className="fas fa-user-alt"></i>
            </span>{" "}
            Perfil
          </Link>
        </li>
        <li className=" list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Link to="" className={styles.aLineColor}>
            <span>
              <i className="fas fa-spinner"></i>
            </span>{" "}
            Más opciones
          </Link>
        </li>
        <li className=" list-group-item list-group-item-action border-0 p-3 fs-6 fw-bold hover">
          <Logout />
        </li>

        <div
          id="btn-plumita"
          className="
        rounded-circle
        text-center
        d-flex
        align-items-center
        justify-content-center
      "
        >
          <svg
            fill="whitesmoke"
            width="250px"
            height="25px"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="
          r-jwli3a
          r-4qtqp9
          r-yyyyoo
          r-1472mwg
          r-dnmrzs
          r-bnwqim
          r-1plcrui
          r-lrvibr
          r-lrsllp
        "
          >
            <g>
              <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
            </g>
          </svg>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
