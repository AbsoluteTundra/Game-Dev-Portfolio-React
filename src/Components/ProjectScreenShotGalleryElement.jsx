import React, { Component } from 'react';
import "../Styles/Components/ProjectScreenShotGallery.css"


class ProjectScreenShotGalleryElement extends Component {
    state = {
        currentImageIndex: 1,
        interval: null
    }

    componentDidMount() {
        this.startInterval();
    }

    startInterval() {
        clearInterval(this.interval);
        this.interval = setInterval(this.NextScreenShot, this.props.intervalTime == undefined ? 5000 : this.props.intervalTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    NextScreenShot = () => {
        this.setState((prevState) => {
            this.startInterval();
            const nextIndex = prevState.currentImageIndex + 1 > this.props.screenshotCount ? 1 : prevState.currentImageIndex + 1;
            return { currentImageIndex: nextIndex };
        });
    };

    PreviousScreenShot = () => {
        this.startInterval();
        this.setState((prevState) => {
            const nextIndex = prevState.currentImageIndex - 1 < 1 ? this.props.screenshotCount : prevState.currentImageIndex - 1;
            return { currentImageIndex: nextIndex };
        });
    }

    render() {
        return (
            <div className="ProjectScreenshotGalleryContainer">
                <h1>Screenshots</h1>
                <div className="ProjectScreenshotGallery">
                    <svg onClick={this.PreviousScreenShot} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow arrow-left"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                    <img src={`${this.props.screenshotsDirectory}screenshot${this.state.currentImageIndex}.jpg`}></img>
                    <svg onClick={this.NextScreenShot} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow arrow-right"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default ProjectScreenShotGalleryElement;