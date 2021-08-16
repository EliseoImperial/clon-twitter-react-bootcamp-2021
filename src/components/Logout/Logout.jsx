import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Logout = () => {
  const history = useHistory();
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <Link
        to="/perfil/:username"
        className="
            d-flex
            align-items-center
            link-dark
            text-decoration-none
           
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
        <strong>{data.username}</strong>
      </Link>
      <span
        className="btn btn-outline "
        onClick={() => {
          dispatch({ type: "LOGOUT" });
          history.push("/login");
        }}
      >
        {" "}
        Logout{" "}
      </span>
    </div>
  );
};

export default Logout;
