import React from 'react';

import { withStyles } from '@material-ui/core';

import { header as styles } from '../styles/components';

class HeaderedPage extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        const { classes, header, content, error } = this.props;

        let headerClass = error ? classes.errorHeader : classes.header;
        return (
            <div>
                <div className={headerClass}>
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