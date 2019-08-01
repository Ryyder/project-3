import React from "react";
import "./style.css";
// import TweetCard from "../TweetCard";
// import axios from "axios";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';



class TwitterContainer extends React.Component {

  state = {
    tweets: [],
    name: ""
  }

  render() {
    return (
      <div className="container">
        <div className="twitterContainer">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={this.props.name}
            options={{ height: 800, width: 400 }}
          />
        </div>
      </div>
    );
  }
}


export default TwitterContainer;
