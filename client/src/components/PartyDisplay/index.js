import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from "react-router-dom";
import axios from "axios";
import BackButton from "../BackButton"
import Menu from "../Menu";
import PageTitle from "../PageTitle";
import CandidateListItem from "../CandidateListItem";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

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


                if (res.data.length === 0) {
                    this.setState({ redirectMe: true })
                } else {
                    this.setState({ partyMembers: res.data });
                }

            }).catch(err => console.log(err));
    }

    componentDidMount() {
        this.setState({ selectedParty: this.state.selectedParty })
    }


    render() {
        // console.log(this.state.partyMembers);

        // if(this.state.selectedParty !== "Democrats" || this.state.selectedParty !== "Republican") {
        //     return <Redirect to="/404" />
        // }
        if (this.state.redirectMe) {
            return <Redirect to="/404" />
        }

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Menu
                    content={
                        <div>
                            <BackButton party="" />
                            <div className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <PageTitle
                                            title={this.state.selectedParty}
                                        />
                                    </div>
                                </div>

                                <div className="col s12">
                                    <div className={classes.root}>
                                        <Grid container spacing={3}>
                                            {this.state.partyMembers.length === 0 ? "Nothing Here" :
                                                this.state.partyMembers.map((candidate) => {
                                                    // console.log("Entered Loop of List");                 
                                                    // Return the element. Also pass key     
                                                    return (
                                                        // <div className={classes.root}>
                                                        //     <Grid container spacing={3}>
                                                        <React.Fragment>
                                                            <Grid item xs={12} sm={6}>
                                                                {/* <Paper className={classes.paper}>xs=12</Paper> */}
                                                                <CandidateListItem
                                                                    candidateProp={candidate}
                                                                    handleCandidateSelect={this.props.handleCandidateSelect}
                                                                />
                                                            </Grid>
                                                            {/* <Grid item xs={6}>
                                                            <Paper className={classes.paper}>xs=6</Paper>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Paper className={classes.paper}>xs=6</Paper>
                                                        </Grid> 
                                                        </Grid>
                                                    </div>*/}                                </React.Fragment>


                                                        // <CandidateListItem
                                                        //     candidateProp={candidate}
                                                        //     handleCandidateSelect={this.props.handleCandidateSelect}
                                                        // />
                                                        // candidate.name
                                                        )
                                            }
                                            )}
                                                    </Grid>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                />
            </React.Fragment>
        );
    };
};

export default withRouter(withStyles(styles)(PartyDisplay));
// export default PartyDisplay;