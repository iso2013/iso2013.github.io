const mobileWidthString = "@media (max-width: 1064px)";
const tinyWidthString = "@media (max-width: 600px)";

const page = topHeight => theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3 + (topHeight / 2),
        paddingBottom: theme.spacing.unit * 3,
        width: "60vw",
        position: "relative",
        top: theme.spacing.unit * 3 - (topHeight / 2)
    },
    backdrop: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    [mobileWidthString]: {
        paper: {
            width: "calc(100vw - " + (theme.spacing.unit * 12) + "px)",
        },
    },
    [tinyWidthString]: {
        paper: {
            width: "calc(100vw - " + (theme.spacing.unit * 10) + "px)",
        },
    }
});

const header = topHeight => theme => ({
    header: {
        backgroundColor: "#373737",
        marginTop: -(theme.spacing.unit * 3 + (topHeight / 2)),
        marginLeft: -theme.spacing.unit * 3,
        marginRight: -theme.spacing.unit * 3,
        marginBottom: 0,
        paddingTop: theme.spacing.unit * 3 + (topHeight / 2),
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        color: "#fff"
    },
    wrapper: {
        paddingTop: theme.spacing.unit * 3
    },
    [tinyWidthString]: {
        header: {
            paddingLeft: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
            marginLeft: -theme.spacing.unit * 2,
            marginRight: -theme.spacing.unit * 2
        }
    }
});

const navBar = height => theme => ({
    navBar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        position: "relative",
        top: theme.spacing.unit * 3,
        height,
        backgroundColor: theme.palette.primary[500],
        width: "calc(60vw - " + height + "px)"
    },
    navBarMenu: {
        backgroundColor: theme.palette.primary[500]
    },
    navBarMenuRoot: {
        color: "rgba(255,255,255,0.87)",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)"
        }
    },
    navBarMenuItem: {
        color: "#fff"
    },
    tabIndicator: {
        backgroundColor: theme.palette.type === "light" ? theme.palette.secondary[500] : "#fff"
    },
    tabText: {
        color: "#fff",
        fontSize: 10,
        minHeight: height,
        minWidth: 72,
        fontWeight: 700
    },
    tabRipple: {
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)"
        }
    },
    labelContainer: {
        paddingTop: 3,
        paddingBottom: 0
    },
    overflowMenu: {
        minWidth: 48
    },
    tabsMobile: {
        visibility: "collapse",
        display: "none"
    },
    [mobileWidthString]: {
        navBar: {
            width: "calc(100vw - " + (theme.spacing.unit * 16) + "px)",
        },
    },
    [tinyWidthString]: {
        tabs: {
            visibility: "collapse",
            display: "none"
        },
        tabsMobile: {
            visibility: "unset",
            display: "unset"
        }
    }
});

const futureImage = theme => ({
    div: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.type === "light" ? "#ddd" : "#676767"
    }
});

const donateStepper = theme => ({
    root: {
        display: 'flex',
        padding: 24
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    vertical: {
        flexDirection: 'column'
    },
    connector: {
        stroke: theme.palette.text.disabled,
        strokeWidth: 4,
        '&$active': {
            stroke: theme.palette.primary.main
        },
        height: "3px"
    },
    active: {}
});

const donateStep = theme => ({
    icon: {
        display: "block",
        color: theme.palette.text.disabled,
        '&$active': {
            color: theme.palette.primary.main,
        },
    },
    iconLine: {
        stroke: theme.palette.text.disabled,
        strokeWidth: 4,
        '&$active': {
            stroke: theme.palette.primary.main
        }
    },
    active: {},
    horizontal: {
        paddingLeft: 8,
        paddingRight: 8,
        '&:first-child': {
            paddingLeft: 0,
        },
        '&:last-child': {
            paddingRight: 0,
        },
    },
    vertical: {},
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    iconContainer: {
        paddingRight: 8
    },
    label: {
        color: theme.palette.text.secondary,
        '&$active': {
            color: theme.palette.text.primary,
            fontWeight: 500,
        }
    },
    labelContainer: {
        width: "100%"
    }
});

export { page, header, navBar, futureImage, donateStepper, donateStep };