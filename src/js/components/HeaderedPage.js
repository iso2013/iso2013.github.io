import React from 'react';

import { withStyles } from '@material-ui/core';

import { header as styles } from '../styles/components';

class HeaderedPage extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        const { classes, header, content } = this.props;

        return (
            <div>
                <div className={classes.header}>
                    {header}
                </div>
                <div className={classes.wrapper}>
                    {content}
                </div>
            </div>
        );
    }
}

export default withStyles(styles(60))(HeaderedPage);