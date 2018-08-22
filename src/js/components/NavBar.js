import React from 'react';
import { withRouter } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import MoreIcon from '@material-ui/icons/MoreVertSharp';
import Menu from '@material-ui/core/Menu';
import Tab from '@material-ui/core/Tab';
import { withStyles, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { navBar as styles } from '../styles/components';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.tabs = props.tabs;
        this.moreRef = React.createRef();
        this.state = { open: false };
    }

    getCurrentVal = (path, mobile) => {
        if (!path) return 0;
        var val = 0;
        for (let i = this.tabs.length; i-- > 0;) {
            if (path.startsWith(this.tabs[i].path)) {
                val = i;
                break;
            }
        }
        if (val >= 1 && mobile) return undefined;
        return val;
    }

    handleChange = (_, value) => {
        this.props.history.push(this.tabs[value].path);
    }

    handleChangeMobile = (_, value) => {
        if (value === 1) {
            this.setState({ open: true });
        } else {
            this.props.history.push(this.tabs[value].path);
        }
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes, tabs, location } = this.props;

        const tabClasses = {
            label: classes.tabText,
            textColorInherit: classes.tabText,
            labelContainer: classes.labelContainer
        }

        let renderedTabs = tabs.map((item, idx) => (
            item.component ?
                <Tab classes={tabClasses} component={(item.component)} key={idx} />
                : <Tab classes={tabClasses} label={item.label} icon={item.icon} key={idx} />
        ));

        let mobileTabs = [];
        if (renderedTabs.length > 0) mobileTabs.push(renderedTabs[0]);
        mobileTabs.push(
            <Tab classes={{ root: classes.overflowMenu, ...tabClasses }} label={"More"} icon={
                <div ref={this.moreRef}>
                    <MoreIcon />
                </div>
            } key={-1} />
        )

        let mobileClasses = { root: classes.tabsMobile };
        if (this.getCurrentVal(location.pathname, true) !== undefined) mobileClasses.indicator = classes.tabIndicator;

        let menuItems = tabs.map((item, idx) => (
            <MenuItem key={idx} onClick={e => {
                this.setState({ open: false });
                this.handleChange(e, idx);
            }}
            classes={{root: classes.navBarMenuRoot}}
            >
                <ListItemIcon classes={{ root: classes.navBarMenuItem}}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText inset primary={item.label} disableTypography={true}/>
            </MenuItem>
        ));
        if (menuItems.length > 0) menuItems.splice(0, 1);

        return (
            <Paper className={classes.navBar}>
                <Tabs
                    value={this.getCurrentVal(location.pathname, false)}
                    onChange={this.handleChange}
                    classes={{ indicator: classes.tabIndicator, root: classes.tabs }}
                >
                    {renderedTabs}
                </Tabs>
                <Tabs
                    value={0}
                    onChange={this.handleChangeMobile}
                    indicatorColor="primary"
                    classes={mobileClasses}
                >
                    {mobileTabs}
                </Tabs>
                <Menu
                    anchorEl={this.moreRef.current}
                    open={this.state.open}
                    onClose={this.handleClose}
                    classes={{ paper: classes.navBarMenu }}
                >
                    {menuItems}
                </Menu>
            </Paper>
        );
    }
}

export default withStyles(styles(60))(withRouter(NavBar));