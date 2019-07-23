import React from "react";
import "./style.css";
import TweetCard from "../TweetCard";
import Axios from "axios";
// import tweets from "../../../../routes/api/tweet.js";
// import tweets from "../Tweets.json";

// Create a Tweets.json file that stores a list of tweet ids returned from the twitter api call
// In TweetCard component put the code for creating each tweet using the given code from the internet

class TwitterContainer extends React.Component {

  state = {
    tweets: ["1152579779297759232", "1152577021668728832"],
    // name: "realDonaldTrump"
  }

  // componentDidMount() {
  //   Axios.get("/tweets")
  // }

  render() {
    return (
      <div className="container">
        <div className="twitterContainer">
          <p>{this.state.tweets}</p>
          <React.Fragemnt>
            {this.state.tweets.map(tweet => (
              <TweetCard
                key={tweet.id}
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
