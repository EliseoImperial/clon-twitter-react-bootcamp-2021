import Sidebar from "./layouts/Sidebar";
import Tweetbox from "./tweetBox/TweetBox";
import TweetList from "./TweetList/TweetList";
import DiscoverBar from "./layouts/DiscoverBar";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-2">
            <Sidebar />
          </div>
          <div className="col-md-6 col-xs-7">
            <Tweetbox />
            <TweetList />
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
