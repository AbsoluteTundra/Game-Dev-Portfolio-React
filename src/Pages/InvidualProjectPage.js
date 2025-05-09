import React, { Component } from 'react';
import "../Styles/Pages/ProjectPageStyle.css"
import ProjectScreenshotGalleryElement from '../Components/ProjectScreenShotGalleryElement'

class InvidualProjectPage extends Component {
  //TODO Move to new component
  ProjectTrailerElement() {
    if (this.props.currentSelectedProject.projectTrailerLink != "" && this.props.currentSelectedProject.projectTrailerLink) {
      return (
        <div className="ProjectTrailerContainer">
          <h1>Trailer</h1>
          <div className="IFrameContainer">
            <iframe class="IFrameVideo" src={this.props.currentSelectedProject.projectTrailerLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      );
    }
    return (null);
  }

  render() {
    return (
      <div>
        <div className="ProjectPage">
          <img className="ProjectPageImage" src={this.props.currentSelectedProject.projectDirectory + "logo.jpg"} />
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

          {this.props.currentSelectedProject.screenshotCount && this.props.currentSelectedProject.screenshotCount > 0 && (
            <ProjectScreenshotGalleryElement 
              screenshotCount={this.props.currentSelectedProject.screenshotCount} 
              screenshotsDirectory={this.props.currentSelectedProject.projectDirectory} 
            />
          )}

          {this.ProjectTrailerElement()}

        </div>
      </div>
    );
  }
}

export default InvidualProjectPage;