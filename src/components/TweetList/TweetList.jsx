import { useEffect, useState } from "react";

import tweetStyles from "./TweetList.module.css";
import axios from "axios";

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3100/api/home",
      });
      console.log(response.data);
      setTweets(response.data.results);
    }
    getTweets();
    console.log(tweets);
  }, [tweets]);

  return (
    <div>
      <div id="homeDivider"></div>
      <div id="tweets-content">
        <div className="row">
          <div className="col-2 d-flex align-items-start">
            <div id="profile-picture">
              <img
                id="img-logo"
                className="rounded-circle w-100"
                src="<%=tweet.user.profilePicture%>"
                alt="fotito"
              />
            </div>
          </div>
          <div className="col-10">
            <div className="d-flex flex-column">
              <div id="name-username" className="mb-0">
                <h5 className="d-inline me-1 mb-0 me-2">Nombre Apellido</h5>
                <span className="me-4"> @username</span>
              </div>
              <p>contenido del tweet</p>

              <div>
                <div className="card w-100">
                  <img
                    src="<%=faker.image.nightlife()%>"
                    className={tweetStyles.cardImgTopp}
                    alt="..."
                  />
                  <div className="card-body rounded-3">
                    <h6 className="m-0">
                      <strong>Titulo del twit con tres puntitos...</strong>
                    </h6>
                    <p className="card-text p-0 g-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <span>
                      <a href="...">
                        <i className="fas fa-link me-1"></i>linkAun.com
                      </a>
                    </span>
                  </div>
                </div>
                <div className="btn-actions d-flex justify-content-between mt-3">
                  <a href="..." className={tweetStyles.btnLinkHome}>
                    <i className="far fa-comment"></i>
                    22
                  </a>
                  <a href="..." className={tweetStyles.btnLinkHome}>
                    <i className="fas fa-retweet"></i> 3
                  </a>
                  <a href="...tweet.id" className={tweetStyles.btnLinkHome}>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-heart text-danger"></i>{" "}
                  </a>
                  <a href="..." className="btn-link-home">
                    <i className="fas fa-share-square"></i> 6
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

export default TweetList;
