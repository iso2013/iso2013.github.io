import React from 'react';

import { withStyles, Collapse, Typography } from '@material-ui/core';

import { warning as styles } from '../../styles/components';

class Configurator extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onChange = (group, option) => () => {
        this.props.onChange(group, option);
    }

    render() {
        const { classes, message, visible } = this.props;

        return (
            <Collapse in={visible}>
                <div className={classes.outdatedWarning}>
                    <Typography variant="headline" color="inherit" align="center">
                        Warning:
                    </Typography>
                    <Typography color="inherit">
                        {message}
                    </Typography>
                </div>
            </Collapse>
        );
    }
}

export default withStyles(styles)(Configurator);