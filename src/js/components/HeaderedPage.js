import React from 'react';

import { withStyles } from '@material-ui/core';

import Fade from '@material-ui/core/Fade';
import { header as styles } from '../styles/components';

class HeaderedPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes, header, content, error } = this.props;

        return (
            <div>
                <div className={error ? classes.errorHeader : classes.header}>
                    {header}
                </div>
                <div className={classes.wrapper}>
                    {content}
                </div>
            </div>
        );
    }
}

function wrapComponents(title, content) {
    return (
        <Fade in={true} timeout={250}>
            <HeaderedPage header={title} content={content} />
        </Fade>
    );
}

HeaderedPage = withStyles(styles(60))(HeaderedPage);
export { HeaderedPage, wrapComponents };