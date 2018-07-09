import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

import { page as styles } from '../styles/components';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        const { classes, children, navBar } = this.props;

        return (
            <div className={classes.backdrop}>
                {navBar}
                <Paper className={classes.paper}>
                    {children}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles(60))(Page);