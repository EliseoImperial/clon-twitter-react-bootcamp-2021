import { useEffect, useState } from "react";
import axios from "axios";
import Tweet from "../Tweet/Tweet";

function TweetList() {
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
  }, []);

  return (
    <div>
      <div id="tweets-content">
        {tweets.map((tweet) => (
          <Tweet item={tweet} />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
