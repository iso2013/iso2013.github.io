import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core';

import { navBar as styles } from '../styles/components';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes, tabs, value, handleChange } = this.props;

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

        return (
            <Paper className={classes.navBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{ indicator: classes.tabIndicator }}
                >
                    {renderedTabs}
                </Tabs>
            </Paper>
        );
    }
}

export default withStyles(styles(60))(NavBar);