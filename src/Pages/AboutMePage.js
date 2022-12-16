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
          <img src="https://media.licdn.com/dms/image/C5603AQFwk5vLwsEW5w/profile-displayphoto-shrink_800_800/0/1570112065950?e=1676505600&v=beta&t=lTlXMIjwN2QN-aoM0EjczU66M0d2_Fp4SMtgSpuBGpc" alt=""></img>
          <p>Hello my name is Michel. I'm gameplay programmer </p>
        </div>
        <FooterElement />
      </div>
    );
  }
}

export default AboutMePage;