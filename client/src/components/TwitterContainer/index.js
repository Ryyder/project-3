import React from "react";
import "./style.css";
import TweetCard from "../TweetCard";
import axios from "axios";


class TwitterContainer extends React.Component {

  state = {
    tweets: [],
    name: ""
  }

  componentDidMount() {
    console.log("this.props.name = ", this.props.name)
    this.getTweets()
  }

  getTweets = ()=>{
    console.log("get Tweets this.props.name = ", this.props.name)
    axios.get("/api/tweets/" + this.props.name).then((response) => {
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
    console.log("Twit Cont =  ", this.props.name)
    console.log("Twit Cont State = ", this.state.name)
    console.log("Twitter Array: ", this.state.tweets)
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
