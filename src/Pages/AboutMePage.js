import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'

class AboutMePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationBarElement pageSwitcher={this.props.pageSwitcher} />
        <h1>About Me</h1>
        <div className="AboutMeContainer">
          <img src="https://media.licdn.com/dms/image/C5603AQFwk5vLwsEW5w/profile-displayphoto-shrink_800_800/0/1570112065950?e=1683763200&v=beta&t=tVY6zjw4oiFh87i0kmh0T0UhipZCvZho2nACTw6K7ug" alt=""></img>
          <div>
            <p>I am a gameplay and tools programmer with expertise in Unity and Unreal engines. I love creating engaging game mechanics and improving development workflows through efficient tools. My passion for game development drives me to learn and grow, and I'm always looking for new challenges.</p>
          </div>
        </div>

        <h1>Experiences</h1>
        <div className='ExperienceBlock'>
          <img src="https://media.licdn.com/dms/image/C510BAQHRl2VJ0_8qZw/company-logo_100_100/0/1519875113257?e=1686787200&v=beta&t=l-pb48QF9g_82IgrxVsWqBD7VlJnu5Cx7ajpkbtgVik"></img>
          <div>
            <h1>Unity Software-Engineer 2021 - Current</h1>
            <p>Working on simulations @BlueTea</p>
          </div>
        </div>

        <div className='ExperienceBlock'>
          <img src="https://media.licdn.com/dms/image/C510BAQHRl2VJ0_8qZw/company-logo_100_100/0/1519875113257?e=1686787200&v=beta&t=l-pb48QF9g_82IgrxVsWqBD7VlJnu5Cx7ajpkbtgVik"></img>
          <div>
            <h1>Unity Software-Engineer 2021 - Current</h1>
            <p>Working on simulations @BlueTea</p>
          </div>
        </div>

        <div className='ExperienceBlock'>
          <img src="https://media.licdn.com/dms/image/C510BAQHRl2VJ0_8qZw/company-logo_100_100/0/1519875113257?e=1686787200&v=beta&t=l-pb48QF9g_82IgrxVsWqBD7VlJnu5Cx7ajpkbtgVik"></img>
          <div>
            <h1>Unity Software-Engineer 2021 - Current</h1>
            <p>Working on simulations @BlueTea</p>
          </div>
        </div>

        <div className='ExperienceBlock'>
          <img src="https://media.licdn.com/dms/image/C510BAQHRl2VJ0_8qZw/company-logo_100_100/0/1519875113257?e=1686787200&v=beta&t=l-pb48QF9g_82IgrxVsWqBD7VlJnu5Cx7ajpkbtgVik"></img>
          <div>
            <h1>Unity Software-Engineer 2021 - Current</h1>
            <p>Working on simulations @BlueTea</p>
          </div>
        </div>
        
        <FooterElement />
      </div>
    );
  }
}

export default AboutMePage;