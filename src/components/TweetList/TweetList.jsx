import Tweet from "../Tweet/Tweet";
import { useEffect } from "react";

function TweetList({ tweets = [], user }) {
  useEffect(() => {
    console.log("component mounted");
  }, []);

  return (
    <div>
      <div id="tweets-content">
        {tweets.map((tweet) => (
          <Tweet item={tweet} user={user} />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
