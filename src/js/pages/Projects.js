import React from 'react';

import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/SearchSharp';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/SaveSharp';
import MoreIcon from '@material-ui/icons/MoreVertSharp';
import Work2Icon from '@material-ui/icons/FileCopySharp';
import { withStyles } from '@material-ui/core/styles';
import FutureImage from '../components/future/FutureImage';
import HeaderedPage from '../components/HeaderedPage';
import { Divider } from '@material-ui/core';

const styles = theme => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    categories: {
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
    categoryButton: {
        marginLeft: theme.spacing.unit,
        fontSize: 12,
        borderRadius: "unset",
        flexShrink: 0
    },
    spacer: {
        flexGrow: 1,
        flexShrink: 1
    },
    tempLoadDiv: {
        minWidth: 96,
        minHeight: 96,
        marginBottom: theme.spacing.unit * 2
    },
    entry: {
        width: "70%",
        marginTop: theme.spacing.unit * 2,
        display: "flex",
        alignItems: "flex-start"
    },
    entryButton: {
        marginLeft: theme.spacing.unit,
        fontSize: 10,
        minHeight: "unset",
        minWidth: "unset",
        padding: "2px 6px",
        borderRadius: "unset"
    },
    entryButtonTwo: {
        marginLeft: theme.spacing.unit,
        fontSize: 12,
        borderRadius: "unset"
    },
    entryButtonIcon: {
        fontSize: 16,
        paddingRight: 4
    },
    entryInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexGrow: 1,
        paddingLeft: theme.spacing.unit * 2
    },
    titleAndTags: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    entryDescription: {
        marginBottom: theme.spacing.unit
    },
    placeholderTitle: {
        height: "1.3125rem",
        width: "30%",
        backgroundColor: "#DDD",
    },
    placeholderDescription: {
        height: "0.875rem",
        flexGrow: 1,
        backgroundColor: "#EEE",
        marginBottom: theme.spacing.unit
    },
    divider: {
        width: "70%",
        marginBottom: theme.spacing.unit
    },
    categoriesListButton: {
        visibility: "collapse",
        display: "none",
        maxHeight: 36,
        maxWidth: 36
    },
    entryListButton: {
        marginLeft: theme.spacing.unit,
        fontSize: 10,
        minHeight: "unset",
        minWidth: "unset",
        padding: "2px 6px",
        borderRadius: "unset",
        visibility: "collapse",
        display: "none",
    },
    entryListButtonIcon: {
        fontSize: 14
    },
    "@media (max-width: 1064px)": {
        categoryButton: {
            visibility: "collapse",
            display: "none"
        },
        categoriesListButton: {
            visibility: "unset",
            display: "unset"
        },
        entry: {
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "column"
        },
        entryInfo: {
            width: "100%"
        },
        entryButton: {
            visibility: "collapse",
            display: "none"
        },
        entryListButton: {
            visibility: "unset",
            display: "unset"
        }
    }
});

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes } = this.props;

        return (
            <Fade in={true} timeout={250}>
                <HeaderedPage
                    header={
                        <Typography variant="display1" align="center" color="inherit">Projects</Typography>
                    }

                    content={
                        <div className={classes.wrapper}>
                            <div className={classes.categories}>
                                <IconButton classes={{root: classes.searchButton}}>
                                    <SearchIcon />
                                </IconButton>
                                {/* <TextField
                                    className={classes.margin}
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                /> */}
                                <div className={classes.spacer} />
                                <Button variant="contained" size="small" color="primary" className={classes.categoryButton}>All</Button>
                                <Button variant="outlined" size="small" color="primary" className={classes.categoryButton}>Minecraft</Button>
                                <Button variant="outlined" size="small" color="primary" className={classes.categoryButton}>Android</Button>
                                <Button variant="outlined" size="small" color="primary" className={classes.categoryButton}>Web</Button>
                                <Button variant="outlined" size="small" color="primary" className={classes.categoryButton}>Java</Button>
                                <IconButton classes={{root: classes.categoriesListButton}}>
                                    <MoreIcon/>
                                </IconButton>
                            </div>
                            <Divider classes={{root: classes.divider}}/>
                            <div className={classes.entry}>
                                <FutureImage spinnerSize={32} loadFunc={() => import("../../assets/img/iconNotFound.svg")} classNames={{ def: classes.tempLoadDiv }} />
                                <div className={classes.entryInfo}>
                                    <div className={classes.titleAndTags}>
                                        <Typography variant="title">DemoProject</Typography>
                                        <div className={classes.spacer} />
                                        <Button variant="outlined" size="small" color="primary" className={classes.entryButton}>Minecraft</Button>
                                        <Button variant="outlined" size="small" color="primary" className={classes.entryButton}>Java</Button>
                                        <Button variant="outlined" size="small" color="primary" className={classes.entryListButton}><MoreIcon classes={{root: classes.entryListButtonIcon}}/></Button>
                                    </div>
                                    <Typography classes={{ root: classes.entryDescription }}>Lorem ipsum dolor sit amet blah blah blah this is a really cool resource that has a fancy description and it goes on and on and on and on Lorem ipsum dolor sit amet blah blah blah this is a really cool resource that has a fancy description and it goes on and on aLorem ipsum dolor sit amet blah blah blah this is a really cool resource that has a fancy description and it goes on and on and on and onLorem ipsum dolor sit amet blah blah blah this is a really cool resource that has a fancy description and it goes on and on and on and onnd on and on</Typography>
                                    <div className={classes.titleAndTags}>
                                        <div className={classes.spacer} />
                                        <Button size="small" color="primary" className={classes.entryButtonTwo}>
                                            <Work2Icon className={classes.entryButtonIcon} />
                                            JavaDocs
                                        </Button>
                                        <Button size="small" color="primary" className={classes.entryButtonTwo}>
                                            <WorkIcon className={classes.entryButtonIcon} />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.entry}>
                                <FutureImage spinnerSize={32} loadFunc={() => new Promise(function () { })} classNames={{ def: classes.tempLoadDiv }} />
                                <div className={classes.entryInfo}>
                                    <div className={classes.titleAndTags}>
                                        <div className={classes.placeholderTitle} />
                                        <div className={classes.spacer} />
                                    </div>
                                    <div className={classes.placeholderDescription} />
                                    <div className={classes.placeholderDescription} />
                                    <div className={classes.placeholderDescription} />
                                </div>
                            </div>
                        </div>
                    }
                />
            </Fade>
        );
    }
}

export default withStyles(styles)(Projects);