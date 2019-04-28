import React from 'react';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { donateStepper as stepperStyles, donateStep as stepStyles } from '../../styles/donate';

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
        const { selectedStep, children, classes, onChange } = this.props;
        const paperClass = classNames(
            classes.root,
            classes["vertical"]
        );
        const connector = React.cloneElement(<DonateStepperConnector />, { orientation: "vertical", classes });
        const childrenArray = React.Children.toArray(children);
        return (
            <Paper square elevation={0} className={paperClass}>
                {childrenArray.map((step, index) => {
                    const stepProps = {
                        index,
                        orientation: "vertical",
                        fulfilled: index <= selectedStep,
                        last: index + 1 === childrenArray.length,
                        first: index === 0,
                        selected: index == selectedStep,
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
            circle = <circle cx="12" cy="12" r="7" onClick={onClick}/>//<rect x="5" y="5" width="14" height="14"/>;
        } else if (selected) {
            circle = <circle cx="12" cy="12" r="10" onClick={onClick}/>;//<rect x="2" y="2" width="20" height="20"/>;
        } else {
            circle = <circle cx="12" cy="12" r="4" onClick={onClick}/>;// <rect x="8" y="8" width="8" height="8"/>;
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

DonateStepper = withStyles(stepperStyles)(DonateStepper);
DonateStep = withStyles(stepStyles)(DonateStep);

export { DonateStepper, DonateStep };