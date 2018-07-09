const page = topHeight => theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3 + (topHeight / 2),
        paddingBottom: theme.spacing.unit * 3,
        width: "80vw",
        maxWidth: "100vh",
        position: "absolute",
        top: theme.spacing.unit * 3 + (topHeight / 2)
    },
    backdrop: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});

const navBar = height => theme => console.log(theme) || ({
    navBar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        position: "absolute",
        top: theme.spacing.unit * 3,
        height,
        backgroundColor: theme.palette.primary[500],
        width: "calc(80vw - 48px)",
        maxWidth: "calc(100vh - 48px)"
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
    labelContainer: {
        paddingTop: 3,
        paddingBottom: 0
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

export { page, navBar, futureImage };