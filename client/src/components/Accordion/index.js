import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import News from "../News"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./style.css"



const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: '5px 10px 8px #888888',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      marginTop: '20px'
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Biography</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="summary">
            {props.summary.bio}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Climate</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="summary">
            {props.summary.climate}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Economy</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="summary">
            {props.summary.economy}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Foreign Policy</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="summary">
            {props.summary.foreign_policy}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Healthcare</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="summary">
            {props.summary.healthcare}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Immigration</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="summary">
            {props.summary.immigration}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header" expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Latest News</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography> */}
          <News candidate={props.news_name} />
          {/* </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
