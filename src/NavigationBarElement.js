import React, { Component } from 'react';


class NavigationBarElement extends Component
{

  constructor(props)
  {
      super(props);
  }

  render()
  {
    return(
        <nav>
        <a onClick={this.OnProjectsClick}>Projects</a>
        <a onClick={this.OnAboutMeClick}>About Me</a>
        </nav>    
    );
  }

  OnProjectsClick=()=>
  {
    this.props.pageSwitcher("ProjectsGallery");
  }

  OnAboutMeClick=()=>
  {
    this.props.pageSwitcher("AboutMe");
  }
}

export default NavigationBarElement;