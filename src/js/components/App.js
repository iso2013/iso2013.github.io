import React from 'react';
import { withRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Logo from '../../assets/img/logo.svg';
import InfoIcon from '@material-ui/icons/FeedbackSharp';
import WorkIcon from '@material-ui/icons/WorkSharp';
import AssignmentIcon from '@material-ui/icons/DescriptionSharp';
import EmailIcon from '@material-ui/icons/EmailSharp';
import AllInboxIcon from '@material-ui/icons/AllInboxSharp';
import Button from '@material-ui/core/Button';
import Page from './Page';
import NavBar from './NavBar';
import FutureImage from './FutureImage';
import { DonateStepper, DonateStep } from './donate/DonateStepper.js';

const styles = theme => ({
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
    width: 240,
    height: 240
  },
  button: {
    position: "fixed",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3
  }
});

const HomeLogo = (props) => {
  return <Button {...props}>
    <img src={Logo} height={24} />
  </Button>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { value: -1 };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  body = [
    "Home",
    "About",
    "Projects",
    "Resume",
    "Contact",
    "Submit an Idea"
  ]

  tabs = [
    { component: HomeLogo, path: "/" },
    { label: "About", icon: <InfoIcon />, path: "/about" },
    { label: "Projects", icon: <WorkIcon />, path: "/projects" },
    { label: "Resume", icon: <AssignmentIcon />, path: "/resume" },
    { label: "Contact", icon: <EmailIcon />, path: "/contact" },
    { label: "Ideas", icon: <AllInboxIcon />, path: "/ideas" },
  ];

  render() {
    const { classes } = this.props;

    let value = 0;
    for(var i = 0; i < this.tabs.length; i++){
      if(this.tabs[i].path == location.pathname) value = i;
    }

    return (
      <div>
        <Page navBar={<NavBar tabs={this.tabs} />} >
          <Typography variant="display2">{this.body[value]}</Typography>
          <div className={classes.header}>
            <FutureImage spinnerSize={64} loadFunc={() => import("../../assets/img/profile.png")} classNames={{ def: classes.tempLoadDiv }} />
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
          <Divider />
          <br />
          <Typography variant="body1">
            Welcome to my spot on the internet! This page is still very much a work in progress, I've only put in about 30 minutes to the actual page :) <br /><br />

            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

          </Typography>
        </Page>
      </div>
    );
  }
}

export default hot(module)(withStyles(styles)(withRouter(App)));