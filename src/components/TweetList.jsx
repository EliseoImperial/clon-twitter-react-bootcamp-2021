import React, { Component } from "react";

export class TweetList extends Component {
  render() {
    return (
      <div>
        <div id="home-divider"></div>
        <div id="tweets-content">
          <div class="row">
            <div class="col-2 d-flex align-items-start">
              <div id="profile-picture">
                <img
                  id="img-logo"
                  class="rounded-circle w-100"
                  src="<%=tweet.user.profilePicture%>"
                  alt="profile picture"
                />
              </div>
            </div>
            <div class="col-10">
              <div class="d-flex flex-column">
                <div id="name-username" class="mb-0">
                  <h5 class="d-inline me-1 mb-0 me-2"></h5>
                  <span class="me-4"></span>
                </div>
                <p></p>

                <div>
                  <div class="card w-100">
                    <img
                      src="<%=faker.image.nightlife()%>"
                      class="card-img-topp"
                      alt="..."
                    />
                    <div class="card-body rounded-3">
                      <h6 class="m-0">
                        <strong>Titulo del twit con tres puntitos...</strong>
                      </h6>
                      <p class="card-text p-0 g-0">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <span>
                        <a href="">
                          <i class="fas fa-link me-1"></i>linkAun.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div class="btn-actions d-flex justify-content-between mt-3">
                    <a href="#" class="btn-link-home">
                      <i class="far fa-comment"></i>
                      22
                    </a>
                    <a href="#" class="btn-link-home">
                      <i class="fas fa-retweet"></i> 3
                    </a>
                    <a href="/like/<%=tweet.id%>" class="btn-link-home"></a>
                    <a href="#" class="btn-link-home">
                      <i class="fas fa-share-square"></i> 6
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TweetList;
