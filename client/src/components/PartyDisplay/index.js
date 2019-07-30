import React from 'react';
import {withRouter} from 'react-router';
import { Redirect } from "react-router-dom";
import axios from "axios";

import Menu from "../Menu";
import PageTitle from "../PageTitle";
import CandidateListItem from "../CandidateListItem";

import "./style.css"

class PartyDisplay extends React.Component {
    constructor(props) {
        super(props);

        // party first comes in all lowercase
        let party = props.match.params.party;

        // make the first letter of the part uppercase
        let fixedParty = party.charAt(0).toUpperCase() + party.slice(1);

        this.state = {
            selectedParty: fixedParty,
            redirectMe: false,
            partyMembers: []
        };
        
        let query = "/api/candidates?party=" + fixedParty;
        axios.get(query)
        .then((res) => {
            console.log(res);

            
            if(res.data.length === 0) {
                this.setState( { redirectMe : true} )
            } else {
                this.setState({ partyMembers: res.data });
            }
            
        }).catch(err => console.log(err));
    }
    
    
    render() {
        console.log(this.state.partyMembers);

        // if(this.state.selectedParty !== "Democrats" || this.state.selectedParty !== "Republican") {
        //     return <Redirect to="/404" />
        // }
        if(this.state.redirectMe){
            return <Redirect to="/404" />
        }

        return(
            <React.Fragment>
                <Menu 
                    // link = "/"
                />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <PageTitle 
                                title = {this.state.selectedParty}
                            />
                        </div>
                    </div>

                    <div className="col s12">
                        {this.state.partyMembers.length === 0 ? "Nothing Here" : 
                            this.state.partyMembers.map((candidate) => {     
                                console.log("Entered Loop of List");                 
                                // Return the element. Also pass key     
                                    return(
                                        <CandidateListItem 
                                            candidateProp = {candidate}
                                            handleCandidateSelect = {this.props.handleCandidateSelect}
                                        />
                                        // candidate.name
                                    )}
                            )}
                    </div>
                </div>

            </React.Fragment>
        );
    };
};

export default withRouter(PartyDisplay);
// export default PartyDisplay;