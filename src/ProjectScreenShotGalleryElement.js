import React, { Component } from 'react';


class ProjectScreenShotGalleryElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 1,
        }

        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(this.NextScreenShot, this.props.intervalTime  == undefined ? 5000 : this.props.intervalTime );
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
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