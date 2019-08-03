import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import CandidateListItemStyles from "./style.css"
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    card: {
        width: 345,
    },
    media: {
        height: 450,
    }
});

export default function CandidateListItem(props) {
    const classes = useStyles()

    return (
<Card className={classes.card} raised={true}>
    <CardActionArea>
        <CardMedia
            className={classes.media}
            image={props.candidateProp.img_url}
            title={props.candidateProp.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.candidateProp.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.candidateProp.age + ", " + props.candidateProp.cur_position}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {"Years in Government Service: " + props.candidateProp.yrs_served}
            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary">
            Share
            </Button>
        <Button size="small" color="primary" target="_blank" href={"/" + props.candidateProp.party + "/" + props.candidateProp.route_name}>
        {/* <Button size="small" color="primary" target="_blank" href={"/candidates/" + props.candidateProp.route_name} onClick={() => console.log("test test est etwtejkjfdner")}> */}
        {/* <Button size="small" color="primary" target="_blank" href={"/candidates/" + props.candidateProp.route_name} > */}
            Learn More
            </Button>
    </CardActions>
</Card>
    )
}


///////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';

// import "./style.css"

// class CandidateListItem extends Component {
//     state = {
//         style: { backgroundImage: "url(" + this.props.candidateProp.img_url + ")" }
//     }

//     // componentDidMount() {
//     //     this.props.onRef(this)
//     // }
//     // componentWillUnmount() {
//     //     this.props.onRef(undefined)
//     // }

//     // changeImage = image => {
//     //     // Update the state in this component
//     //     this.setState({ style: { backgroundImage: "url(" + image + ")" } });
//     //     // console.log("Changing the image state!")
//     // }

//     render() {
//         return (
//             // <div className="card-item" style={this.state.style} value={this.props.candidateProp._id} name={this.props.character.name} onClick={() => this.props.handleGuess(this.props.candidateProp._id)}>
//             // </div>

//             <div className="row">
//                 <div className="col s12 m7">
//                     <div className="card">
//                         <div className="card-image">
//                             <img src={this.props.candidateProp.img_url} />
//                                 <span className="card-title">{this.props.candidateProp.name}</span>
//                             {/* </img> */}
//                         </div>
//                         <div className="card-content">
//                             <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
//                         </div>
//                             <div className="card-action">
//                                 <a href={"/candidates/" + this.props.candidateProp._id}>This is a link</a>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
        
// export default CandidateListItem;