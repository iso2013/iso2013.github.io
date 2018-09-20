import React from 'react';

import DocsIcon from '@material-ui/icons/FileCopySharp';
import FutureImage from '../future/FutureImage';
import { withStyles } from '@material-ui/core/styles';

import { loadingProject as styles } from '../../styles/projects';

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