import React from 'react';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { donateStepper as stepperStyles, donateStep as stepStyles } from '../../styles/components';

class DonateStepperConnector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render() {
        const { orientation, fulfilled, classes } = this.props;

        return (
            <SvgIcon className={classNames(classes.connector, { [classes.active]: fulfilled })} viewBox="0 0 24 3">
                {orientation === "vertical" ?
                    <line x1="12" y1="0" x2="12.5" y2="24" />
                    : <line x1="0" y1="12" x2="24" y2="12.5" />
                }
            </SvgIcon>
        );
    }
}

//Thanks to the Material UI team, as this class is heavily based on the Stepper from Material-UI :)
class DonateStepper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { selectedStep, children, classes, orientation, onChange } = this.props;
        const paperClass = classNames(
            classes.root,
            classes[orientation]
        );
        const connector = React.cloneElement(<DonateStepperConnector />, { orientation, classes });
        const childrenArray = React.Children.toArray(children);
        return (
            <Paper square elevation={0} className={paperClass}>
                {childrenArray.map((step, index) => {
                    const stepProps = {
                        index,
                        orientation,
                        fulfilled: index <= selectedStep,
                        last: index + 1 === childrenArray.length,
                        first: index === 0,
                        selected: index === selectedStep,
                        key: index,
                        index,
                        onClick: () => onChange(index)
                    };

                    return [
                        index > 0 && React.cloneElement(connector, { fulfilled: index <= selectedStep, key: index + "c" }),
                        React.cloneElement(step, { ...stepProps, ...step.props })
                    ];
                })}
            </Paper>
        )
    }
}

//Thanks to the Material UI team, as this class is heavily based on the Step from Material-UI :)
class DonateStep extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const {
            children,
            classes,
            first,
            fulfilled,
            last,
            orientation,
            selected,
            onClick
        } = this.props;

        let circle = undefined;
        if (fulfilled && !selected) {
            circle = <circle cx="12" cy="12" r="7" onClick={onClick}/>;
        } else if (selected) {
            circle = <circle cx="12" cy="12" r="10" onClick={onClick}/>;
        } else {
            circle = <circle cx="12" cy="12" r="4" onClick={onClick}/>;
        }

        let lowerLine = undefined;
        if (!last) {
            lowerLine = <line x1="12" y1="16" x2="12" y2="24" className={classNames(classes.iconLine, { [classes.active]: fulfilled && !selected })}/>;
        }

        let upperLine = undefined;
        if (!first) {
            upperLine = <line x1="12" y1="0" x2="12" y2="8" className={classNames(classes.iconLine, { [classes.active]: fulfilled })}/>;
        }

        const icon = (
            <SvgIcon className={classNames(classes.icon, { [classes.active]: fulfilled })}>
                {upperLine}
                {lowerLine}
                {circle}
            </SvgIcon>
        );

        return (
            <div className={classes[orientation]}>
                <span className={classNames(
                    classes.root,
                    classes[orientation]
                )}>
                    <span className={classNames(classes.iconContainer)}>
                        {icon}
                    </span>
                    <span className={classes.labelContainer}>
                        <Typography
                            variant="body1"
                            component="span"
                            className={classNames(classes.label, { [classes.active]: selected })}
                            onClick={onClick}
                        >
                            {children}
                        </Typography>
                    </span>
                </span>
            </div>
        );
    }
}

class DonateStepperPoop extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render() {
        const { classes } = this.props;

        const icon = (
            <SvgIcon className={classnames(classes.root, classes.active)}>
                <line x1="12.5" y1="12.5" x2="12.5" y2="24" className={classnames(classes.rootLine, classes.active)} />
                <circle cx="12" cy="12" r="8" />
            </SvgIcon>
        );

        const iconBig = (
            <SvgIcon className={classnames(classes.root, classes.active)}>
                <line x1="12.5" y1="12.5" x2="12.5" y2="24" className={classnames(classes.rootLine, classes.active)} />
                <circle cx="12" cy="12" r="12" />
            </SvgIcon>
        );

        const line = (
            <SvgIcon className={classnames(classes.rootLine, classes.active)}>
                <line x1="12.5" y1="0" x2="12.5" y2="24" className={classnames(classes.rootLine, classes.active)} />
            </SvgIcon>
        );
        return (
            <Stepper nonLinear activeStep={2} orientation="vertical" connector={<DonateStepperConnector />}>
                <Step>
                    <StepLabel icon={icon}>$10</StepLabel>
                </Step>
                <Step>
                    <StepLabel icon={icon}>$10</StepLabel>
                </Step>
                <Step>
                    <StepLabel icon={iconBig}>$30</StepLabel>
                </Step>
                <Step>
                    <StepLabel>$40</StepLabel>
                </Step>
            </Stepper>
        )
    }
}

DonateStepper = withStyles(stepperStyles)(DonateStepper);
DonateStep = withStyles(stepStyles)(DonateStep);

export { DonateStepper, DonateStep };