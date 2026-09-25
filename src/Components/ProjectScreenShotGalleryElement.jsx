import React, { Component } from 'react';
import "../Styles/Components/ProjectScreenShotGallery.css"
import ArrowLeft from '/public/icons/arrow-left.svg?react'
import ArrowRight from '/public/icons/arrow-right.svg?react'


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
                    <ArrowLeft onClick={this.PreviousScreenShot} className="arrow arrow-left"/>
                    <img src={`${this.props.screenshotsDirectory}screenshot${this.state.currentImageIndex}.jpg`}></img>
                    <ArrowRight onClick={this.PreviousScreenShot} className="arrow arrow-right"/>
                </div>
            </div>
        );
    }
}

export default ProjectScreenShotGalleryElement;