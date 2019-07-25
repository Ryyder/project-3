import React from "react";
import "./style.css";
import TweetCard from "../TweetCard";
// import { TwitterTweetEmbed } from 'react-twitter-embed';

import axios from "axios";

// Create a Tweets.json file that stores a list of tweet ids returned from the twitter api call
// In TweetCard component put the code for creating each tweet using the given code from the internet

class TwitterContainer extends React.Component {

  state = {
    tweets: [],
    name: "realDonaldTrump"
  }

  componentDidMount() {
    axios.get("/api/tweets/" + this.state.name).then((response) => {
      console.log("response", response)
      this.setState({ tweets: response.data });
    }).catch(err => console.log(err))
  }

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
          {/* <TwitterTweetEmbed
            tweetId={"1152579779297759232"}
            /> */}
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}


export default TwitterContainer;
