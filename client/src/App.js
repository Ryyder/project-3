import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
// import TweetCard from "./components/TweetCard";
import TwitterContainer from "./components/TwitterContainer";
import PartyDisplay from "./components/PartyDisplay";
import CandidatePage from "./components/CandidatePage";
import NotFound from "./components/NotFound";
import News from "./components/News"
import Accordion from "./components/Accordion"
// import CandidatePage from "./components/Candidate";
import Menu from "./components/Menu"
import CandidateTest from "./components/CandidateTest"


export default class App extends Component {

  state = {
    selectedParty: "None",
    selectCandidateId: "None"
  };

  // This method used to get the ID of a candidate that is selected from the PartyDisplay page
  //  Then changes the this.state.selectedCandidateId gotten from the candidate selected in PartyDisplay
  handleCandidateSelect = id => {
    console.log(id);
  }

  // This method used to change the state of the selectedParty in App.js, selected from the Home page.
  handlePartySelect = party => {
    console.log(party);
  }


  render() {
    // How to send props into routed components
    // <Route
    //   path="/"
    //   render={(props) =>
    //     <Game
    //       handleGuess={this.handleGuess}
    //       onRef={ref => (this.child = ref)}
    //     />
    //   }
    // />

      //JSX
      return (  
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute exact path="/" component={Home} />


            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/news" component={News} />
            <ProtectedRoute path="/accordion" component={Accordion} />
            <ProtectedRoute path="/twitter" component={TwitterContainer} />
            <ProtectedRoute path="/menu" component={Menu} />
            <ProtectedRoute path="/candidate" component={CandidatePage} />
            <ProtectedRoute
              path="/:party/:candidateName"
              component={CandidatePage}
              test="test Prop"
            />
            {/* <ProtectedRoute path="/:party" component={PartyDisplay} /> */}
            <ProtectedRoute
              path="/:party"
              component={PartyDisplay}
              handleCandidateSelect={this.handleCandidateSelect}
            />
            <ProtectedRoute path="/404" component={NotFound} />
            <ProtectedRoute path="/candidatetest" component={CandidateTest} />
            
            {/* <ProtectedRoute path="/:party/:candidateName" component={CandidatePage} /> */}
            


          </Switch>
        </Router>

      );
  }
}