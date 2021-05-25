import React, { Component } from 'react';
import ProjectElementComponent from './ProjectElementComponent'
import NavigationBarComponent from './NavigationBarComponent'
import FooterElement from './FooterElement'
import "./style.css"
import {ProjectsData} from "./ProjectsData"
import "./Styles/ProjectPageStyle.css"
import InvidualProjectPageElement from './InvidualProjectPageElement'


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
          <NavigationBarComponent pageSwitcher={this.SwitchPage}/>
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
        <InvidualProjectPageElement pageSwitcher={this.SwitchPage} currentSelectedProject={this.state.currentSelectedProject}/>
      );
    }
    else if(this.state.currentPage=="AboutMe")
    {
      return (
        <div>
          <NavigationBarComponent pageSwitcher={this.SwitchPage}/>
            <h1>About Me</h1>
          <FooterElement/>
        </div>
        
      );
    }
  }

}

export default App;
