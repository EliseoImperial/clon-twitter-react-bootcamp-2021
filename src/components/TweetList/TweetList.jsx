import Tweet from "../Tweet/Tweet";
import { useEffect } from "react";

function TweetList({ tweets }) {
  useEffect(() => {
    console.log("component mounted");
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
