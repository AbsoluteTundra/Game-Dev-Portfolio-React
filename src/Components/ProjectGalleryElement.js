import React, { Component } from 'react';
import "../Styles/Components/ProjectGalleryElement.css"
import { Link } from 'react-router-dom';

class ProjectGalleryElement extends Component {
    state =
        {
            interval: undefined,
            currentProjectImage: this.props.projectInfo.projectDirectory + "logo.jpg",
            currentScreenshotCount: 0,
            isProjectSelected: false
        };

    ProjectSectionEnter = () => {
        if (this.state.interval != undefined)
            return;

        this.setState(() => { return { isProjectSelected: true }; });

        if(!this.props.projectInfo.screenshotCount || this.props.projectInfo.screenshotCount <= 0)
            return

        this.state.interval = setInterval(() => {
            this.setState(() => {
                const nextIndex = this.state.currentScreenshotCount + 1 > this.props.projectInfo.screenshotCount ? 1 : this.state.currentScreenshotCount + 1;
                return {
                    currentProjectImage: this.props.projectInfo.projectDirectory + "screenshot" + nextIndex + ".jpg",
                    currentScreenshotCount: nextIndex
                };
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    ProjectSectionLeave = () => {
        this.setState(() => {
            return {
                isProjectSelected: false,
                currentProjectImage: this.props.projectInfo.projectDirectory + "logo.jpg",
                currentScreenshotCount: 0,
                interval: clearInterval(this.state.interval)
            };
        });
    }

    render() {
        let className = "ProjectSection"

        if (this.state.isProjectSelected)
            className += " ProjectSectionSelected"

        return (
            <div onMouseEnter={this.ProjectSectionEnter} onTouchStart={this.ProjectSectionEnter} onMouseLeave={this.ProjectSectionLeave} onTouchEnd={this.ProjectSectionLeave} className={className}>
                <img className="ProjectImage" src={this.state.currentProjectImage}></img>
                <h2>{this.props.projectInfo.projectTitle}</h2>
                <p>{this.props.projectInfo.projectDescription}</p>
                <Link to={"/" + this.props.projectInfo.projectTitle} className="ProjectSectionButton">Go to project page</Link>
            </div>
        );
    }
}

export default ProjectGalleryElement;