import React from 'react';

import ClearIcon from '@material-ui/icons/ClearSharp';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/SearchSharp';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import CategoriesBar from './CategoriesBar';

const styles = theme => ({
    toolbar: {
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        marginBottom: theme.spacing.unit * 1
    },
    searchButton: {
        maxHeight: 36,
        maxWidth: 36
    },
    spacer: {
        flexGrow: 1,
        flexShrink: 1
    },
    search: {
        flexGrow: 1,
        flexShrink: 1
    }
});

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            searchOpen: false
        };
    }

    toggleSearch = () => {
        this.setState({ searchOpen: !this.state.searchOpen });
    }

    clearText = () => {
        this.setState({ searchOpen: false });
        this.props.onSearchTextChange("");
    }

    render() {
        const { classes, searchText, onSearchTextChange, categories, selected, onCategoryChange } = this.props;

        let color = searchText === "" ? undefined : "primary";
        if (this.state.searchOpen) {
            return (
                <div className={classes.toolbar}>
                    <IconButton classes={{ root: classes.searchButton }} onClick={this.toggleSearch} color={color}>
                        <SearchIcon />
                    </IconButton>
                    <TextField
                        className={classes.search}
                        autoFocus={true}
                        value={searchText}
                        onChange={(e) => onSearchTextChange(e.target.value)}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={this.clearText}
                                    >
                                        <ClearIcon/>
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div className={classes.toolbar}>
                    <IconButton classes={{ root: classes.searchButton }} onClick={this.toggleSearch} color={color}>
                        <SearchIcon />
                    </IconButton>
                    <div className={classes.spacer} />
                    <CategoriesBar categories={categories} tiny={false} selected={selected} onChange={onCategoryChange} addAll={true} />
                </div>
            );
        }
    }
}

export default withStyles(styles)(Toolbar);