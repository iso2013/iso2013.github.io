import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
    header: {
        color: "#fff"
    },
    headerBackdrop: {
        backgroundColor:"#373737",
        margin: "-54px -24px 0px -24px",
        padding: "54px 24px 24px 24px"
    }
});

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes } = this.props;

        return (
            <Fade in={true} timeout={250}>
                <div className={classes.headerBackdrop}>
                    <Typography variant="display1" align="center" classes={{root: classes.header}}>Projects</Typography>
                </div>
            </Fade>
        );
    }
}

export default withStyles(styles)(Projects);