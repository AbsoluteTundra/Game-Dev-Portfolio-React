import React, { Component } from 'react';
import "../Styles/Components/NavigationBar.css"
import { Link } from 'react-router-dom';


class NavigationBarElement extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Projects</Link>
        <Link to="/AboutMe">About Me</Link>
      </nav>
    );
  }
}

export default NavigationBarElement;