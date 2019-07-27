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


export default class App extends Component {


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
            <ProtectedRoute path="/candidate" component={CandidatePage} />
            
            {/* <ProtectedRoute path="/:party/:candidateName" component={CandidatePage} /> */}
            <Route
              path="/:party/:candidateName"
              render={(props) =>
                <CandidatePage
                  test="test Prop"
                />
              }
            />
            {/* <ProtectedRoute path="/:party" component={PartyDisplay} /> */}
            <Route
              path="/:party"
              render={(props) =>
                <PartyDisplay
                  test="test Prop"
                />
              }
            />

            <ProtectedRoute path="*" component={NotFound} />

          </Switch>
        </Router>

      );
  }
}