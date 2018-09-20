import React from 'react';

import DocsIcon from '@material-ui/icons/FileCopySharp';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { failedProject as styles } from '../../styles/projects';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    getIconBy() {
        return DocsIcon;
    }

    openLink = (link) => () => {
        window.open(link);
    }

    render() {
        const { classes, message } = this.props;

        let shownMessage = "Failed to load projects";
        if(message){
            shownMessage = shownMessage + ": " + message;
        }

        return (
            <div className={classes.entry}>
                <Typography color="error">{shownMessage}</Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Project);