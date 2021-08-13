import Sidebar from "./layouts/Sidebar";
import Logout from "./Logout/Logout";
import Tweetbox from "./tweetBox/TweetBox";
import TweetList from "./TweetList/TweetList";
import DiscoverBar from "./layouts/DiscoverBar";
import stylesTweetBox from "../components/tweetBox/TweetBox.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3100/api/home",
      });

      setTweets(response.data);
    }
    getTweets();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-2">
            <Sidebar />
            <Logout />
          </div>
          <div className="col-md-6 col-xs-7">
            <Tweetbox tweets={tweets} setTweets={setTweets} />
            <div className={stylesTweetBox.homeDivider}></div>
            <TweetList tweets={tweets} />
          </div>
          <div class="col-md-3 col-xs-3">
            <DiscoverBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
