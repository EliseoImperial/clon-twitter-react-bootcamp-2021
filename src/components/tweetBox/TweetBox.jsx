import stylesTweetBox from "./TweetBox.module.css";

const TweetBox = () => {
  return (
    <div>
      <div id={stylesTweetBox.homeContent}>
        <div className={`row ${stylesTweetBox.homeContent}`}>
          <div className="col-2 d-flex align-items-start">
            <div className={stylesTweetBox.profilePicture}>
              <img
                className="rounded-circle w-100"
                src="/img/profile-2.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-10">
            <div className="d-flex flex-column">
              <form action="/create" method="POST">
                <div id="tweet-input">
                  <input
                    className="form-control border-0 p-0 mb-3 mt-3"
                    type="text"
                    name="content"
                    id="content"
                    placeholder="¿Qué está pasando?"
                  />
                </div>

                <div id={stylesTweetBox.privacyChoiceIcon} className="d-flex">
                  <span className="me-2">
                    <i className="fas fa-globe-americas"></i>
                  </span>
                  <span>
                    <strong>Cualquier persona puede responder</strong>
                  </span>
                </div>

                <hr className="mt-3" />
                <div className="d-flex justify-content-between">
                  <div>
                    <a href="#" className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/pict-icon.svg"
                        alt="photo"
                      />
                    </a>
                    <a href="#" className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/gif-icon.svg"
                        alt="gif"
                      />
                    </a>
                    <a href="#" className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/static-icon.svg"
                        alt="survey"
                      />
                    </a>
                    <a href="#" className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/smile-icon.svg"
                        alt="emoji"
                      />
                    </a>
                    <a href="#" className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/schedule-icon.svg"
                        alt="schedule"
                      />
                    </a>
                  </div>

                  <button
                    className={`btn rounded-pill ${stylesTweetBox.btnTwitter}`}
                    type="submit"
                  >
                    Twittear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
