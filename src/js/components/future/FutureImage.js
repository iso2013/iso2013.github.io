import React from 'react';
import classnames from 'classnames';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

import { futureImage as styles } from '../../styles/components';

class FutureImage extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {};
    }

    render() {
        const { classes, classNames, loadFunc, spinnerSize } = this.props;

        let realClassNames = classNames || {};

        if(this.state.obj){
            return (<img src={this.state.obj} className={classnames(realClassNames.img, realClassNames.def)}/>);
        } else {
            loadFunc().then((obj) => {
                this.setState({ obj })
            });
            return (
                <div className={classnames(classes.div, realClassNames.div, realClassNames.def)}>
                    <CircularProgress className={classnames(realClassNames.spinner)} size={spinnerSize}/>
                </div>
            );
        }
    }
}

export default withStyles(styles)(FutureImage);