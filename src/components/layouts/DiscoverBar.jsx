import React, { Component } from "react";
import "../TweetList/TweetList.css";

export class DiscoverBar extends Component {
  render() {
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
                  <div id="profile-picture">
                    <img
                      id="profile-rightbar"
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
                    <button id="" class="btn btn-twitter rounded-pill">
                      Siguiendo
                    </button>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex justify-content-between w-100">
                  <div id="profile-picture">
                    <img
                      id="profile-rightbar"
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
                    <button id="" class="btn btn-twitter rounded-pill">
                      Siguiendo
                    </button>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex justify-content-between w-100">
                  <div id="profile-picture">
                    <img
                      id="profile-rightbar"
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
                    <button id="" class="btn btn-twitter rounded-pill">
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
}

export default DiscoverBar;
