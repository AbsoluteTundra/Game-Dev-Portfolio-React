import React, { Component } from 'react';

class ProjectGalleryElement extends Component {
    state =
        {
            interval: undefined,
            currentProjectImage: this.props.projectInfo.projectDirectory + "logo.jpg",
            currentScreenshotCount: 0,
        };

    ProjectSectionEnter = () => {
        if(this.state.interval != undefined)
            return;
        
        this.state.interval = setInterval(() => {
            this.setState(() => {
                this.state.currentProjectImage = this.props.projectInfo.projectDirectory + "screenshot" + this.state.currentScreenshotCount + ".jpg";
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
        this.state.interval = undefined
    }

    ProjectSectionLeave = () => {
        this.setState(() => {
            clearInterval(this.state.interval);
            return {
                currentProjectImage: this.props.projectInfo.projectDirectory + "logo.jpg",
                currentScreenshotCount: 0,
                interval: undefined
            };
        });
    }

    render() {
        return (
            <div onMouseEnter={this.ProjectSectionEnter} onTouchStart={this.ProjectSectionEnter} onMouseLeave={this.ProjectSectionLeave} onTouchEnd={this.ProjectSectionLeave} className="ProjectSection">
                <img className="ProjectImage" src={this.state.currentProjectImage}></img>
                <p>{this.props.projectInfo.projectDescription}</p>
                <a onClick={this.OnClickProjectButton} className="ProjectSectionButton">Go to project page</a>
            </div>
        );
    }

    OnClickProjectButton = () => {
        this.props.loadProjectHandler(this.props.projectInfo);
    }
}

export default ProjectGalleryElement;