import React from 'react';

import { withStyles } from '@material-ui/core';

import { styles } from '../styles/download';

import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import HeaderedPage from '../components/HeaderedPage';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: "Loading..."
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <Fade in={true} timeout={250}>
                <HeaderedPage
                    header={
                        <Typography variant="display1" align="center" color="inherit" classes={{root: classes.loadingText}}>
                            {this.state.name}
                        </Typography>
                    }

                    content={
                        <div>

                        </div>
                    }
                />
            </Fade>
        );
    }
}

export default withStyles(styles)(Download);