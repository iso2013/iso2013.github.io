import React from 'react';
import { withRouter } from "react-router-dom";

import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { HeaderedPage} from '../components/HeaderedPage';

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { location } = this.props;

        return (
            <Fade in={true} timeout={250}>
                <HeaderedPage
                    header={
                        <Typography variant="display1" align="center" color="inherit">Page not Found</Typography>
                    }

                    content={
                        <Typography variant="headline">The path "{location.pathname}" could not be found. Sorry!</Typography>
                    }

                    error
                />
            </Fade>
        );
    }
}

export default withRouter(PageNotFound);