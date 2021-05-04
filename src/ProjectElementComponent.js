import React, { Component } from 'react';

class ProjectElementComponent extends Component
{
    state =
    {
        interval:"",
        currentScreenshotCount:0,
        maxScreenshotCount:5
    };

    constructor(props)
    {
        super(props);
        this.projectDiv = React.createRef();
        this.projectImage = React.createRef();
    }

    ProjectSectionEnter=()=>
    {
       this.projectDiv.current.className ='ProjectSectionSelected';

        if(this.state.interval=="")
        {
            this.state.interval = setInterval(() => 
            {
            
            if(this.state.currentScreenshotCount==this.state.maxScreenshotCount)
            {
                this.state.currentScreenshotCount=0;
            }

            this.state.currentScreenshotCount++;
            this.projectImage.current.src=this.props.projectDirectory+"screenshot"+this.state.currentScreenshotCount+".jpg";
            }, 1000);
        }
    }

    ProjectSectionLeave=()=>
    {
        this.projectImage.current.src= this.props.projectDirectory+"logo.jpg";
        this.projectDiv.current.className ='ProjectSection';
        this.state.currentScreenshotCount=0;

        clearInterval(this.state.interval);
        this.state.interval="";
    }

    render()
    {
        return(
                <div ref={this.projectDiv} onMouseEnter={this.ProjectSectionEnter} onTouchStart={this.ProjectSectionEnter} onMouseLeave={this.ProjectSectionLeave} onTouchEnd={this.ProjectSectionLeave} className="ProjectSection">
                    <img ref={this.projectImage} className="ProjectImage" src={this.props.projectDirectory+"logo.jpg"}></img>
                    <h1>{this.props.projectTitle}</h1>
                    <p>{this.props.projectDescription}</p>
                    <a className="ProjectSectionButton" href={this.props.projectPage}>Go to project page</a>
                </div>
        );
    }
}

export default ProjectElementComponent;