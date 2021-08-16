import Tweet from "../Tweet/Tweet";

function TweetList({ tweets = [], user }) {
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
