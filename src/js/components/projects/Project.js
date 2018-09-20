import React from 'react';

import Button from '@material-ui/core/Button';
import DocsIcon from '@material-ui/icons/FileCopySharp';
import FutureImage from '../future/FutureImage';
import SaveIcon from '@material-ui/icons/SaveSharp';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CategoriesBar from './CategoriesBar';

import { project as styles } from '../../styles/projects';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    getIconBy(desc){
        if(desc === "docs") return DocsIcon;
        if(desc === "download") return SaveIcon;
        return DocsIcon;
    }

    openLink = (link) => () => {
        window.open(link);
    }

    generateStylizedName(name, toHighlight, defClass, highlightClass){
        if(toHighlight === "") {
            return [<div className={highlightClass} key={0}>{name}</div>]
        }
        toHighlight = toHighlight.replace(/\s/g, '');

        let output = [];
        let current = "";
        let key = 0;
        for(var i = 0; i < name.length; i++){
            var segment = name.substring(i, i + toHighlight.length);
            if(segment.toUpperCase() === toHighlight.toUpperCase()){
                if(current !== ""){
                    output.push(<div className={defClass} key={key++}>{current}</div>);
                    current = "";
                }
                output.push(<div className={highlightClass} key={key++}>{segment}</div>);
                i += toHighlight.length - 1;
            } else {
                current = current + name[i];
            }
        }
        if(current !== ""){
            output.push(<div className={defClass} key={key++}>{current}</div>);
            current = "";
        }

        return output;
    }

    render() {
        const { classes, iconLoader, description, name, categories, links, onCategoryChange, selected, searchQuery } = this.props;

        let linkButtons = [];

        for(var i in links){
            let Icon = this.getIconBy(links[i].icon)
            linkButtons.push(
                <Button size="small" color="primary" className={classes.link} onClick={this.openLink(links[i].url)} key={i}>
                    <Icon className={classes.linkIcon} />
                    {links[i].label}
                </Button>
            );
        }

        return (
            <div className={classes.entry}>
                <FutureImage spinnerSize={32} loadFunc={iconLoader} classNames={{ def: classes.icon }} />
                <div className={classes.details}>
                    <div className={classes.titleAndTags}>
                        <Typography variant="title">{this.generateStylizedName(name, searchQuery, classes.searchTitle, classes.title)}</Typography>
                        <div className={classes.spacer} />
                        <CategoriesBar categories={categories} tiny={true} selected={selected} onChange={(i) => onCategoryChange(categories[i])} />
                    </div>
                    <Typography classes={{ root: classes.description }}>{description}</Typography>
                    <div className={classes.titleAndTags}>
                        <div className={classes.spacer} />
                        {linkButtons}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Project);