import React from 'react';

import { withStyles, Divider, Collapse, Stepper, Step, StepLabel, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp';

import { styles } from '../styles/download';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { wrapComponents } from '../components/HeaderedPage';
import Donation from '../components/download/Donation';
import Configurator from '../components/download/Configurator';
import Warning from '../components/download/Warning';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: "Loading...",
            selected: 1,
            amount: "2.00",
            error: true,
            selection: [1],
            download: false
        };
    }

    donationChange = (amount) => {
        this.setState({ amount });
    }

    hideError = () => {
        this.setState({ error: false });
    }

    optionChange = (key, value) => {
        let clone = this.state.selection.slice(0);
        clone[key] = value;
        this.setState({ selection: clone })
    }

    render() {
        const { classes } = this.props;

        const header = (
            // <Typography variant="display2" align="center" color="inherit" classes={{root: classes.loadingText}}>
            //     {this.state.name}
            // </Typography>
            <Typography variant="display2" align="center" color="inherit">
                MultiLineAPI
            </Typography>
        );

        const content = (<div className={classes.container}>
            <Collapse in={this.state.error}>
                <Typography variant="headline" align="center" color="inherit">
                    Time spent writing this project:
                </Typography>
                <Typography variant="display2" align="center" color="inherit">
                    1,030 hours
                </Typography>
                <Divider classes={{ root: classes.divider }} />
                <Typography variant="headline" color="inherit">
                    Donation
                </Typography>
                <div className={classes.section}>
                    <Donation
                        items={[
                            { amount: "0", realAmount: 0, description: "Nothing" },
                            { amount: "2", realAmount: 2, description: "Candy Bar" },
                            { amount: "10", realAmount: 10, description: "Meal at a Restaurant" },
                            { amount: "20", realAmount: 20, description: "Pizza and Drinks" },
                            { amount: "100", realAmount: 100, description: "College Textbook" },
                            { amount: "100+", realAmount: 100.01, description: "✨🎇🎆🎇✨" }
                        ]}
                        value={this.state.amount}
                        onChange={this.donationChange} />
                    <Typography align="center" color="inherit" classes={{ root: classes.donationText }}>
                        I put donation pages on some downloads as a replacement for publishing premium resources. I don't like to discourage new servers with no budget from utilizing my resources; however, I also would highly appreciate your consideration of leaving a donation.
                    </Typography>
                </div>
                <Divider classes={{ root: classes.divider }} />
                <Typography variant="headline" color="inherit">
                    Configuration
                </Typography>
                <div className={classes.section}>
                    <Configurator
                        config={{
                            items: [[
                                { label: "1.8-1.12", color: "secondary" },
                                { label: "1.13+", color: "primary" }
                            ]],
                            labels: ["Server Version:"],
                            dependencies: true
                        }}
                        selection={this.state.selection}
                        onChange={this.optionChange}
                        autoDownload={this.state.download}
                        onChangeDownload={(v) => { this.setState({ download: v }); }} />
                    <Warning
                        message={"The version that you have selected is not officially supported. By choosing to continue, you acknowledge that you do not need support for this outdated configuration."}
                        visible={this.state.selection[0] == 0}
                    />
                </div>
                <Divider classes={{ root: classes.divider }} />
                <Button size="large" variant="contained" color="primary" onClick={this.hideError}>Continue</Button>
            </Collapse>
            <Collapse in={!this.state.error}>
                <div className={classes.stepperContainer}>
                    <IconButton>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Stepper classes={{root: classes.stepper}}>
                        <Step>
                            <StepLabel>Complete Donation</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Download Dependencies</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Download Resource</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Finished!</StepLabel>
                        </Step>
                    </Stepper>
                </div>
            </Collapse>
        </div>);

        return (wrapComponents(header, content));
    }
}

export default withStyles(styles)(Download);