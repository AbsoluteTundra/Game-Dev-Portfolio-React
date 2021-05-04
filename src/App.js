import React, { Component } from 'react';
import ProjectElementComponent from './ProjectElementComponent'
import NavigationBarElement from './NavigationBarElement'
import FooterElement from './FooterElement'
import "./style.css"
import {ProjectData} from "./ProjectData"


class App extends Component
{
  constructor(props) 
  {
    super(props);

    this.state = {
        currentPage : "Projects"
    };
  }
  

  SwtichPage=()=>
  {
    this.setState({currentPage:"None"});
  }

  render()
  {
    if(this.state.currentPage=="Projects")
    {
      return (
        <div>
           <button onClick={this.SwtichPage}>Hello</button>
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
    else
    {
      return(<h1>Something went wrong!</h1>);
    }
  }

}

export default App;
