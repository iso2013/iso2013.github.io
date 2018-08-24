import React from 'react';
import { withRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';

import { Route } from "react-router";

import { withStyles } from '@material-ui/core/styles';
import Logo from '../../assets/img/logo.svg';
import InfoIcon from '@material-ui/icons/FeedbackSharp';
import WorkIcon from '@material-ui/icons/WorkSharp';
import AssignmentIcon from '@material-ui/icons/DescriptionSharp';
import EmailIcon from '@material-ui/icons/EmailSharp';
import AllInboxIcon from '@material-ui/icons/AllInboxSharp';
import Button from '@material-ui/core/Button';
import Page from './Page';
import NavBar from './NavBar';
import FuturePage from './future/FuturePage';

const HomeLogo = (props) => {
  return <Button {...props}>
    <img src={Logo} height={32} />
  </Button>
}

const tabs = [
  { component: HomeLogo, path: "/", import: () => import("../pages/Home") },
  { label: "About", icon: <InfoIcon />, path: "/about", import: () => import("../pages/About") },
  { label: "Projects", icon: <WorkIcon />, path: "/projects", import: () => import("../pages/Projects") },
  { label: "Resume", icon: <AssignmentIcon />, path: "/resume", import: () => import("../pages/Resume") },
  { label: "Contact", icon: <EmailIcon />, path: "/contact", import: () => import("../pages/Contact") },
  { label: "Ideas", icon: <AllInboxIcon />, path: "/ideas", import: () => import("../pages/Ideas") }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.tabComponents = [];
    this.routes = [];
    tabs.forEach((item) => {
      this.tabComponents.push({
        component: item.component,
        label: item.label,
        icon: item.icon,
        path: item.path,
      });
      this.routes.push(<Route key={item.path} exact={item.path === "/"} path={item.path} component={FuturePage(item.import, 64, 384)} />);
    });
  }

  render() {
    return (
      <Page navBar={<NavBar tabs={this.tabComponents} />} >
        {this.routes}
      </Page>
    );
  }
}

export default hot(module)(withRouter(App));