import React, { Component } from 'react';
import ProjectElementComponent from './ProjectElementComponent'
import NavigationBarElement from './NavigationBarComponent'
import FooterElement from './FooterElement'
import "./style.css"
import {ProjectsData} from "./ProjectsData"
import "./Styles/ProjectPageStyle.css"


class App extends Component
{
  constructor(props) 
  {
    super(props);

    this.state = {
        currentPage : "ProjectsGallery",
        currentSelectedProject:"None"
    };
  }
  

  LoadProjectPage=(selectedProjectInfo)=>
  {
    this.SwitchPage("ProjectPage")
    this.setState({currentSelectedProject:selectedProjectInfo});
  }

  SwitchPage=(newPage)=>
  {
    this.setState({currentPage:newPage})
  }

  render()
  {
    if(this.state.currentPage=="ProjectsGallery")
    {
      return (
        <div>
          <NavigationBarElement pageSwitcher={this.SwitchPage}/>
          <h1>Projects</h1>
          <div className="ProjectItemsContainer">
    
            {ProjectsData.map((projectInfo) =>(
              <ProjectElementComponent loadProjectHandler={this.LoadProjectPage} projectInfo={projectInfo}/>
            ))};
  
    
          </div>
          <FooterElement/>
        </div>
        
      );
    }
    else if(this.state.currentPage=="ProjectPage")
    {
      return (
        <div>
          <NavigationBarElement pageSwitcher={this.SwitchPage}/>
          <div className="ProjectPage">
            <img className="ProjectPageImage" src={this.state.currentSelectedProject.projectDirectory+"logo.jpg"}/>
            <h1>Project Description</h1>
            <p className="ProjectPageParagraph">{this.state.currentSelectedProject.projectDescription}</p>

            <div>
              <h1>Project Info</h1>
              <p><strong>Team Size:</strong>{this.state.currentSelectedProject.projectTeamSize}</p>
              <p><strong>Game Engine:</strong>{this.state.currentSelectedProject.projectEngine}</p>
            </div>

            <h1>Developer Story</h1>
            <p className="ProjectPageParagraph">{this.state.currentSelectedProject.projectDevStory}</p>
          </div>
          <FooterElement/>
        </div>
        
      );
    }
    else if(this.state.currentPage=="AboutMe")
    {
      return (
        <div>
          <NavigationBarElement pageSwitcher={this.SwitchPage}/>
            <h1>About Me</h1>
          <FooterElement/>
        </div>
        
      );
    }
  }

}

export default App;
