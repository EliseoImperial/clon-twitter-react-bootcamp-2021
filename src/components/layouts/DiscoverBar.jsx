import React, { Component } from "react";
import discoverStyles from "./DiscoverBar.modules.css";

function DiscoverBar() {
  return (
    <div>
      <div class="col-md-3">
        <div class="bg-light">
          <h5>
            <strong> A quién seguir</strong>{" "}
          </h5>

          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex justify-content-between w-100">
                <div id={discoverStyles.profilePicture}>
                  <img
                    id={discoverStyles.profileRightbar}
                    class="rounded-circle w-100 m-0 g-0"
                    src="/img/profile-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 class="m-0 p-0 g-0">nombre</h5>
                  <span>@usuario</span>
                </div>
                <div>
                  <button
                    id=""
                    class={`btn ${discoverStyles.btnTwitter} rounded-pill`}
                  >
                    Siguiendo
                  </button>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex justify-content-between w-100">
                <div id={discoverStyles.profilePicture}>
                  <img
                    id={discoverStyles.profileRightbar}
                    class="rounded-circle w-100 m-0 g-0"
                    src="/img/profile-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 class="m-0 p-0 g-0">nombre</h5>
                  <span>@usuario</span>
                </div>
                <div>
                  <button id="" class={`btn ${discoverStyles.btnTwitter} rounded-pill`}>
                    Siguiendo
                  </button>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex justify-content-between w-100">
                <div id={discoverStyles.profilePicture}>
                  <img
                    id={discoverStyles.profileRightbar}
                    class="rounded-circle w-100 m-0 g-0"
                    src="/img/profile-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 class="m-0 p-0 g-0">nombre</h5>
                  <span>@usuario</span>
                </div>
                <div>
                  <button id="" class={`btn ${discoverStyles.btnTwitter} rounded-pill`}>
                    Siguiendo
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverBar;
