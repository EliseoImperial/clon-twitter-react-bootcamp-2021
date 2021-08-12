import Sidebar from "./layouts/Sidebar";
import Logout from "./Logout/Logout";
import Tweetbox from "./tweetBox/TweetBox";
import TweetList from "./TweetList/TweetList";
import DiscoverBar from "./layouts/DiscoverBar";
import stylesTweetBox from "../components/tweetBox/TweetBox.module.css";
import { useState } from "react";

const Home = () => {
  const [trigger, setTrigger] = useState(1);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-2">
            <Sidebar />
            <Logout />
          </div>
          <div className="col-md-6 col-xs-7">
            <Tweetbox setTrigger={setTrigger} trigger={trigger} />
            <div className={stylesTweetBox.homeDivider}></div>
            <TweetList trigger={trigger} />
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
