import ProjectElementComponent from './ProjectElementComponent'
import NavigationBarElement from './NavigationBarElement'
import FooterElement from './FooterElement'
import "./style.css"
import {ProjectData} from "./ProjectData"

function App() {
  return (
    <div>
      <NavigationBarElement/>
      <h1>Projects</h1>
      <div className="ProjectItemsContainer">

        {ProjectData.map(function(data,index){
          return <ProjectElementComponent projectTitle={ProjectData[index].projectTitle} projectDescription={ProjectData[index].projectDescription} projectPage={ProjectData[index].projectPage} projectDirectory={ProjectData[index].projectDirectory}/>
        })}

      </div>
      <FooterElement/>
    </div>
  );
}

export default App;
