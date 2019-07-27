import React from "react";
import "./style.css";


function TweetCard(props) {
  // console.log("test in tweet card")
  // console.log(props);
  
  return (
    <div className="tweet" id={props.id}></div>
  );
}

export default TweetCard;
