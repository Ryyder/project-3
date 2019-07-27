import React from "react";
import "./style.css";
import TweetCard from "../TweetCard";
import axios from "axios";


class TwitterContainer extends React.Component {

  state = {
    tweets: [],
    name: "JoeBiden"
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
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}


export default TwitterContainer;
