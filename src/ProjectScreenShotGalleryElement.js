import React, { Component } from 'react';


class ProjectScreenShotGalleryElement extends Component
{
    constructor(props)
    {
        super(props);
        this.image = React.createRef();
    }

    SwitchScreenShot=()=>
    {
        var i =1;
        setInterval(() => {

            if(this.image.current!=null)
            {
                this.image.current.src=this.props.screenshotsDirectory+"screenshot"+i+".jpg";
                i++

                if(i>5)
                {
                    i=1;
                }
            }
        }, 5000);
    }

    render()
    {
        {this.SwitchScreenShot()}
        return(
            <div  className="ProjectScreenshotGalleryContainer">
                <h1>Screenshots:</h1>
                <img ref={this.image} className="ProjectScreenshotGallery" src={this.props.screenshotsDirectory+"screenshot1.jpg"}></img>
            </div>  
        );
    }
}

export default ProjectScreenShotGalleryElement;