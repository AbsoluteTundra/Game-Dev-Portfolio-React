import React, { Component } from 'react';
import "./Styles/GlobalStyle.css"
import InvidualProjectPage from './Pages/InvidualProjectPage'
import ProjectGalleryPage from './Pages/ProjectGalleryPage'
import AboutMePage from './Pages/AboutMePage'
import { ProjectsData } from "./ProjectsData"
import NavigationBarElement from './NavigationBarElement'
import FooterElement from './FooterElement';
import { Route, Routes } from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <>
        <NavigationBarElement pageSwitcher={this.SwitchPage} />
        <Routes>
          <Route path="/" element={<ProjectGalleryPage />} />
          <Route path="/AboutMe" element={<AboutMePage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
          {ProjectsData.map((projectInfo) => (<Route path={"/" + projectInfo.projectTitle} element={<InvidualProjectPage currentSelectedProject={projectInfo} />} />))}
        </Routes>
        <FooterElement />
      </>
    )
  }
}

export default App;
