import stylesTweetBox from "./TweetBox.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const TweetBox = ({ tweets, setTweets }) => {
  const [newTweet, setNewTweet] = useState("");
  const user = useSelector((state) => state.user);

  // const dispatch = useDispatch();
  const userData = useSelector((state) => state);

  async function createTweet(ev) {
    ev.preventDefault();
    const response = await axios({
      method: "post",
      url: "http://localhost:3100/newTweet",
      data: { content: newTweet },
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const currentTweet = response.data;
    currentTweet.user = userData.user;
    setTweets([currentTweet, ...tweets]);
    console.log(currentTweet);
  }

  return (
    <div>
      <div id={stylesTweetBox.homeContent}>
        <div className={`row ${stylesTweetBox.homeContent} mt-5`}>
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
              <form action="/tweet" method="POST">
                <div id="tweet-input">
                  <input
                    className="form-control border-0 p-0 mb-3 mt-3"
                    type="text"
                    name="content"
                    id="content"
                    value={newTweet}
                    placeholder="¿Qué está pasando?"
                    onChange={(ev) => {
                      setNewTweet(ev.target.value);
                    }}
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
                    <a href="..." className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/pict-icon.svg"
                        alt="..."
                      />
                    </a>
                    <a href="..." className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/gif-icon.svg"
                        alt="gif"
                      />
                    </a>
                    <a href="..." className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/static-icon.svg"
                        alt="survey"
                      />
                    </a>
                    <a href="..." className="me-3">
                      <img
                        className={stylesTweetBox.iconsTweet}
                        src="/img/smile-icon.svg"
                        alt="emoji"
                      />
                    </a>
                    <a href="..." className="me-3">
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
                    onClick={(ev) => {
                      createTweet(ev);
                      setNewTweet("");
                    }}
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
