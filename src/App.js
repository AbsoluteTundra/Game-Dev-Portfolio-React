import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./Styles/GlobalStyle.css"
import InvidualProjectPage from './Pages/InvidualProjectPage'
import ProjectGalleryPage from './Pages/ProjectGalleryPage'
import AboutMePage from './Pages/AboutMePage'
import { ProjectsData } from "./ProjectsData"
import NavigationBarElement from './Components/NavigationBarElement'
import FooterElement from './Components/FooterElement';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavigationBarElement />
      <Routes>
        <Route path="/" element={<ProjectGalleryPage />} />
        <Route path="/AboutMe" element={<AboutMePage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        {ProjectsData.map((projectInfo) => (
          <Route key={projectInfo.projectTitle} path={"/" + projectInfo.projectTitle} element={<InvidualProjectPage currentSelectedProject={projectInfo} />} />
        ))}
      </Routes>
      <FooterElement />
    </>
  );
}

export default App;