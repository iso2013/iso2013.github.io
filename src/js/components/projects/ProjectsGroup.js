import React from 'react';

import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import LoadingProject from './LoadingProject';
import Project from './Project';
import Toolbar from './Toolbar';
import FailedProject from './FailedProject';

import { projectsGroup as styles } from '../../styles/projects';

class ProjectsGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            searchText: "",
            selected: -1
        };
    }

    changeCategory = (newCategory) => {
        this.setState({ selected: newCategory });
    }

    changeCategoryByLabel = (newCategory) => {
        this.setState({ selected: this.props.categories.indexOf(newCategory) });
    }

    changeSearch = (e) => {
        this.setState({ searchText: e });
    }

    urlToLoader(url) {
        if (!url) return () => import('../../../assets/img/iconNotFound.svg');

        return () => new Promise((resolve, reject) => {
            let image = new Image();
            image.addEventListener('load', _ => resolve(url));
            image.addEventListener('error', () => reject(new Error()));
            image.src = url;
        });
    }

    render() {
        const { classes, projects, loadingProjects, categories, errorMessage } = this.props;

        let projectObjects = [], loadingProjectObjects = [];
        for (var o in projects) {
            var obj = projects[o];

            var categorySelected = obj.categories.indexOf(categories[this.state.selected]);
            if (categorySelected < 0 && this.state.selected >= 0) continue;
            if (obj.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) < 0) continue;
            projectObjects.push(
                <Project
                    iconLoader={this.urlToLoader(obj.icon)}
                    name={obj.name}
                    description={obj.description}
                    categories={obj.categories}
                    links={obj.links}
                    selected={categorySelected}
                    searchQuery={this.state.searchText}
                    onCategoryChange={this.changeCategoryByLabel}
                    key={obj.name}
                />
            );
        }

        if(errorMessage){
            loadingProjectObjects.push(<FailedProject message={errorMessage}/>);
        } else {
            for (var i = 0; i < loadingProjects; i++)
                loadingProjectObjects.push(<LoadingProject key={i + "load"} />);
        }

        return (
            <div className={classes.wrapper}>
                <Toolbar categories={categories} selected={this.state.selected} onCategoryChange={this.changeCategory} searchText={this.state.searchText} onSearchTextChange={this.changeSearch} />
                <Divider classes={{ root: classes.divider }} />
                {projectObjects}
                {loadingProjectObjects}
            </div>
        );
    }
}

export default withStyles(styles)(ProjectsGroup);