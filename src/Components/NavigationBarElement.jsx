import React, { Component } from 'react';
import "../Styles/Components/NavigationBar.css"
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class NavigationBarElement extends Component {
  render() {
    return (
      <nav>
        <HashLink smooth to="/#about-me" activeClassName="active">About Me</HashLink>
        <HashLink smooth to="/#projects" exact activeClassName="active">Projects</HashLink>
      </nav>
    );
  }
}

export default NavigationBarElement;