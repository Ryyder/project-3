import React from "react";
import "./style.css";
import TweetCard from "./TweetCard"
import tweets from "./Tweets.json"

// Create a Tweets.json file that stores a list of tweet ids returned from the twitter api call
// In TweetCard component put the code for creating each tweet using the given code from the internet

class TwitterContainer extends React.Component {

  state = {
    tweets,
  }
  render() {
    return (
      <div className="container">
        <div className="twitterContainer">
          <React.Fragemnt>
            {this.state.tweets.map(tweet => (
              <TweetCard
                id={tweet.id}
              />
            ))}
          </React.Fragemnt>
        </div>
      </div>
    );
  }
}


export default TwitterContainer;
