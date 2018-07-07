import React from 'react';
import { hot } from 'react-hot-loader';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 2,
    width: "80vw",
    maxWidth: "1024px",
    borderRadius: 0
  },
  bg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    width: "100%",
    minHeight: "100vh"
  },
  avatar: {
    margin: 10,
    width: 240,
    height: 240
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: theme.spacing.unit * 3
  },
  textInHeader: {
    paddingLeft: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3
  },
  tempLoadDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    height: 240,
    backgroundColor: "#ddd",
  },
  progress: {
    opacity: 1
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    if(this.state.profile === undefined){
      import("../../assets/img/profile.png").then((val) => {
        this.setState({profile: val});
      })
    }

    return (
      <div className={classes.bg}>
        <Paper className={classes.root} elevation={1}>
          <div className={classes.header}>
            {this.state.profile ? 
              <img src={this.state.profile} className={classes.avatar} />
              : <div className={classes.tempLoadDiv}>
                <CircularProgress className={classes.progress} size={64} />
              </div>
            }
            <div className={classes.textInHeader}>
              <Typography variant="display4">
                Hello!
          </Typography>
              <Typography variant="headline" gutterBottom>
                My name is E.J. Mercer
          </Typography>
              <Typography variant="title" gutterBottom>
                But you probably know me as iso2013.
          </Typography>
            </div></div>
          <Typography variant="body1">
            Welcome to my spot on the internet! This page is still very much a work in progress, I've only put in about 30 minutes to the actual page :) <br/><br/>

            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.

          </Typography>
        </Paper>
      </div>
    );
  }
}

export default hot(module)(withStyles(styles)(App));