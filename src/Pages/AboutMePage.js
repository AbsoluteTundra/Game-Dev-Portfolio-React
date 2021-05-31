import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'

class AboutMePage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
            <NavigationBarElement pageSwitcher={this.props.pageSwitcher}/>
              <h1>About Me</h1>

              <div className="AboutMeContainer">
              <img src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.18169-9/10440692_684552171612110_920391201909218945_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=TqrM9vLp670AX-vu2ng&_nc_ht=scontent-ams4-1.xx&oh=77765e03699ee2ff18d9d83384f57d47&oe=60DB0900"></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>

              <h1>Skills</h1>
              <div className="SkillsContainer">
                <img className="SkillIcon" src="https://icon-library.com/images/unity-icon/unity-icon-1.jpg"></img>
                <img className="SkillIcon" src="https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png"></img>
              </div>
            <FooterElement/>
          </div>
        );
    }
}

export default AboutMePage;