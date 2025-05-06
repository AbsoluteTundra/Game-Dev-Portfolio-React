import React, { Component } from 'react';
import "../Styles/Components/NavigationBar.css"
import { NavLink } from 'react-router-dom';

class NavigationBarElement extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" exact activeClassName="active">Projects</NavLink>
        <NavLink to="/AboutMe" activeClassName="active">About Me</NavLink>
      </nav>
    );
  }
}

export default NavigationBarElement;