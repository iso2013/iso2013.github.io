const categoriesBar = theme => ({
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

const failedProject = theme => ({
    entry: {
        width: "70%",
        marginTop: theme.spacing.unit * 1,
        background: "#ffeeee",
        padding: theme.spacing.unit
    }
});

const loadingProject = theme => ({
    entry: {
        width: "70%",
        marginTop: theme.spacing.unit * 2,
        display: "flex",
        alignItems: "flex-start"
    },
    spacer: {
        flexGrow: 1,
        flexShrink: 1
    },
    details: {
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
    icon: {
        minWidth: 96,
        minHeight: 96,
        marginBottom: theme.spacing.unit * 2
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
    "@media (max-width: 1064px)": {
        entry: {
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "column"
        },
        details: {
            width: "100%"
        }
    }
});

const project = theme => ({
    entry: {
        width: "70%",
        marginTop: theme.spacing.unit * 2,
        display: "flex",
        alignItems: "flex-start"
    },
    spacer: {
        flexGrow: 1,
        flexShrink: 1
    },
    details: {
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
    icon: {
        minWidth: 96,
        minHeight: 96,
        marginBottom: theme.spacing.unit * 2
    },
    link: {
        marginLeft: theme.spacing.unit,
        fontSize: 12,
        borderRadius: "unset"
    },
    linkIcon: {
        fontSize: 16,
        paddingRight: 4
    },
    searchTitle: {
        opacity: 0.3,
        display: "inline"
    },
    title: {
        display: "inline"
    },
    "@media (max-width: 1064px)": {
        entry: {
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "column"
        },
        details: {
            width: "100%"
        }
    }
});

const projectsGroup = theme => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    divider: {
        width: "70%",
        marginBottom: theme.spacing.unit
    },
    collapse: {
        width: "100%"
    }
});

const toolbar = theme => ({
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

export { categoriesBar, failedProject, loadingProject, project, projectsGroup, toolbar };