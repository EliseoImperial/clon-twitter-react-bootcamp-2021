import discoverStyles from "./DiscoverBar.modules.css";
import { Link } from "react-router-dom";

function DiscoverBar() {
  return (
    <div>
      <div className="bg-light">
        <h5>
          <strong> A quién seguir</strong>{" "}
        </h5>

        <div className="list-group">
          <Link href="#" className="list-group-item list-group-item-action">
            <div className="d-flex justify-content-between w-100">
              <div className={discoverStyles.profilePicture}>
                <img
                  className={`${discoverStyles.profileRightbar} rounded-circle w-100 m-0 g-0`}
                  src="/img/profile-2.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="m-0 p-0 g-0">nombre</h5>
                <span>@usuario</span>
              </div>
              <div>
                <button
                  id=""
                  className={`btn ${discoverStyles.btnTwitter} rounded-pill`}
                >
                  Siguiendo
                </button>
              </div>
            </div>
          </Link>
          <Link href="#" className="list-group-item list-group-item-action">
            <div className="d-flex justify-content-between w-100">
              <div className={discoverStyles.profilePicture}>
                <img
                  className={`${discoverStyles.profileRightbar} rounded-circle w-100 m-0 g-0`}
                  src="/img/profile-2.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="m-0 p-0 g-0">nombre</h5>
                <span>@usuario</span>
              </div>
              <div>
                <button
                  id=""
                  className={`btn ${discoverStyles.btnTwitter} rounded-pill`}
                >
                  Siguiendo
                </button>
              </div>
            </div>
          </Link>
          <Link href="#" className="list-group-item list-group-item-action">
            <div className="d-flex justify-content-between w-100">
              <div className={discoverStyles.profilePicture}>
                <img
                  className={`${discoverStyles.profileRightbar} rounded-circle w-100 m-0 g-0`}
                  src="/img/profile-2.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="m-0 p-0 g-0">nombre</h5>
                <span>@usuario</span>
              </div>
              <div>
                <button
                  id=""
                  className={`btn ${discoverStyles.btnTwitter} rounded-pill`}
                >
                  Siguiendo
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DiscoverBar;
