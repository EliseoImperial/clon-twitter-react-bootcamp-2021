import Sidebar from "./layouts/Sidebar";
import Tweetbox from "./tweetBox/TweetBox";
import TweetList from "./TweetList/TweetList";
import DiscoverBar from "./layouts/DiscoverBar";
import stylesTweetBox from "../components/tweetBox/TweetBox.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3100/api/home",
      });
      setTweets(response.data);
    }
    getTweets();
  }, []);

  return (
    //si existe el token el la store, rendereá el home, sino registrate

    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-2">
            <Sidebar user={user} />
          </div>
          <div className="col-md-6 col-xs-7">
            <Tweetbox tweets={tweets} setTweets={setTweets} />
            <div className={stylesTweetBox.homeDivider}></div>
            <TweetList tweets={tweets} user={user} />
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
