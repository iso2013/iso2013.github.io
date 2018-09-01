import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVertSharp';
import { withStyles, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';

const styles = theme => ({
    button: {
        marginLeft: theme.spacing.unit,
        fontSize: 12,
        borderRadius: "unset",
        flexShrink: 0
    },
    tinyButton: {
        marginLeft: theme.spacing.unit,
        fontSize: 10,
        minHeight: "unset",
        minWidth: "unset",
        padding: "2px 6px",
        borderRadius: "unset"
    },
    listButton: {
        visibility: "collapse",
        display: "none",
        maxHeight: 36,
        maxWidth: 36
    },
    tinyListButton: {
        marginLeft: theme.spacing.unit,
        fontSize: 10,
        minHeight: "unset",
        minWidth: "unset",
        padding: "2px 6px",
        borderRadius: "unset",
        visibility: "collapse",
        display: "none",
    },
    tinyListButtonIcon: {
        fontSize: 14
    },
    "@media (max-width: 1064px)": {
        button: {
            visibility: "collapse",
            display: "none"
        },
        listButton: {
            visibility: "unset",
            display: "unset"
        },
        tinyButton: {
            visibility: "collapse",
            display: "none"
        },
        tinyListButton: {
            visibility: "unset",
            display: "unset"
        }
    }
});

class CategoriesBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.moreRef = React.createRef();
        this.state = { open: false };
    }

    handleClick = (i, onChange) => () => onChange(i);

    handleClickMobile = (i, onChange) => () => {
        this.setState({ open: false });
        onChange(i);
    };

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes, categories, selected, tiny, onChange, addAll } = this.props;

        let realCategories = [...categories];
        if (addAll) realCategories.unshift("All");

        const buttons = [], menuItems = [];

        let i = addAll ? -1 : 0;
        for (var o in realCategories) {
            buttons.push(
                <Button
                    variant={i === selected ? "contained" : "outlined"}
                    size="small"
                    color="primary"
                    className={tiny ? classes.tinyButton : classes.button}
                    onClick={this.handleClick(i, onChange)}
                    key={i}
                >
                    {realCategories[o]}
                </Button>
            );
            menuItems.push(
                <MenuItem
                    key={i}
                    onClick={this.handleClickMobile(i, onChange)}
                    classes={{ root: classes.navBarMenuRoot }}
                >
                    {realCategories[o]}
                </MenuItem>
            );
            i++;
        }

        return (
            <div>
                {buttons}

                <div ref={this.moreRef}>
                    {tiny ?
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            classes={{ root: tiny ? classes.tinyListButton : classes.listButton }}
                            onClick={this.handleOpen}
                        >
                            <MoreIcon classes={{ root: tiny ? classes.tinyListButtonIcon : classes.listButtonIcon }} />
                        </Button>
                        :
                        <IconButton
                            classes={{ root: tiny ? classes.tinyListButton : classes.listButton }}
                            onClick={this.handleOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                    }
                </div>

                <Menu
                    anchorEl={this.moreRef.current}
                    open={this.state.open}
                    onClose={this.handleClose}
                    classes={{ paper: classes.navBarMenu }}
                >
                    {menuItems}
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(CategoriesBar);