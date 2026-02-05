import React, { Component } from 'react';
import "../Styles/Components/VideoElement.css"
import { NavLink } from 'react-router-dom';

class VideoElement extends Component {
    state ={
        videoUrl:undefined
    }
  render() {
    return (
        <video controls className="video-element">
            <source src={this.props.videoUrl}/>
        </video>
    );
  }
}

export default VideoElement;