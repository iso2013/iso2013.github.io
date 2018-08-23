import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FutureImage from '../components/future/FutureImage';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
    header: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-end",
        marginBottom: theme.spacing.unit * 3
    },
    textInHeader: {
        paddingLeft: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3
    },
    tempLoadDiv: {
        width: 240,
        height: 240
    },
    button: {
        position: "fixed",
        right: theme.spacing.unit * 3,
        bottom: theme.spacing.unit * 3
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes } = this.props;

        return (
            <Fade in={true} timeout={250}>
                <div>
                    <div className={classes.header}>
                        <FutureImage spinnerSize={64} loadFunc={() => import("../../assets/img/profile.png")} classNames={{ def: classes.tempLoadDiv }} />
                        <div className={classes.textInHeader}>
                            <Typography variant="display4">
                                Hello!
                            </Typography>
                            <Typography variant="headline" gutterBottom>
                                My name is E.J. Mercer
                            </Typography> 
                            <Typography variant="title" gutterBottom>
                                But you probably know me as iso2013.
                            </Typography>
                        </div>
                    </div>
                    <Divider />
                    <br />
                    <Typography variant="body1">
                        Welcome to my spot on the internet! This page is still very much a work in progress :)
                        <br /><br />

                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
    
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
    
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </Typography>
                </div>
            </Fade>
        );
    }
}

export default withStyles(styles)(Home);