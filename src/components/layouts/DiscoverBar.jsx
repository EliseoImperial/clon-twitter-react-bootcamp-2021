import discoverStyles from "./DiscoverBar.modules.css";
import { Link } from "react-router-dom";

function DiscoverBar() {
  return (
    <div>
      <div class="bg-light mt-5">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <form class="d-flex">
              <input
                class="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success rounded-pill"
                type="submit"
              >
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </nav>

        <div class={`${discoverStyles.cartillaOpinion} shadow p-1`}>
          <div className="d-flex justify-content-between">
            <h6 className="ms-2">Tendencias para ti</h6>
            <i class="fas fa-cog me-4"></i>
          </div>

          <hr />
          <div class="mb-0 pb-0">
            <div class="ms-3">
              <div class="text-dark  d-flex justify-content-between" href="#">
                <h6 class="mb-1">
                  Formula 1 <br />
                  <p class="text-gray-500 text-secondary small mt-1">
                    811 mil Tweets
                  </p>
                </h6>
                <button className="btn btn-outline-light text-primary">
                  ...
                </button>
              </div>
            </div>
          </div>
          <hr className={discoverStyles.hr} />
          <div class="">
            <div class="ms-3">
              <div class="text-dark  d-flex justify-content-between" href="#">
                <h6 class="mb-1">
                  Malvinas <br />
                  <p class="text-gray-500 text-secondary small mt-1">
                    1.350 Tweets
                  </p>
                </h6>
                <button className="btn btn-outline-light text-primary">
                  ...
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div class="">
            <div class="ms-3">
              <div class="text-dark  d-flex justify-content-between" href="#">
                <h6 class="mb-1">
                  Messi <br />
                  <p class="text-gray-500 text-secondary small mt-1">
                    950 mil Tweets
                  </p>
                </h6>
                <button className="btn btn-outline-light text-primary">
                  ...
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div class="">
            <div class="ms-3">
              <div class="text-dark  d-flex justify-content-between" href="#">
                <h6 class="mb-1">
                  Hack Academy <br />
                  <p class="text-gray-500 text-secondary small mt-1">
                    3.869 Tweets
                  </p>
                </h6>
                <button className="btn btn-outline-light text-primary">
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
