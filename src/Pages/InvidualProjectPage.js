import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'
import ProjectScreenshotGalleryElement from '../ProjectScreenShotGalleryElement'
import { ProjectsData } from '../ProjectsData';
import { Player } from 'video-react';

class InvidualProjectPage extends Component
{
    constructor(props)
    {
        super(props);
    }

    ProjectTrailerElement() 
    {
      if(this.props.currentSelectedProject.projectTrailerLink !="")
      {
        return(
          <div className="ProjectTrailerContainer">
            <h1>Trailer:</h1>
            <iframe width="75%" src="https://www.youtube.com/embed/XtOX2gqb1wE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        );
      }
      else
      {
        return(null);
      }
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

              <ProjectScreenshotGalleryElement screenshotCount={this.props.currentSelectedProject.screenshotCount} screenshotsDirectory={this.props.currentSelectedProject.projectDirectory}/>

              {this.ProjectTrailerElement()}

            </div>
            <FooterElement/>
          </div>
        );
    }
}

export default InvidualProjectPage;