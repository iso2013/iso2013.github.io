import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Loadable from 'react-loadable';
import { withStyles } from '@material-ui/core';

const styles = _ => ({
    futurePageDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

class FuturePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes, spinnerHeight, pageHeight } = this.props;

        return (
            <div style={{height: pageHeight + 'px'}} className={classes.futurePageDiv}>
                <CircularProgress size={spinnerHeight} />
            </div>
        )
    }
}

FuturePageComponent = withStyles(styles)(FuturePageComponent);

function FuturePage(loader, spinnerHeight, pageHeight) {
    return Loadable({
        loader,
        loading(){
            return <FuturePageComponent spinnerHeight={spinnerHeight} pageHeight={pageHeight}/>
        }
    });
}

export default FuturePage;