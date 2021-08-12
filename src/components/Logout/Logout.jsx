import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Logout = () => {
  const data = useSelector((state) => state);
  // console.log(data.firstname);
  return (
    <div>
      <Link
        to="/logout"
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
        <p className="fs-6 disabled"> Logout</p>
      </Link>
    </div>
  );
};

export default Logout;
