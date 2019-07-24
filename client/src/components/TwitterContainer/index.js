import React from "react";
import "./style.css";
import TweetCard from "../TweetCard";
// import Axios from "axios";

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

  renderTweets = () => (
    this.state.tweets.map(tweet => (
      <TweetCard
      key={tweet}
      id={tweet}
      />
    ))
  );

  render() {
    console.log(this.state.tweets)
    return (
      <div className="container">
        <div className="twitterContainer">
            {this.renderTweets()}
        </div>
      </div>
    );
  }
}


export default TwitterContainer;
