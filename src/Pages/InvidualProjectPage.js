import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'
import ProjectScreenshotGalleryElement from '../ProjectScreenShotGalleryElement'

class InvidualProjectPage extends Component
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
            <div className="ProjectPage">
              <img className="ProjectPageImage" src={this.props.currentSelectedProject.projectDirectory+"logo.jpg"}/>
              <h1>Project Description</h1>
              <p className="ProjectPageParagraph">{this.props.currentSelectedProject.projectDescription}</p>
  
              <div>
                <h1>Project Info</h1>
                <p><strong>Year: </strong>{this.props.currentSelectedProject.projectYear}</p>
                <p><strong>Team Size: </strong>{this.props.currentSelectedProject.projectTeamSize}</p>
                <p><strong>Game Engine: </strong>{this.props.currentSelectedProject.projectEngine}</p>
              </div>
  
              <h1>Developer Story</h1>
              <p className="ProjectPageParagraph">{this.props.currentSelectedProject.projectDevStory}</p>

              <ProjectScreenshotGalleryElement screenshotsDirectory={this.props.currentSelectedProject.projectDirectory}/>
            </div>
            <FooterElement/>
          </div>
        );
    }
}

export default InvidualProjectPage;