import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="dropdown">
      <Link
        to="#"
        className="
            d-flex
            align-items-center
            link-dark
            text-decoration-none
            dropdown-toggle
          "
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>NOMBRE Y APELLIDO DE USER</strong>
      </Link>
      <ul
        className="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <Link className="dropdown-item" to="#">
            Profile
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Logout;
