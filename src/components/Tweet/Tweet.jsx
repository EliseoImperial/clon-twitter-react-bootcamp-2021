import moment from "moment";
import tweetStyles from "./Tweet.module.css";

const Tweet = ({ item }) => {
  return (
    <div>
      <div className="row">
        <div className="col-2 d-flex align-items-start">
          <div id="profile-picture">
            <img
              id="img-logo"
              className="rounded-circle w-100"
              src={item.user.profilePicture}
              alt="fotito"
            />
          </div>
        </div>
        <div className="col-10">
          <div className="d-flex flex-column">
            <div
              id="name-username"
              className="pt-2 mb-0 d-flex align-items-center"
            >
              <h5 className="d-inline me-3 mb-0">{item.user.firstname}</h5>
              <span className=" me-3 mb-0">@{item.user.username}</span>
              <p className="disabled fs-6 me-1 mb-0">
                {moment(item.createdAt).format("LL")}
              </p>
            </div>
            <p className="pt-1">{item.content}</p>

            <div>
              <div className={`${tweetStyles.cardPropia} card w-100`}>
                <img
                  src="https://picsum.photos/250"
                  className={tweetStyles.cardImgTopp}
                  alt="..."
                />
                <div className="card-body rounded-3">
                  <h6 className="m-0">
                    <strong>
                      Historias increibles en las mejores imágenes!
                    </strong>
                  </h6>
                  <p className="card-text p-0 g-0">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </div>
  );
};

export default Tweet;