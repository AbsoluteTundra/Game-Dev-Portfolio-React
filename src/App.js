import React, { Component } from 'react';
import "./Styles/GlobalStyle.css"
import InvidualProjectPage from './Pages/InvidualProjectPage'
import ProjectGalleryPage from './Pages/ProjectGalleryPage'
import AboutMePage from './Pages/AboutMePage'
import NavigationBarElement from './NavigationBarElement'
import FooterElement from './FooterElement';


class App extends Component {
  state = {
    currentPage: "ProjectsGallery",
    currentSelectedProject: "None"
  };


  LoadProjectPage = (selectedProjectInfo) => {
    this.SwitchPage("ProjectPage")
    this.setState({ currentSelectedProject: selectedProjectInfo });
  }

  SwitchPage = (newPage) => {
    this.setState({ currentPage: newPage })
    console.log("Switch Page");
  }

  render() {

    let pageContent;
    if (this.state.currentPage == "ProjectsGallery") {
      pageContent = <ProjectGalleryPage pageSwitcher={this.SwitchPage} loadProjectHandler={this.LoadProjectPage} />
    }
    else if (this.state.currentPage == "ProjectPage") {
      pageContent = <InvidualProjectPage pageSwitcher={this.SwitchPage} currentSelectedProject={this.state.currentSelectedProject} />
    }
    else if (this.state.currentPage == "AboutMe") {
      pageContent = <AboutMePage pageSwitcher={this.SwitchPage} />
    }

    return (
      <>
        <NavigationBarElement pageSwitcher={this.SwitchPage} />
        {pageContent}
        <FooterElement />
      </>
    )
  }
}

export default App;
