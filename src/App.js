import React, { Component } from 'react';
import ProjectElementComponent from './ProjectElementComponent'
import NavigationBarElement from './NavigationBarElement'
import FooterElement from './FooterElement'
import "./style.css"
import {ProjectsData} from "./ProjectsData"


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
    this.setState({currentPage:"ProjectPage"})
    this.setState({currentSelectedProject:selectedProjectInfo});
  }

  render()
  {
    if(this.state.currentPage=="ProjectsGallery")
    {
      return (
        <div>
          <NavigationBarElement/>
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
          <NavigationBarElement/>
          <div className="ProjectPage">
            <h1>{this.state.currentSelectedProject.projectTitle}</h1>
            <img className="ProjectPageImage" src={this.state.currentSelectedProject.projectDirectory+"logo.jpg"}/>
            <h1>Project Description</h1>
            <p className="ProjectPageDesciption">{this.state.currentSelectedProject.projectDescription}</p>
          </div>
          <FooterElement/>
        </div>
        
      );
    }
  }

}

export default App;
