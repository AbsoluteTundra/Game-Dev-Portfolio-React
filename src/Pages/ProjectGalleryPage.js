import React, { Component } from 'react';
import { ProjectsData } from "../ProjectsData"
import ProjectGalleryElement from '../Components/ProjectGalleryElement'
import "../Styles/Pages/ProjectGalleryPageStyle.css"

class ProjectGalleryPage extends Component {
    render() {
        return (
            <div>
                <div className="ProjectGalleryContainer">
                    <div className="ProjectGalleryHeader">
                        <h1>Welcome to My Portfolio</h1>
                        <h2>Explore my projects, passion, and journey as a game developer.</h2>
                    </div>
                    <h1>Projects</h1>
                    <div className="ProjectItemsContainer">
                        {ProjectsData.map((projectInfo) => (<ProjectGalleryElement projectInfo={projectInfo} />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectGalleryPage;