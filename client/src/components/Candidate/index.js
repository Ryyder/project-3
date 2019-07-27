import React from "react";
import "./style.css";
import TwitterContainer from "../TwitterContainer";
import Accordion from "../Accordion";

class CandidatePage extends React.Component {




  render() {
    console.log("test");
    return (
      <div className="container">
        <Accordion />
        <TwitterContainer />
      </div>
    )
  }
}

export default CandidatePage;
