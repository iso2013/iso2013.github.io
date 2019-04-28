import React from 'react';

import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { wrapComponents } from '../components/HeaderedPage';
import ProjectsGroup from '../components/projects/ProjectsGroup';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            categories: ["Android", "Java", "Minecraft", "Web"],
            projects: [
                { name: "MultiLineAPI", description: "A Minecraft API that allows you to add multiple lines for a player's name", categories: ["Java", "Minecraft"], links: [{ icon: "docs", url: "https://iso2013.net/MultiLineAPI/javadocs/", label: "JavaDocs" }, { icon: "download", url: "https://github.com/iso2013/MultiLineAPI/releases/tag/2.0.0a", label: "Download" }] },
                { name: "DemoProject", description: "blah blah this is a description", categories: ["Web"], links: [{ icon: "docs", url: "about:blank", label: "JavaDocs" }, { icon: "download", url: "about:blank", label: "Download" }] },
                { name: "DemoProject 2", description: "blah blah this is a description", categories: ["Android"], links: [{ icon: "docs", url: "about:blank", label: "JavaDocs" }, { icon: "download", url: "about:blank", label: "Download" }] }
            ],
            loadingProjects: 2
        };
    }

    render() {
        return wrapComponents(
            <Typography variant="display1" align="center" color="inherit">Projects</Typography>,
            <ProjectsGroup categories={this.state.categories} projects={this.state.projects} loadingProjects={this.state.loadingProjects} />
        );
    }
}

export default Projects;