import React from 'react';

import DocsIcon from '@material-ui/icons/FileCopySharp';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    entry: {
        width: "70%",
        marginTop: theme.spacing.unit * 1,
        background: "#ffeeee",
        padding: theme.spacing.unit
    }
});

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