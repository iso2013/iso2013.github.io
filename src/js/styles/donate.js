const donateStepper = theme => ({
    root: {
        display: 'flex'
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
        height: "3px",
        marginTop: "-0.1px"
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

export { donateStepper, donateStep };