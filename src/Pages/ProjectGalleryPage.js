import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'
import {ProjectsData} from "../ProjectsData"
import ProjectGalleryElement from '../ProjectGalleryElement'

class ProjectGalleryPage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
            <NavigationBarElement pageSwitcher={this.props.pageSwitcher}/>
            <h1>Projects</h1>
            <div className="ProjectItemsContainer">
        
                {ProjectsData.map((projectInfo) =>(
                <ProjectGalleryElement loadProjectHandler={this.props.loadProjectHandler} projectInfo={projectInfo}/>
                ))};
    
        
            </div>
            <FooterElement/>
            </div>  
        );
    }
}

export default ProjectGalleryPage;