import React, { Component } from 'react';
import "./Styles/GlobalStyle.css"
import InvidualProjectPage from './Pages/InvidualProjectPage'
import ProjectGalleryPage from './Pages/ProjectGalleryPage'
import AboutMePage from './Pages/AboutMePage'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "ProjectsGallery",
      currentSelectedProject: "None"
    };
  }


  LoadProjectPage = (selectedProjectInfo) => {
    this.SwitchPage("ProjectPage")
    this.setState({ currentSelectedProject: selectedProjectInfo });
  }

  SwitchPage = (newPage) => {
    this.setState({ currentPage: newPage })
  }

  render() {
    if (this.state.currentPage == "ProjectsGallery") {
      return (
        <ProjectGalleryPage pageSwitcher={this.SwitchPage} loadProjectHandler={this.LoadProjectPage} projectInfo={this.state.currentSelectedProject} />
      );
    }
    else if (this.state.currentPage == "ProjectPage") {
      return (
        <InvidualProjectPage pageSwitcher={this.SwitchPage} currentSelectedProject={this.state.currentSelectedProject} />
      );
    }
    else if (this.state.currentPage == "AboutMe") {
      return (
        <AboutMePage pageSwitcher={this.SwitchPage} />
      );
    }
  }

}

export default App;
