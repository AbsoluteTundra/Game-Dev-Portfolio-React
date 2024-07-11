import React, { Component } from 'react';
import "./Styles/ProjectScreenShotGallery.css"


class ProjectScreenShotGalleryElement extends Component {
    state = {
        currentImageIndex: 1,
        interval: null
    }

    componentDidMount() {
        this.interval = setInterval(this.NextScreenShot, this.props.intervalTime == undefined ? 5000 : this.props.intervalTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    NextScreenShot = () => {
        this.setState((prevState) => {
            const nextIndex = prevState.currentImageIndex + 1 > this.props.screenshotCount ? 1 : prevState.currentImageIndex + 1;
            return { currentImageIndex: nextIndex };
        });
    };

    render() {
        return (
            <div className="ProjectScreenshotGalleryContainer">
                <h1>Screenshots:</h1>
                <img className="ProjectScreenshotGallery" src={`${this.props.screenshotsDirectory}screenshot${this.state.currentImageIndex}.jpg`}></img>
            </div>
        );
    }
}

export default ProjectScreenShotGalleryElement;