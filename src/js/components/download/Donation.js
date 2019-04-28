import React from 'react';

import { withStyles, TextField, InputAdornment } from '@material-ui/core';

import { donation as styles } from '../../styles/components';

import Typography from '@material-ui/core/Typography';

import { DonateStepper, DonateStep } from '../donate/DonateStepper';

class Donation extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onTextChange = event => {
        this.props.onChange(event.target.value);
    };

    onDonateChange = val => {
        this.props.onChange(this.props.items[val].realAmount);
    }

    render() {
        const { classes, value, items } = this.props;

        let options = [];

        let selected = 0;
        for(var o in items){
            options.push(<DonateStep key={o}>${items[o].amount} — {items[o].description}</DonateStep>);
            if(items[o].realAmount <= value) selected = o;
        }

        return (
            <div className={classes.donate}>
                <DonateStepper selectedStep={selected} onChange={this.onDonateChange}>
                    {options}
                </DonateStepper>
                <div className={classes.donateText}>
                    <Typography variant="subheading" align="center" className={classes.mobileHidden}>
                        I would like to donate
                    </Typography>
                    <TextField
                        value={value}
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        inputProps={{
                            step: 0.25,
                            min: 0.00
                        }}
                        onChange={this.onTextChange}
                    />
                    <Typography variant="subheading" align="center" className={classes.mobileHidden}>
                        before proceeding to the download.
                    </Typography>
                    <Typography variant="caption" align="center" className={classes.processorCaption}>
                        Donations are processed through PayPal.
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Donation);