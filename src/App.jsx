import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./Styles/GlobalStyle.css"
import IndividualProjectPage from './Pages/InvidualProjectPage'
import LandingPage from './Pages/LandingPage'
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
        <div className="Page">
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="*" element={<div className='ErrorPage'><h1>Page not found :(</h1></div>}/>
                {ProjectsData.map((projectInfo) => (
                    <Route key={projectInfo.projectTitle} path={"/" + projectInfo.projectTitle}
                           element={<IndividualProjectPage currentSelectedProject={projectInfo}/>}/>
                ))}
            </Routes>
        </div>
        <FooterElement/>
    </>
  );
}

export default App;