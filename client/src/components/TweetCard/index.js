import React from "react";
import "./style.css";
import tweets from "./Tweets.json"

// Create a Tweets.json file that stores a list of tweet ids returned from the twitter api call
// In TweetCard component put the code for creating each tweet using the given code from the internet

class TweetCard extends React.Component {

  // state = {
  //   tweets,
  // }
  render() {
    return (
      <div id="tweet" tweetID="515490786800963584"></div>
    );
  }
}


export default TweetCard;
