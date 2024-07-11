import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'
import {ProjectsData} from "../ProjectsData"
import ProjectGalleryElement from '../ProjectGalleryElement'
import "../Styles/ProjectGalleryPageStyle.css"

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
                <div className="ProjectGalleryContainer">
                    <h1>Projects</h1>
                    <div className="ProjectItemsContainer">
                
                        {ProjectsData.map((projectInfo) =>(
                        <ProjectGalleryElement loadProjectHandler={this.props.loadProjectHandler} projectInfo={projectInfo}/>
                        ))}
            
                
                    </div>
                </div>
                <FooterElement/>
            </div>  
        );
    }
}

export default ProjectGalleryPage;