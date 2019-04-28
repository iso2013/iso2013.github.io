import React from 'react';
import classnames from 'classnames';

import { withStyles, Checkbox } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';
import CheckBoxIcon from '@material-ui/icons/CheckBoxSharp';
import Button from '@material-ui/core/Button';

import { configurator as styles } from '../../styles/components';

import Typography from '@material-ui/core/Typography';

class Configurator extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onChange = (group, option) => () => {
        this.props.onChange(group, option);
    }

    render() {
        const { classes, config, selection, autoDownload, onChangeDownload } = this.props;

        let groups = [];
        let first = true;

        for (var i in config.items) {
            var group = config.items[i];
            var options = [];
            for (var o in group) {
                options.push(
                    <Button
                        classes={{ root: classes.optionButton }}
                        size="small"
                        variant={selection[i] == o ? "contained" : "outlined"}
                        color={group[o].color}
                        onClick={this.onChange(i, o)}
                        key={o}>
                        {group[o].label}
                    </Button>
                );
            }
            groups.push(
                <div className={classnames(classes.optionGroup, {[classes.topSpace]: !first})} key={i}>
                    <Typography variant="subheading">{config.labels[i]}</Typography>
                    {options}
                </div>
            );
            if(first) first = false;
        }

        if (config.dependencies) {
            groups.push(
                <div className={classnames(classes.optionGroup)} key="autoDependencies">
                    <Typography variant="subheading">
                        Auto-Download Dependencies:
                    </Typography>
                    <Checkbox
                        classes={{ root: classes.optionButton }}
                        size="small" variant="contained" color="primary"
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        checked={autoDownload}
                        onChange={(e) => onChangeDownload(e.target.checked)}
                    />
                </div>
            );
        }

        return (<div>{groups}</div>);
    }
}

export default withStyles(styles)(Configurator);