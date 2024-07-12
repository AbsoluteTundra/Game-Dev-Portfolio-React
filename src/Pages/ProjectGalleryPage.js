import React, { Component } from 'react';
import { ProjectsData } from "../ProjectsData"
import ProjectGalleryElement from '../ProjectGalleryElement'
import "../Styles/ProjectGalleryPageStyle.css"

class ProjectGalleryPage extends Component {
    render() {
        return (
            <div>
                <div className="ProjectGalleryContainer">
                    <h1>Projects</h1>
                    <div className="ProjectItemsContainer">

                        {ProjectsData.map((projectInfo) => (
                            <ProjectGalleryElement loadProjectHandler={this.props.loadProjectHandler} projectInfo={projectInfo} />
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectGalleryPage;