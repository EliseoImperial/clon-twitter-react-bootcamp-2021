import Tweet from "../Tweet/Tweet";
// import { useSelector } from "react-redux";

function TweetList({ user }) {
  // const tweets = useSelector((state) => state.user.tweets);
  return (
    <div>
      <div id="tweets-content">
        {user.tweets.map((tweet) => (
          <Tweet item={tweet} user={user} />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
