const tinyWidthString = "@media (max-width: 600px)";

const styles = theme => ({
    loadingText: {
        opacity: 0.3
    },
    container: {
        display: "flex",
        flexDirection: "column"
    },
    divider: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
    },
    section: {
        padding: theme.spacing.unit * 3 / 2
    },
    donationText: {
        paddingTop: theme.spacing.unit * 2
    },
    "@keyframes fadeIn": {
        from: {
            "opacity": 0.8
        }
    },
    stepperContainer: {
        display: "flex",
        alignItems: "center"
    },
    stepper: {
        flexGrow: 1
    }
});

export { styles };