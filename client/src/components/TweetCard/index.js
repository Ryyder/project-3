import React from "react";
import "./style.css";
// import { TwitterTweetEmbed } from 'react-twitter-embed';


// Create a Tweets.json file that stores a list of tweet ids returned from the twitter api call
// In TweetCard component put the code for creating each tweet using the given code from the internet

// class TweetCard extends React.Component {


//   render() {
//     return (
//       <div id="tweet" tweetID={this.props.id}></div>
//     );
//   }
// }


// export default TweetCard;






function TweetCard(props) {
  console.log("test in tweet card")
  console.log(props);
  
  return (
    <div className="tweet" id={props.id}></div>
  );
}

export default TweetCard;
