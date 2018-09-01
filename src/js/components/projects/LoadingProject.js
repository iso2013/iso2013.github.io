import React from 'react';

import Button from '@material-ui/core/Button';
import DocsIcon from '@material-ui/icons/FileCopySharp';
import FutureImage from '../future/FutureImage';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    entry: {
        width: "70%",
        marginTop: theme.spacing.unit * 2,
        display: "flex",
        alignItems: "flex-start"
    },
    spacer: {
        flexGrow: 1,
        flexShrink: 1
    },
    details: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexGrow: 1,
        paddingLeft: theme.spacing.unit * 2
    },
    titleAndTags: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    icon: {
        minWidth: 96,
        minHeight: 96,
        marginBottom: theme.spacing.unit * 2
    },
    placeholderTitle: {
        height: "1.3125rem",
        width: "30%",
        backgroundColor: "#DDD",
    },
    placeholderDescription: {
        height: "0.875rem",
        flexGrow: 1,
        backgroundColor: "#EEE",
        marginBottom: theme.spacing.unit
    },
    "@media (max-width: 1064px)": {
        entry: {
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "column"
        },
        details: {
            width: "100%"
        }
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
        const { classes } = this.props;

        return (
            <div className={classes.entry}>
                <FutureImage spinnerSize={32} loadFunc={() => new Promise(function () { })} classNames={{ def: classes.icon }} />
                <div className={classes.details}>
                    <div className={classes.titleAndTags}>
                        <div className={classes.placeholderTitle} />
                        <div className={classes.spacer} />
                    </div>
                    <div className={classes.placeholderDescription} />
                    <div className={classes.placeholderDescription} />
                    <div className={classes.placeholderDescription} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Project);