import React from 'react';
import {withRouter} from 'react-router';
import "./style.css"

class CandidatePage extends React.Component {
    state = {
        // selectedParty: "",
        // partyMembers: []
    };

    render() {
        return(
            <div>
                <h1>I am the CandidatePage Component</h1>
                <h2>{this.props.match.params.party}</h2>
                <h2>{this.props.match.params.candidateName}</h2>
            </div>
        );
    };
};

export default withRouter(CandidatePage);